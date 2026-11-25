"""
SVJ Jewellers - Local Static Server & Live Bullion Rates Proxy
Serves static files on port 8000 and proxies /api/rates (NebulaAPI primary, live gold-api.com + open.er-api.com fallback).
"""

import http.server
import json
import os
import urllib.request
from datetime import datetime, timezone

PORT = 8000
DIRECTORY = os.path.dirname(os.path.abspath(__file__))
NEBULA_TOKEN = "nbk_1bR8M6Q6w_uw9pDg1penScaubjF2fHRs"
TROY_OUNCE_IN_GRAMS = 31.1034768


def fetch_json(url, headers=None, timeout=3):
    req_headers = {"Accept": "application/json", "User-Agent": "SVJ-Jewellers/1.0"}
    if headers:
        req_headers.update(headers)
    req = urllib.request.Request(url, headers=req_headers)
    with urllib.request.urlopen(req, timeout=timeout) as resp:
        return json.loads(resp.read().decode("utf-8"))


def fetch_nebula_rates():
    headers = {"Authorization": f"Bearer {NEBULA_TOKEN}"}
    gold = fetch_json("https://workspace.nebulaapi.com/gold_price?city=Mumbai", headers)
    silver = fetch_json("https://workspace.nebulaapi.com/silver_price?city=Mumbai", headers)
    return {"success": True, "source": "nebulaapi", "gold": gold, "silver": silver}


def fetch_live_spot_fallback():
    xau = fetch_json("https://api.gold-api.com/price/XAU")
    xag = fetch_json("https://api.gold-api.com/price/XAG")
    fx = fetch_json("https://open.er-api.com/v6/latest/USD")

    usd_inr = float(fx["rates"]["INR"])
    xau_usd = float(xau["price"])
    xag_usd = float(xag["price"])

    # Indian domestic market calculation: international spot + 15% import duty + domestic premium + 3% GST
    gold24_10g = round((xau_usd / TROY_OUNCE_IN_GRAMS) * usd_inr * 10 * 1.1545 * 1.03)
    gold24_1g = round(gold24_10g / 10)
    gold22_10g = round(gold24_10g * 0.9167)
    gold22_1g = round(gold22_10g / 10)
    gold18_10g = round(gold24_10g * 0.75)
    gold18_1g = round(gold18_10g / 10)

    silver_1kg = round((xag_usd / TROY_OUNCE_IN_GRAMS) * usd_inr * 1000 * 1.21 * 1.03)
    silver_1g = round(silver_1kg / 1000, 2)

    now_iso = datetime.now(timezone.utc).isoformat()
    return {
        "success": True,
        "source": "gold-api-live",
        "gold": {
            "success": True,
            "market": "Indian Market (Live Spot + Duty & 3% GST)",
            "city": "Mumbai / Solapur",
            "timestamp": now_iso,
            "prices": {
                "gold24k": {"priceFor10g": gold24_10g, "pricePerGram": gold24_1g},
                "gold22k": {"priceFor10g": gold22_10g, "pricePerGram": gold22_1g},
                "gold18k": {"priceFor10g": gold18_10g, "pricePerGram": gold18_1g},
            },
        },
        "silver": {
            "success": True,
            "timestamp": now_iso,
            "prices": {
                "silver": {"pricePerKg": silver_1kg, "pricePerGram": silver_1g}
            },
        },
    }


class SVJHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def do_GET(self):
        if self.path.startswith("/api/rates"):
            try:
                try:
                    data = fetch_nebula_rates()
                except Exception:
                    data = fetch_live_spot_fallback()

                payload = json.dumps(data).encode("utf-8")
                self.send_response(200)
                self.send_header("Content-Type", "application/json")
                self.send_header("Cache-Control", "no-store")
                self.send_header("Access-Control-Allow-Origin", "*")
                self.end_headers()
                self.wfile.write(payload)
            except Exception as exc:
                err_payload = json.dumps({"success": False, "error": str(exc)}).encode("utf-8")
                self.send_response(502)
                self.send_header("Content-Type", "application/json")
                self.end_headers()
                self.wfile.write(err_payload)
            return

        super().do_GET()


if __name__ == "__main__":
    http.server.ThreadingHTTPServer(("0.0.0.0", PORT), SVJHandler).serve_forever()
