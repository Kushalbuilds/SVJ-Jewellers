# SVJ JEWELLERS - Mobile-First Web Application & 3D Showcase

A luxury mobile-first web application designed for **SVJ Jewellers, Solapur**, featuring real-time 3D Three.js gold and diamond animation, interactive contact channels, and an extensible architecture ready for inventory document and photo uploads.

---

## 📍 Showroom Information & Contacts

* **Brand Name:** SVJ Jewellers
* **Contact Phone:** [+91 83789 29951](tel:8378929951)
* **Direct WhatsApp:** [Chat on WhatsApp](https://wa.me/918378929951?text=Hello%20SVJ%20Jewellers)
* **Official Email:** [svjjewellers28@gmail.com](mailto:svjjewellers28@gmail.com)
* **Showroom Address:**
  > **478 Purv Mangalwar Peth, Baba Complex, Saraf Bazar, Solapur, Maharashtra**
* **Google Maps Navigation:** [Open in Google Maps](https://www.google.com/maps/search/?api=1&query=478+Purv+Mangalwar+Peth+Solapur+Baba+Complex+Saraf+Bazar)

---

## ✨ Key Features

1. **Live Gold & Silver Bullion Rates Hub:**
   - Real-time rates for **24 Karat Pure Gold (99.9)**, **22 Karat Hallmark Gold (BIS 916)**, **18 Karat Diamond Jewellery Gold (BIS 750)**, and **Pure Fine Silver (1 Kilogram)**.
   - Live daily market behavior engine calibrated to MCX / Solapur IBJA benchmarks with daily percentage change indicators.
   - Interactive **Live Rate Calculator**: input custom grams or tolas, compute base price + 3% GST, and instantly lock today's rate on WhatsApp.
   - Sync Market button with automated live refresh.

2. **Pure Silver Samai & Niranjan Collection (91 New Designs):**
   - High-resolution photographs extracted from SVJ Jewellers Silver Lamps Collection catalog.
   - Full technical specifications: Height in inches (5" to 21"), weight in grams (130g to 2350g / 2.35kg), hallmark certification, and peacock / Lakshmi / elephant motifs.
   - Dedicated "Pure Silver Collection" category filter in the catalog.

3. **Demo Crafts for Gold & Silver Rings and Necklaces:**
   - 18K Solitaire Diamond Rings, 18K Rose Gold Eternity Bands, 22K Navratna Sovereign Rings, and 925 Sterling Silver Promise Rings.
   - 22K Royal Kolhapuri Saaj Bridal Haars, Traditional Thushi Chokers, Temple Lakshmi Kasumalais, and 925 Silver Antique Saaj Necklaces.

4. **3D Interactive Jewelry Experience (Three.js):**
   - Faceted brilliant solitaire diamond with optical refraction, transmission, and dispersion physics (`MeshPhysicalMaterial`).
   - 6-prong gold crown setting and high-shine band.
   - Real-time metal switcher: **Yellow Gold (22K)**, **Rose Gold (18K)**, and **Platinum / White Gold**.
   - Floating diamond dust and gold particle sparkle atmosphere.
   - Smooth touch rotation and auto-rotation with gentle floating breathing motion.

2. **Mobile Application Feel:**
   - Designed for iOS / Android mobile webviews and mobile browsers.
   - Sticky top app bar with 916 Hallmark & trust ticker.
   - Quick action floating bar: **One-tap Call**, **Instant WhatsApp**, and **Showroom Map**.
   - Mobile bottom navigation bar with elevated 3D Showcase ball.
   - Touch-friendly category filters (Rings, Necklaces, Bangles, Earrings, Bridal).

3. **Inquiry & Orders System:**
   - Direct-to-WhatsApp pre-filled message generator.
   - One-click showroom email dispatch.
   - Interactive Google Maps embed and directions trigger.

---

## 💎 Uploading Your Item Documents & Photos Later

Whenever you have your item documents, photos, or spreadsheets ready, you can add them in two easy ways:

### Method A: Dropping Photos
1. Place your jewelry photos or certificate scans into:
   ```
   assets/items/
   ```
2. Open [items.js](file:///C:/Users/DELL/.gemini/antigravity/scratch/svj-jewellers/items.js) and update the `SVJ_CATALOG` array with the item details:
   ```javascript
   {
     id: "svj-101",
     title: "Traditional Kolhapuri Thushi",
     category: "necklaces",
     metal: "22K Pure Hallmark Gold",
     purity: "BIS 916 Hallmarked",
     weight: "18.50 g",
     certification: "HUID Certified",
     badge: "New Arrival",
     description: "Handcrafted close-fitting choker with gold beads.",
     // Point to your image in assets/items:
     iconSvg: `<img src="assets/items/thushi.jpg" alt="Thushi" />`
   }
   ```

### Method B: Uploading PDF / Excel Catalog
You can also share your PDF / Excel documents with the assistant, and they will be automatically converted into catalog entries.

---

## 🚀 How to Run & Preview

You can open the application directly in your browser:
- Double click [index.html](file:///C:/Users/DELL/.gemini/antigravity/scratch/svj-jewellers/index.html)
- Or run any local static server:
  ```bash
  npx serve .
  # or
  python -m http.server 8080
  ```
