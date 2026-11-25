"""
SVJ Jewellers - Local Static Server & Live Bullion Rates Proxy
Serves static files on port 8000 and proxies /api/rates to NebulaAPI (avoids browser CORS).
"""

import http.server
import json
import os
import urllib.request
import urllib.error

PORT = 8000
DIRECTORY = os.path.dirname(os.path.abspath(__file__))
NEBULA_TOKEN = "nbk_1bR8M6Q6w_uw9pDg1penScaubjF2fHRs"


def fetch_nebula(endpoint):
    req = urllib.request.Request(
        f"https://workspace.nebulaapi.com/{endpoint}",
        headers={
            "Authorization": f"Bearer {NEBULA_TOKEN}",
            "Accept": "application/json",
            "User-Agent": "SVJ-Jewellers/1.0",
        },
    )
    with urllib.request.urlopen(req, timeout=10) as resp:
        return json.loads(resp.read().decode("utf-8"))


class SVJHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def do_GET(self):
        if self.path.startswith("/api/rates"):
            try:
                gold = fetch_nebula("gold_price?city=Mumbai")
                silver = fetch_nebula("silver_price?city=Mumbai")
                payload = json.dumps({"success": True, "gold": gold, "silver": silver}).encode("utf-8")
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
