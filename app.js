/**
 * SVJ Jewellers - Desktop Interactions, Live 1-Minute Bullion Rates & Contact Handlers
 * Solapur Showroom: 8378929951 | svjjewellers28@gmail.com
 */

document.addEventListener("DOMContentLoaded", () => {
  // 1. Initial Product Render
  if (typeof renderProducts === "function") {
    renderProducts("all");
  }

  // 2. Filter Pills
  const filterPills = document.querySelectorAll(".filter-pill");
  filterPills.forEach(pill => {
    pill.addEventListener("click", () => {
      filterPills.forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      const category = pill.getAttribute("data-category");
      if (typeof renderProducts === "function") {
        renderProducts(category);
      }
    });
  });

  // 3. Dynamic Year
  const yearEl = document.getElementById("current-year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // 4. Product Detail Modal
  const productModal = document.getElementById("product-detail-modal");
  const closeProductModalBtn = document.getElementById("btn-close-product-modal");
  if (closeProductModalBtn && productModal) {
    closeProductModalBtn.addEventListener("click", () => productModal.classList.remove("active"));
  }

  window.addEventListener("click", (e) => {
    if (productModal && e.target === productModal) productModal.classList.remove("active");
  });

  // 5. Contact Form
  const contactForm = document.getElementById("contact-form");
  const btnSubmitWa = document.getElementById("btn-submit-whatsapp");
  const formStatus = document.getElementById("form-status");

  if (btnSubmitWa) {
    btnSubmitWa.addEventListener("click", () => {
      const name = document.getElementById("client-name").value.trim();
      const phone = document.getElementById("client-phone").value.trim();
      const interest = document.getElementById("jewelry-type").value;
      const message = document.getElementById("client-message").value.trim();

      if (!name || !phone) {
        showStatus("Please enter your Name and Phone number.", "#c97b18");
        return;
      }

      const waMsg = `✨ *SVJ Jewellers Inquiry*\n` +
        `👤 *Name:* ${name}\n` +
        `📞 *Phone:* ${phone}\n` +
        `💎 *Interest:* ${interest}\n` +
        (message ? `📝 *Message:* ${message}\n` : '') +
        `📍 *Showroom:* Saraf Bazar, Solapur`;

      window.open(`https://wa.me/918378929951?text=${encodeURIComponent(waMsg)}`, "_blank");
      showStatus("Opening WhatsApp...", "#1f9d55");
    });
  }

  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("client-name").value.trim();
      const phone = document.getElementById("client-phone").value.trim();
      const interest = document.getElementById("jewelry-type").value;
      const message = document.getElementById("client-message").value.trim();

      const subject = encodeURIComponent(`Jewellery Inquiry: ${interest} - ${name}`);
      const body = encodeURIComponent(
        `Dear SVJ Jewellers Team,\n\nI would like to inquire about jewellery.\n\n` +
        `- Name: ${name}\n- Phone: ${phone}\n- Interest: ${interest}\n` +
        (message ? `- Message: ${message}\n` : '') +
        `\nThank you,\n${name}`
      );

      window.location.href = `mailto:svjjewellers28@gmail.com?subject=${subject}&body=${body}`;
      showStatus("Drafting email...", "#c97b18");
    });
  }

  function showStatus(text, color) {
    if (!formStatus) return;
    formStatus.textContent = text;
    formStatus.style.color = color || "#c97b18";
  }

  // =========================================================================
  // 6. LIVE GOLD & SILVER RATES ENGINE (NebulaAPI Mumbai Live Feed Every 60s)
  // =========================================================================

  const NEBULA_TOKEN = "nbk_1bR8M6Q6w_uw9pDg1penScaubjF2fHRs";

  const RatesEngine = {
    previousRates: null,
    currentRates: {
      gold24k: 0,
      gold24k1g: 0,
      gold22k: 0,
      gold22k1g: 0,
      gold18k: 0,
      gold18k1g: 0,
      silver1kg: 0,
      silver10g: 0,
      goldPositive: true,
      silverPositive: true,
      goldBadgeText: "LIVE",
      silverBadgeText: "LIVE",
      lastUpdated: new Date(),
      statusText: "Connecting to NebulaAPI..."
    },

    async fetchLiveRates() {
      try {
        let goldData, silverData;

        // Prefer local /api/rates proxy (avoids CORS), fall back to direct NebulaAPI
        try {
          const proxyResp = await fetch("/api/rates", { cache: "no-store" });
          if (proxyResp.ok) {
            const combined = await proxyResp.json();
            if (combined?.success && combined.gold && combined.silver) {
              goldData = combined.gold;
              silverData = combined.silver;
            }
          }
        } catch (_) {
          // Ignore proxy failure and try direct fetch
        }

        if (!goldData || !silverData) {
          const headers = { "Authorization": `Bearer ${NEBULA_TOKEN}` };
          const [goldResp, silverResp] = await Promise.all([
            fetch("https://workspace.nebulaapi.com/gold_price?city=Mumbai", { method: "GET", headers }),
            fetch("https://workspace.nebulaapi.com/silver_price?city=Mumbai", { method: "GET", headers })
          ]);
          if (!goldResp.ok || !silverResp.ok) {
            throw new Error(`API HTTP ${goldResp.status}/${silverResp.status}`);
          }
          [goldData, silverData] = await Promise.all([goldResp.json(), silverResp.json()]);
        }

        const g24 = goldData?.prices?.gold24k;
        const g22 = goldData?.prices?.gold22k;
        const g18 = goldData?.prices?.gold18k;
        const sil = silverData?.prices?.silver;

        if (!g24 || !g22 || !g18 || !sil) {
          throw new Error("Incomplete NebulaAPI payload");
        }

        const gold24k = Math.round(g24.priceFor10g);
        const gold24k1g = Math.round(g24.pricePerGram);
        const gold22k = Math.round(g22.priceFor10g);
        const gold22k1g = Math.round(g22.pricePerGram);
        const gold18k = Math.round(g18.priceFor10g);
        const gold18k1g = Math.round(g18.pricePerGram);
        const silver1kg = Math.round(sil.pricePerKg);
        const silver10g = Math.round(sil.pricePerGram * 10);

        let goldPositive = true;
        let silverPositive = true;
        let goldBadgeText = "LIVE (incl. 3% GST)";
        let silverBadgeText = "LIVE (incl. 3% GST)";

        if (this.previousRates && this.previousRates.gold24k > 0) {
          const gDiffPct = ((gold24k - this.previousRates.gold24k) / this.previousRates.gold24k) * 100;
          const sDiffPct = ((silver1kg - this.previousRates.silver1kg) / this.previousRates.silver1kg) * 100;
          if (gDiffPct !== 0) {
            goldPositive = gDiffPct >= 0;
            goldBadgeText = `${goldPositive ? "+" : ""}${gDiffPct.toFixed(2)}% ${goldPositive ? "▲" : "▼"}`;
          }
          if (sDiffPct !== 0) {
            silverPositive = sDiffPct >= 0;
            silverBadgeText = `${silverPositive ? "+" : ""}${sDiffPct.toFixed(2)}% ${silverPositive ? "▲" : "▼"}`;
          }
        }

        this.currentRates = {
          gold24k,
          gold24k1g,
          gold22k,
          gold22k1g,
          gold18k,
          gold18k1g,
          silver1kg,
          silver10g,
          goldPositive,
          silverPositive,
          goldBadgeText,
          silverBadgeText,
          lastUpdated: new Date(goldData.timestamp || Date.now()),
          statusText: `${goldData.market || "Indian Market"} • ${goldData.city || "Mumbai"} (Live)`
        };

        this.previousRates = { gold24k, silver1kg };
      } catch (err) {
        console.warn("Live rate fetch error:", err.message);
        this.currentRates.statusText = "Reconnecting to live feed...";
      }

      this.updateUI();
    },

    updateUI() {
      const r = this.currentRates;
      const fmt = (n) => (n > 0 ? Number(n).toLocaleString("en-IN") : "--");

      const set = (id, val) => {
        const el = document.getElementById(id);
        if (el) el.textContent = val;
      };

      set("rate-gold-24k-10g", fmt(r.gold24k));
      set("rate-gold-24k-1g", fmt(r.gold24k1g));
      set("rate-gold-22k-10g", fmt(r.gold22k));
      set("rate-gold-22k-1g", fmt(r.gold22k1g));
      set("rate-gold-18k-10g", fmt(r.gold18k));
      set("rate-gold-18k-1g", fmt(r.gold18k1g));
      set("rate-silver-1kg", fmt(r.silver1kg));
      set("rate-silver-10g", fmt(r.silver10g));

      ["rate-gold-24k-change", "rate-gold-22k-change", "rate-gold-18k-change"].forEach(id => {
        const el = document.getElementById(id);
        if (!el) return;
        el.textContent = r.goldBadgeText;
        el.className = `rate-change ${r.goldPositive ? "positive" : "negative"}`;
      });

      const silEl = document.getElementById("rate-silver-change");
      if (silEl) {
        silEl.textContent = r.silverBadgeText;
        silEl.className = `rate-change ${r.silverPositive ? "positive" : "negative"}`;
      }

      const dateEl = document.getElementById("rates-current-date");
      if (dateEl) {
        dateEl.textContent = r.lastUpdated.toLocaleString("en-IN", {
          day: "numeric",
          month: "short",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit"
        });
      }

      const statusEl = document.getElementById("market-status-badge");
      if (statusEl) {
        statusEl.textContent = r.statusText;
      }
    },

    refresh() {
      const btn = document.getElementById("btn-refresh-rates");
      const text = document.getElementById("refresh-text");
      if (btn) btn.classList.add("syncing");
      if (text) text.textContent = "Syncing...";

      this.fetchLiveRates().then(() => {
        if (btn) btn.classList.remove("syncing");
        if (text) text.textContent = "Synced";
        setTimeout(() => {
          if (text) text.textContent = "Sync Now";
        }, 1500);
      });
    }
  };

  RatesEngine.fetchLiveRates();

  const btnRefresh = document.getElementById("btn-refresh-rates");
  if (btnRefresh) {
    btnRefresh.addEventListener("click", () => RatesEngine.refresh());
  }

  // Auto-refresh every 60 seconds
  setInterval(() => {
    RatesEngine.fetchLiveRates();
  }, 60000);
});
