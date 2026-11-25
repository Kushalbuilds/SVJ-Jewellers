import json
import os

# Generate items.js
silver_items_data = [
    {"num": 1, "size": '17"', "weight": '1650 g', "title": 'Royal Peacock Nakshi Samai (Pair)', "img": 'assets/silver/silver_001.jpg', "badge": 'Exclusive'},
    {"num": 2, "size": '15.5"', "weight": '1200 g', "title": 'Heritage Mayur Fluted Samai (Pair)', "img": 'assets/silver/silver_002.jpg', "badge": 'Bestseller'},
    {"num": 3, "size": '16"', "weight": '1340 g', "title": 'Classic Floral Bell Base Samai (Pair)', "img": 'assets/silver/silver_003.jpg', "badge": 'Handcrafted'},
    {"num": 4, "size": '18"', "weight": '1400 g', "title": 'Shankh & Chakra Finial Tall Samai (Pair)', "img": 'assets/silver/silver_004.jpg', "badge": 'Temple Art'},
    {"num": 5, "size": '13"', "weight": '900 g', "title": 'Gaja Elephant Pedestal Peacock Samai (Pair)', "img": 'assets/silver/silver_005.jpg', "badge": 'Heritage'},
    {"num": 6, "size": '10.5"', "weight": '800 g', "title": 'Traditional Fluted Column Samai (Pair)', "img": 'assets/silver/silver_006.jpg', "badge": 'Popular'},
    {"num": 7, "size": '13"', "weight": '1350 g', "title": 'Ornate Double Border Peacock Samai (Pair)', "img": 'assets/silver/silver_007.jpg', "badge": 'Pooja Special'},
    {"num": 8, "size": '12"', "weight": '1000 g (1 kg)', "title": 'Goddess Lakshmi Nakshi Pedestal Samai (Pair)', "img": 'assets/silver/silver_008.jpg', "badge": 'Devotional'},
    {"num": 9, "size": '7"', "weight": '340 g', "title": 'Compact Fluted Mayur Diya Stand (Pair)', "img": 'assets/silver/silver_009.jpg', "badge": 'Daily Pooja'},
    {"num": 10, "size": '11"', "weight": '850 g', "title": 'Antique Floral Engraved Samai (Pair)', "img": 'assets/silver/silver_010.jpg', "badge": 'Handcrafted'},
    {"num": 11, "size": '5.5"', "weight": '250 g', "title": 'Miniature Grace Peacock Diya (Pair)', "img": 'assets/silver/silver_011.jpg', "badge": 'Gift Special'},
    {"num": 12, "size": '7"', "weight": '430 g', "title": 'Dome Base Peacock Samai (Pair)', "img": 'assets/silver/silver_012.jpg', "badge": 'Bestseller'},
    {"num": 13, "size": '8"', "weight": '440 g', "title": 'Checkered Lattice Globe Samai (Pair)', "img": 'assets/silver/silver_013.jpg', "badge": 'Artisan Choice'},
    {"num": 14, "size": '14"', "weight": '1260 g', "title": 'Dancing Elephant Pedestal Samai (Pair)', "img": 'assets/silver/silver_014.jpg', "badge": 'Royal Heritage'},
    {"num": 15, "size": '5.5"', "weight": '250 g', "title": 'Classic Sleek Peacock Diya (Pair)', "img": 'assets/silver/silver_015.jpg', "badge": 'Daily Pooja'},
    {"num": 16, "size": '9"', "weight": '630 g', "title": 'Gaja Base Layered Oil Basin Samai (Pair)', "img": 'assets/silver/silver_016.jpg', "badge": 'Trending'},
    {"num": 17, "size": '9"', "weight": '630 g', "title": 'Heritage Elephant Stand Samai (Pair)', "img": 'assets/silver/silver_017.jpg', "badge": 'Temple Art'},
    {"num": 18, "size": '15"', "weight": '1370 g', "title": 'Grand Elephant Pedestal Samai (Pair)', "img": 'assets/silver/silver_018.jpg', "badge": 'Bridal Pride'},
    {"num": 19, "size": '16"', "weight": '1474 g', "title": 'Royal Elephant Court Samai (Pair)', "img": 'assets/silver/silver_019.jpg', "badge": 'Masterpiece'},
    {"num": 20, "size": '11"', "weight": '857 g', "title": 'Elephant Pillar Silver Niranjan (Pair)', "img": 'assets/silver/silver_020.jpg', "badge": 'Traditional'},
    {"num": 21, "size": '13"', "weight": '950 g', "title": 'Slender Fluted Peacock Samai (Pair)', "img": 'assets/silver/silver_021.jpg', "badge": 'Popular'},
    {"num": 22, "size": '11"', "weight": '857 g', "title": 'Heritage Elephant Pedestal Niranjan (Pair)', "img": 'assets/silver/silver_022.jpg', "badge": 'Handcrafted'},
    {"num": 23, "size": '7.5"', "weight": '440 g', "title": 'Cone Filigree Engraved Samai (Pair)', "img": 'assets/silver/silver_023.jpg', "badge": 'Daily Pooja'},
    {"num": 24, "size": '7.5"', "weight": '440 g', "title": 'Intricate Net Pattern Samai (Pair)', "img": 'assets/silver/silver_024.jpg', "badge": 'Artisan Choice'},
    {"num": 25, "size": '17"', "weight": '1450 g', "title": 'Elephant Footed Ornate Samai (Pair)', "img": 'assets/silver/silver_025.jpg', "badge": 'Royal Heritage'},
    {"num": 26, "size": '17.5"', "weight": '1440 g', "title": 'Tapered Vine Engraved Samai (Pair)', "img": 'assets/silver/silver_026.jpg', "badge": 'Temple Art'},
    {"num": 27, "size": '18"', "weight": '1650 g', "title": 'Elephant Legged Ornate Samai (Pair)', "img": 'assets/silver/silver_027.jpg', "badge": 'Bestseller'},
    {"num": 28, "size": '10"', "weight": '500 g', "title": 'Conical Floral Nakshi Samai (Pair)', "img": 'assets/silver/silver_028.jpg', "badge": 'Popular'},
    {"num": 29, "size": '10.5"', "weight": '560 g', "title": 'Antique Vine Baluster Samai (Pair)', "img": 'assets/silver/silver_029.jpg', "badge": 'Trending'},
    {"num": 30, "size": '11.5"', "weight": '720 g', "title": 'Parrot & Peacock Perched Samai (Pair)', "img": 'assets/silver/silver_030.jpg', "badge": 'Rare Masterpiece'},
    {"num": 31, "size": '10.5"', "weight": '550 g', "title": 'Fluted Tiered Silver Samai (Pair)', "img": 'assets/silver/silver_031.jpg', "badge": 'Pooja Special'},
    {"num": 32, "size": '10"', "weight": '540 g', "title": 'Ribbed Pillar Mayur Samai (Pair)', "img": 'assets/silver/silver_032.jpg', "badge": 'Handcrafted'},
    {"num": 33, "size": '10.5"', "weight": '530 g', "title": 'Classic Fluted Base Samai (Pair)', "img": 'assets/silver/silver_033.jpg', "badge": 'Traditional'},
    {"num": 34, "size": '10"', "weight": '640 g', "title": 'Heavy Floral Nakshi Samai (Pair)', "img": 'assets/silver/silver_034.jpg', "badge": 'Temple Art'},
    {"num": 35, "size": '6.5"', "weight": '260 g', "title": 'Compact Double Globe Samai (Pair)', "img": 'assets/silver/silver_035.jpg', "badge": 'Daily Pooja'},
    {"num": 36, "size": '8"', "weight": '350 g', "title": 'Graceful Floral Stem Samai (Pair)', "img": 'assets/silver/silver_036.jpg', "badge": 'Gift Special'},
    {"num": 37, "size": '7"', "weight": '320 g', "title": 'Petal Pattern Compact Samai (Pair)', "img": 'assets/silver/silver_037.jpg', "badge": 'Popular'},
    {"num": 38, "size": '8"', "weight": '550 g', "title": 'Elephant Pedestal Floral Samai (Pair)', "img": 'assets/silver/silver_038.jpg', "badge": 'Handcrafted'},
    {"num": 39, "size": '9"', "weight": '500 g', "title": 'Ring Stem Peacock Niranjan (Pair)', "img": 'assets/silver/silver_039.jpg', "badge": 'Bestseller'},
    {"num": 40, "size": '7"', "weight": '280 g', "title": 'Smooth Baluster Mayur Diya (Pair)', "img": 'assets/silver/silver_040.jpg', "badge": 'Daily Pooja'},
    {"num": 41, "size": '9"', "weight": '400 g', "title": 'Shankh Motif Globe Samai (Pair)', "img": 'assets/silver/silver_041.jpg', "badge": 'Devotional'},
    {"num": 42, "size": '7"', "weight": '340 g', "title": 'Tiered Petal Silver Samai (Pair)', "img": 'assets/silver/silver_042.jpg', "badge": 'Pooja Special'},
    {"num": 43, "size": '10"', "weight": '560 g', "title": 'Double Pot Nakshi Samai (Pair)', "img": 'assets/silver/silver_043.jpg', "badge": 'Exclusive'},
    {"num": 44, "size": '9"', "weight": '440 g', "title": 'Fluted Column Peacock Samai (Pair)', "img": 'assets/silver/silver_044.jpg', "badge": 'Popular'},
    {"num": 45, "size": '9.5"', "weight": '450 g', "title": 'Baluster Floral Engraved Samai (Pair)', "img": 'assets/silver/silver_045.jpg', "badge": 'Handcrafted'},
    {"num": 46, "size": '6"', "weight": '220 g', "title": 'Mini Classic Peacock Diya (Pair)', "img": 'assets/silver/silver_046.jpg', "badge": 'Gift Special'},
    {"num": 47, "size": '11.5"', "weight": '690 g', "title": 'Tapered Filigree Pillar Samai (Pair)', "img": 'assets/silver/silver_047.jpg', "badge": 'Bestseller'},
    {"num": 48, "size": '7"', "weight": '350 g', "title": 'Floral Engraved Compact Samai (Pair)', "img": 'assets/silver/silver_048.jpg', "badge": 'Popular'},
    {"num": 49, "size": '8.5"', "weight": '470 g', "title": 'Laxmi Prabhavali Crown Samai (Pair)', "img": 'assets/silver/silver_049.jpg', "badge": 'Devotional'},
    {"num": 50, "size": '9"', "weight": '500 g', "title": 'Embossed Floral Pedestal Samai (Pair)', "img": 'assets/silver/silver_050.jpg', "badge": 'Temple Art'},
    {"num": 51, "size": '8"', "weight": '350 g', "title": 'Graceful Slender Stem Samai (Pair)', "img": 'assets/silver/silver_051.jpg', "badge": 'Artisan Choice'},
    {"num": 52, "size": '11"', "weight": '620 g', "title": 'Tapered Column Peacock Samai (Pair)', "img": 'assets/silver/silver_052.jpg', "badge": 'Traditional'},
    {"num": 53, "size": '9"', "weight": '450 g', "title": 'Goddess Lakshmi Crown Diya (Pair)', "img": 'assets/silver/silver_053.jpg', "badge": 'Auspicious'},
    {"num": 54, "size": '13"', "weight": '1023 g', "title": 'Spiral Ribbed Elephant Base Samai (Pair)', "img": 'assets/silver/silver_054.jpg', "badge": 'Royal Heritage'},
    {"num": 55, "size": '6.5"', "weight": '260 g', "title": 'Compact Globe Filigree Samai (Pair)', "img": 'assets/silver/silver_055.jpg', "badge": 'Daily Pooja'},
    {"num": 56, "size": '5.5"', "weight": '240 g', "title": 'Petite Mayur Table Samai (Pair)', "img": 'assets/silver/silver_056.jpg', "badge": 'Gift Special'},
    {"num": 57, "size": '8"', "weight": '370 g', "title": 'Dual Sphere Nakshi Samai (Pair)', "img": 'assets/silver/silver_057.jpg', "badge": 'Trending'},
    {"num": 58, "size": '8.5"', "weight": '470 g', "title": 'Carved Floral Globe Samai (Pair)', "img": 'assets/silver/silver_058.jpg', "badge": 'Handcrafted'},
    {"num": 59, "size": '7"', "weight": '320 g', "title": 'Delicate Vine Pattern Samai (Pair)', "img": 'assets/silver/silver_059.jpg', "badge": 'Popular'},
    {"num": 60, "size": '8"', "weight": '400 g', "title": 'Traditional Dome Pillar Samai (Pair)', "img": 'assets/silver/silver_060.jpg', "badge": 'Pooja Special'},
    {"num": 61, "size": '9"', "weight": '550 g', "title": 'Ornate Embossed Base Samai (Pair)', "img": 'assets/silver/silver_061.jpg', "badge": 'Bestseller'},
    {"num": 62, "size": '6.25"', "weight": '280 g', "title": 'Conical Filigree Mayur Diya (Pair)', "img": 'assets/silver/silver_062.jpg', "badge": 'Daily Pooja'},
    {"num": 63, "size": '5"', "weight": '230 g', "title": 'Mini Peacock Fan Tail Diya (Pair)', "img": 'assets/silver/silver_063.jpg', "badge": 'Gift Special'},
    {"num": 64, "size": '7"', "weight": '350 g', "title": 'Bell Pedestal Peacock Samai (Pair)', "img": 'assets/silver/silver_064.jpg', "badge": 'Popular'},
    {"num": 65, "size": '8"', "weight": '480 g', "title": 'Tapered Floral Net Diya (Pair)', "img": 'assets/silver/silver_065.jpg', "badge": 'Artisan Choice'},
    {"num": 66, "size": '6.5"', "weight": '130 g', "title": 'Lightweight Elegant Diya (Pair)', "img": 'assets/silver/silver_066.jpg', "badge": 'Daily Pooja'},
    {"num": 67, "size": '15.5"', "weight": '1500 g', "title": 'Grand Lakshmi Prabhavali Arch Samai (Pair)', "img": 'assets/silver/silver_067.jpg', "badge": 'Temple Masterpiece'},
    {"num": 68, "size": '14"', "weight": '1000 g (1 kg)', "title": 'Spiral Ribbed Master Samai (Pair)', "img": 'assets/silver/silver_068.jpg', "badge": 'Royal Heritage'},
    {"num": 69, "size": '8"', "weight": '462 g', "title": 'Classic Fluted Base Samai (Pair)', "img": 'assets/silver/silver_069.jpg', "badge": 'Popular'},
    {"num": 70, "size": '16"', "weight": '1650 g', "title": 'Heritage Lakshmi Arch Fluted Samai (Pair)', "img": 'assets/silver/silver_070.jpg', "badge": 'Devotional'},
    {"num": 71, "size": '9"', "weight": '480 g', "title": 'Fluted Mayur Pedestal Samai (Pair)', "img": 'assets/silver/silver_071.jpg', "badge": 'Pooja Special'},
    {"num": 72, "size": '12"', "weight": '720 g', "title": 'Multi-Tiered Globe Samai (Pair)', "img": 'assets/silver/silver_072.jpg', "badge": 'Handcrafted'},
    {"num": 73, "size": '10"', "weight": '580 g', "title": 'Intricate Mesh Base Samai (Pair)', "img": 'assets/silver/silver_073.jpg', "badge": 'Bestseller'},
    {"num": 74, "size": '10"', "weight": '560 g', "title": 'Embossed Floral Petal Samai (Pair)', "img": 'assets/silver/silver_074.jpg', "badge": 'Trending'},
    {"num": 75, "size": '7.5"', "weight": '440 g', "title": 'Fluted Tiered Diya Stand (Pair)', "img": 'assets/silver/silver_075.jpg', "badge": 'Daily Pooja'},
    {"num": 76, "size": '8.5"', "weight": '340 g', "title": 'Slender Spire Mayur Samai (Pair)', "img": 'assets/silver/silver_076.jpg', "badge": 'Popular'},
    {"num": 77, "size": '6.5"', "weight": '380 g', "title": 'Heavy Engraved Diya (Pair)', "img": 'assets/silver/silver_077.jpg', "badge": 'Artisan Choice'},
    {"num": 78, "size": '8.5"', "weight": '500 g', "title": 'Conical Lattice Mayur Samai (Pair)', "img": 'assets/silver/silver_078.jpg', "badge": 'Temple Art'},
    {"num": 79, "size": '8.5"', "weight": '400 g', "title": 'Dual Pattern Globe Samai (Pair)', "img": 'assets/silver/silver_079.jpg', "badge": 'Pooja Special'},
    {"num": 80, "size": '13.5"', "weight": '760 g', "title": 'Stacked Tier Mayur Samai (Pair)', "img": 'assets/silver/silver_080.jpg', "badge": 'Traditional'},
    {"num": 81, "size": '7.5"', "weight": '400 g', "title": 'Fluted Pedestal Diya Stand (Pair)', "img": 'assets/silver/silver_081.jpg', "badge": 'Gift Special'},
    {"num": 82, "size": '8"', "weight": '530 g', "title": 'Carved Baluster Samai (Pair)', "img": 'assets/silver/silver_082.jpg', "badge": 'Handcrafted'},
    {"num": 83, "size": '7.5"', "weight": '360 g', "title": 'Bell Base Mayur Samai (Pair)', "img": 'assets/silver/silver_083.jpg', "badge": 'Popular'},
    {"num": 84, "size": '8"', "weight": '480 g', "title": 'Ribbed Base Peacock Samai (Pair)', "img": 'assets/silver/silver_084.jpg', "badge": 'Trending'},
    {"num": 85, "size": '5.5"', "weight": '250 g', "title": 'Petite Peacock Diya Pair', "img": 'assets/silver/silver_085.jpg', "badge": 'Daily Pooja'},
    {"num": 86, "size": '5.5"', "weight": '260 g', "title": 'Fluted Petal Petite Diya (Pair)', "img": 'assets/silver/silver_086.jpg', "badge": 'Daily Pooja'},
    {"num": 87, "size": '21"', "weight": '2350 g', "title": 'Imperial 21-Inch Elephant Pedestal Samai (Pair)', "img": 'assets/silver/silver_087.jpg', "badge": 'Showpiece Grand'},
    {"num": 88, "size": '21"', "weight": '1800 g', "title": 'Grand 21-Inch Ornate Mayur Samai (Pair)', "img": 'assets/silver/silver_088.jpg', "badge": 'Royal Temple'},
    {"num": 89, "size": '18"', "weight": '1400 g', "title": 'Magnificent 18-Inch Triple Tier Samai (Pair)', "img": 'assets/silver/silver_089.jpg', "badge": 'Exclusive'},
    {"num": 90, "size": '17"', "weight": '1500 g', "title": 'Splendid 17-Inch Filigree Pillar Samai (Pair)', "img": 'assets/silver/silver_090.jpg', "badge": 'Masterpiece'},
    {"num": 91, "size": '15"', "weight": '1250 g', "title": 'Grand Open-Fan Peacock Samai (Pair)', "img": 'assets/silver/silver_091.jpg', "badge": 'Grand Heritage'}
]

items = []

# 1. Gold & Silver Rings (Demo crafts as requested)
items.append({
    "id": "svj-ring-001",
    "title": "Imperial Solitaire Diamond Ring",
    "category": "rings",
    "metal": "18K Hallmarked White & Yellow Gold",
    "purity": "BIS 750 / 18 Karat",
    "weight": "4.85 g",
    "diamondWeight": "1.05 Carat VVS-EF",
    "certification": "IGI Certified Solitaire",
    "badge": "Bestseller",
    "priceEstimate": "Available on Inquiry",
    "description": "An iconic six-prong solitaire ring radiating pure fire and brilliance. Perfect for engagements and landmark milestones.",
    "iconSvg": """<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="50" cy="50" rx="36" ry="24" stroke="url(#goldGrad)" stroke-width="6"/>
      <path d="M50 20 L40 34 L60 34 Z" fill="url(#diaGrad)" stroke="#fff" stroke-width="1.5"/>
      <circle cx="50" cy="24" r="3" fill="#fff"/>
      <defs>
        <linearGradient id="goldGrad" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#fceda2"/><stop offset="50%" stop-color="#d4af37"/><stop offset="100%" stop-color="#997010"/></linearGradient>
        <linearGradient id="diaGrad" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#ffffff"/><stop offset="100%" stop-color="#b8e2f2"/></linearGradient>
      </defs>
    </svg>"""
})

items.append({
    "id": "svj-ring-002",
    "title": "Eternal Rose Diamond Eternity Band",
    "category": "rings",
    "metal": "18K Rose Gold",
    "purity": "18K BIS 750",
    "weight": "3.90 g",
    "diamondWeight": "0.85 Carat Round Brilliant",
    "certification": "IGI Certified",
    "badge": "Daily Luxury",
    "priceEstimate": "Available on Inquiry",
    "description": "A seamless circle of brilliant round cut diamonds handset in 18K rose gold micro-prongs. Timeless daily elegance.",
    "iconSvg": """<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="50" cy="50" rx="34" ry="22" stroke="url(#roseGrad)" stroke-width="5"/>
      <circle cx="50" cy="28" r="3.5" fill="#fff"/>
      <circle cx="35" cy="32" r="3" fill="#fff"/>
      <circle cx="65" cy="32" r="3" fill="#fff"/>
      <circle cx="22" cy="42" r="2.5" fill="#fff"/>
      <circle cx="78" cy="42" r="2.5" fill="#fff"/>
      <defs>
        <linearGradient id="roseGrad" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#fcd5ce"/><stop offset="50%" stop-color="#df8f7c"/><stop offset="100%" stop-color="#a85244"/></linearGradient>
      </defs>
    </svg>"""
})

items.append({
    "id": "svj-ring-003",
    "title": "Royal Men's Navratna Sovereign Ring",
    "category": "rings",
    "metal": "22K Pure Hallmark Gold",
    "purity": "BIS 916 / 22 Karat",
    "weight": "9.40 g",
    "certification": "BIS 916 Hallmark & Gem Certificate",
    "badge": "Auspicious",
    "priceEstimate": "Available on Inquiry",
    "description": "Majestic astrological nine planetary gemstones set symmetrically in solid 22K yellow gold with hand-finished bevels.",
    "iconSvg": """<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="50" cy="52" rx="36" ry="22" stroke="url(#goldGrad)" stroke-width="7"/>
      <rect x="36" y="24" width="28" height="22" rx="4" fill="#d4af37" stroke="#fff" stroke-width="1.5"/>
      <circle cx="50" cy="35" r="4" fill="#e63946"/>
      <circle cx="42" cy="30" r="2" fill="#3a86ff"/>
      <circle cx="58" cy="30" r="2" fill="#2a9d8f"/>
      <circle cx="42" cy="40" r="2" fill="#ffb703"/>
      <circle cx="58" cy="40" r="2" fill="#fb8500"/>
    </svg>"""
})

items.append({
    "id": "svj-ring-004",
    "title": "925 Pure Silver Solitaire Promise Ring",
    "category": "rings",
    "metal": "92.5 Sterling Fine Silver",
    "purity": "925 Hallmark Silver",
    "weight": "3.50 g",
    "certification": "SVJ 925 Hallmark Stamp",
    "badge": "Pure Silver",
    "priceEstimate": "Available on Inquiry",
    "description": "Rhodium-plated anti-tarnish pure sterling silver ring with a dazzling 1.5 Carat Hearts & Arrows center stone.",
    "iconSvg": """<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="50" cy="50" rx="35" ry="22" stroke="#e2e8f0" stroke-width="6"/>
      <path d="M50 22 L42 34 L58 34 Z" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
      <circle cx="50" cy="24" r="3" fill="#a5f3fc"/>
    </svg>"""
})

# 2. Gold & Silver Necklaces (Demo crafts)
items.append({
    "id": "svj-neck-001",
    "title": "Royal Kolhapuri Saaj Bridal Haar",
    "category": "necklaces",
    "metal": "22K Pure Hallmark Gold",
    "purity": "BIS 916 / 22 Karat",
    "weight": "48.20 g",
    "certification": "916 Hallmarked with HUID",
    "badge": "Heritage",
    "priceEstimate": "Available on Inquiry",
    "description": "Traditional Maharashtrian heritage necklace handcrafted with 21 auspicious leaves and an intricate central pendant embedded with rubies.",
    "iconSvg": """<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 30 Q50 80 80 30" stroke="url(#goldGrad)" stroke-width="5" stroke-linecap="round"/>
      <circle cx="50" cy="68" r="10" fill="url(#goldGrad)" stroke="#ffd700" stroke-width="2"/>
      <circle cx="50" cy="68" r="4" fill="#e63946"/>
      <path d="M30 42 L35 50 M70 42 L65 50" stroke="url(#goldGrad)" stroke-width="3"/>
    </svg>"""
})

items.append({
    "id": "svj-neck-002",
    "title": "Traditional Kolhapuri Thushi Choker",
    "category": "necklaces",
    "metal": "22K Hallmark Royal Gold",
    "purity": "BIS 916 Hallmark",
    "weight": "24.50 g",
    "certification": "HUID Hallmarked",
    "badge": "Handcrafted",
    "priceEstimate": "Available on Inquiry",
    "description": "Authentic Maharashtrian close-fitting neckpiece with dense gold beads and royal red silk dori tie-up.",
    "iconSvg": """<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M25 40 Q50 70 75 40" stroke="url(#goldGrad)" stroke-width="8" stroke-dasharray="6 2"/>
      <circle cx="50" cy="62" r="7" fill="#d4af37"/>
      <circle cx="50" cy="62" r="3" fill="#e63946"/>
    </svg>"""
})

items.append({
    "id": "svj-neck-003",
    "title": "Temple Lakshmi Kasumalai Long Haar",
    "category": "necklaces",
    "metal": "22K Antique Yellow Gold",
    "purity": "BIS 916 Certified",
    "weight": "62.80 g",
    "certification": "100% HUID Certified",
    "badge": "Temple Art",
    "priceEstimate": "Available on Inquiry",
    "description": "Opulent South-Indian temple coins intricately pressed with Goddess Lakshmi motifs, strung on ornate hand-woven gold chain.",
    "iconSvg": """<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 25 Q50 90 80 25" stroke="url(#goldGrad)" stroke-width="4"/>
      <circle cx="30" cy="45" r="5" fill="#d4af37"/>
      <circle cx="40" cy="58" r="5" fill="#d4af37"/>
      <circle cx="50" cy="66" r="6" fill="#d4af37"/>
      <circle cx="60" cy="58" r="5" fill="#d4af37"/>
      <circle cx="70" cy="45" r="5" fill="#d4af37"/>
    </svg>"""
})

items.append({
    "id": "svj-neck-004",
    "title": "925 Pure Silver Antique Kolhapuri Saaj",
    "category": "necklaces",
    "metal": "92.5 Sterling Fine Silver",
    "purity": "925 Hallmark Silver",
    "weight": "36.40 g",
    "certification": "SVJ 925 Hallmark Seal",
    "badge": "Pure Silver",
    "priceEstimate": "Available on Inquiry",
    "description": "Exquisite silver interpretation of the heritage Kolhapuri Saaj with oxidized antique patina and engraved auspicious paan leaves.",
    "iconSvg": """<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M22 30 Q50 82 78 30" stroke="#cbd5e1" stroke-width="5" stroke-linecap="round"/>
      <circle cx="50" cy="70" r="9" fill="#94a3b8" stroke="#fff" stroke-width="1.5"/>
      <circle cx="50" cy="70" r="3" fill="#e2e8f0"/>
    </svg>"""
})

# 3. Bangles, Earrings & Bridal
items.append({
    "id": "svj-bangle-001",
    "title": "Antique Temple Nakshi Kada (Pair)",
    "category": "bangles",
    "metal": "22K Antique Yellow Gold",
    "purity": "BIS 916 Certified",
    "weight": "54.60 g",
    "certification": "HUID Hallmarked",
    "badge": "Handcrafted",
    "priceEstimate": "Available on Inquiry",
    "description": "Intricately carved temple nakshi work depicting Goddess Lakshmi surrounded by floral vine engravings with screw-lock security.",
    "iconSvg": """<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="32" stroke="url(#goldGrad)" stroke-width="8"/>
      <circle cx="50" cy="50" r="24" stroke="rgba(255,255,255,0.4)" stroke-dasharray="2 4"/>
      <circle cx="20" cy="50" r="4" fill="#d4af37"/>
      <circle cx="80" cy="50" r="4" fill="#d4af37"/>
    </svg>"""
})

items.append({
    "id": "svj-earring-001",
    "title": "Chandbali Polki & Pearl Jhumkas",
    "category": "earrings",
    "metal": "22K Yellow Gold with Uncut Polki",
    "purity": "916 Hallmarked",
    "weight": "22.40 g",
    "certification": "Hallmark + Gem Lab Card",
    "badge": "Trending",
    "priceEstimate": "Available on Inquiry",
    "description": "Crescent-moon motif earrings embellished with natural uncut diamonds, handpicked Basra pearls, and emerald cluster drops.",
    "iconSvg": """<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="26" r="8" fill="url(#goldGrad)"/>
      <path d="M35 50 C35 70 65 70 65 50" stroke="url(#goldGrad)" stroke-width="5" fill="none"/>
      <circle cx="50" cy="74" r="5" fill="#f8f9fa" stroke="#d4af37" stroke-width="1.5"/>
    </svg>"""
})

items.append({
    "id": "svj-bridal-001",
    "title": "Grand Solapuri Vivah Bridal Choker Set",
    "category": "bridal",
    "metal": "22K Hallmark Royal Gold",
    "purity": "BIS 916 Hallmark",
    "weight": "72.10 g",
    "certification": "100% HUID Certified",
    "badge": "Bridal Pride",
    "priceEstimate": "Available on Inquiry",
    "description": "An opulent wedding statement choker set encrusted with royal gemstone medallions and delicate dangling gold beads.",
    "iconSvg": """<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="20" y="32" width="60" height="14" rx="4" fill="url(#goldGrad)" stroke="#ffd700" stroke-width="1.5"/>
      <circle cx="35" cy="58" r="6" fill="#e63946"/>
      <circle cx="50" cy="62" r="8" fill="url(#goldGrad)" stroke="#fff" stroke-width="1"/>
      <circle cx="65" cy="58" r="6" fill="#2a9d8f"/>
    </svg>"""
})

# 4. Now add all the Silver Samai Items with their real images!
for s in silver_items_data:
    item_id = f"svj-silver-{s['num']:03d}"
    items.append({
        "id": item_id,
        "title": f"{s['title']} - {s['size']}",
        "category": "silver",
        "metal": "92.5 Fine Sterling Silver",
        "purity": "BIS 925 Hallmark Silver",
        "weight": s['weight'],
        "size": s['size'],
        "certification": "SVJ 925 Hallmark Certified",
        "badge": s['badge'],
        "priceEstimate": "Calculated by Live Silver Rate",
        "image": s['img'],
        "description": f"Magnificent pair of handcrafted pure 925 silver Samai lamps ({s['size']} height, approx. weight {s['weight']}). Adorned with auspicious Mayur (peacock) finial and deeply embossed traditional nakshi work. Perfect for temple pooja, festive illumination, wedding gifts, and griha pravesh."
    })

# Write out items.js
js_content = f'''/**
 * SVJ Jewellers - Item Catalog Architecture
 * Live rates, Gold & Silver collections, and real Silver Lamp photos
 */

const SVJ_CATALOG = {json.dumps(items, indent=2)};

// Helper to render products into grid
function renderProducts(category = "all") {{
  const grid = document.getElementById("products-grid");
  if (!grid) return;

  const filtered = category === "all" 
    ? SVJ_CATALOG 
    : SVJ_CATALOG.filter(item => item.category === category);

  grid.innerHTML = filtered.map(item => {{
    const waText = encodeURIComponent(
      `Hello SVJ Jewellers, I am inquiring about *${{item.title}}* (ID: ${{item.id}}, Purity: ${{item.purity}}, Weight: ${{item.weight}}). Please share today's live price and availability.`
    );
    
    // Check if item has real image or SVG
    const visualContent = item.image 
      ? `<img src="${{item.image}}" alt="${{item.title}}" class="product-real-img" loading="lazy" />`
      : (item.iconSvg || `<i class="fa-solid fa-gem" style="font-size: 40px; color: #d4af37;"></i>`);

    return `
      <div class="product-card" data-category="${{item.category}}">
        <span class="product-badge">${{item.badge}}</span>
        <div class="product-img-wrap" onclick="openProductModal('${{item.id}}')" style="cursor: pointer;">
          ${{visualContent}}
        </div>
        <div class="product-body">
          <span class="product-category">${{item.category.toUpperCase()}}</span>
          <h4 class="product-title">${{item.title}}</h4>
          <div class="product-purity">
            <i class="fa-solid fa-scale-balanced"></i> <strong>${{item.weight}}</strong>
          </div>
          <div class="product-purity-sub">
            <i class="fa-solid fa-certificate"></i> ${{item.purity}}
          </div>
          <div class="product-actions">
            <a href="https://wa.me/918378929951?text=${{waText}}" target="_blank" rel="noopener" class="btn-card-inquire" title="Inquire on WhatsApp">
              <i class="fa-brands fa-whatsapp"></i> Inquire
            </a>
            <button class="btn-card-view" onclick="openProductModal('${{item.id}}')" title="View Specifications" aria-label="View Details">
              <i class="fa-solid fa-eye"></i> Specs
            </button>
          </div>
        </div>
      </div>
    `;
  }}).join("");
}}

// Open Product Quick View Modal
function openProductModal(id) {{
  const item = SVJ_CATALOG.find(i => i.id === id);
  if (!item) return;

  const modal = document.getElementById("product-detail-modal");
  const title = document.getElementById("modal-product-title");
  const body = document.getElementById("modal-product-body");

  title.textContent = item.title;
  const waText = encodeURIComponent(
    `Hello SVJ Jewellers, I would like to inquire about *${{item.title}}* (${{item.id}}). Purity: ${{item.purity}}, Approx Weight: ${{item.weight}}.`
  );

  const visualPreview = item.image 
    ? `<img src="${{item.image}}" alt="${{item.title}}" style="max-height: 220px; max-width: 100%; border-radius: 8px; object-fit: contain;" />`
    : (item.iconSvg || `<i class="fa-solid fa-gem" style="font-size: 50px; color: #d4af37;"></i>`);

  body.innerHTML = `
    <div style="text-align: center; margin-bottom: 14px;">
      <div style="width: 100%; max-height: 240px; margin: 0 auto; background: radial-gradient(circle, #1a2332, #080c12); border-radius: 12px; display: flex; align-items: center; justify-content: center; border: 1px solid rgba(212,175,55,0.3); padding: 10px; overflow: hidden;">
        ${{visualPreview}}
      </div>
    </div>
    <p style="color: #cbd5e1; font-size: 12px; line-height: 1.5; margin-bottom: 14px;">${{item.description}}</p>
    
    <div style="background: rgba(255,255,255,0.03); border: 1px solid rgba(212,175,55,0.2); border-radius: 10px; padding: 12px; margin-bottom: 16px; font-size: 11px;">
      <div style="display: flex; justify-content: space-between; padding: 5px 0; border-bottom: 1px solid rgba(255,255,255,0.06);">
        <span style="color: #94a3b8;">Item Code:</span>
        <strong style="color: #fff;">${{item.id.toUpperCase()}}</strong>
      </div>
      <div style="display: flex; justify-content: space-between; padding: 5px 0; border-bottom: 1px solid rgba(255,255,255,0.06);">
        <span style="color: #94a3b8;">Metal & Category:</span>
        <strong style="color: #d4af37;">${{item.metal}}</strong>
      </div>
      <div style="display: flex; justify-content: space-between; padding: 5px 0; border-bottom: 1px solid rgba(255,255,255,0.06);">
        <span style="color: #94a3b8;">Purity Standard:</span>
        <strong style="color: #fff;">${{item.purity}}</strong>
      </div>
      <div style="display: flex; justify-content: space-between; padding: 5px 0; border-bottom: 1px solid rgba(255,255,255,0.06);">
        <span style="color: #94a3b8;">Approx Gross Weight:</span>
        <strong style="color: #ffd700;">${{item.weight}}</strong>
      </div>
      ${{item.size ? `
      <div style="display: flex; justify-content: space-between; padding: 5px 0; border-bottom: 1px solid rgba(255,255,255,0.06);">
        <span style="color: #94a3b8;">Height / Size:</span>
        <strong style="color: #fff;">${{item.size}}</strong>
      </div>` : ''}}
      ${{item.diamondWeight ? `
      <div style="display: flex; justify-content: space-between; padding: 5px 0; border-bottom: 1px solid rgba(255,255,255,0.06);">
        <span style="color: #94a3b8;">Diamonds:</span>
        <strong style="color: #fff;">${{item.diamondWeight}}</strong>
      </div>` : ''}}
      <div style="display: flex; justify-content: space-between; padding: 5px 0;">
        <span style="color: #94a3b8;">Certification:</span>
        <strong style="color: #4ade80;"><i class="fa-solid fa-shield-check"></i> ${{item.certification}}</strong>
      </div>
    </div>

    <div style="display: flex; gap: 8px;">
      <a href="https://wa.me/918378929951?text=${{waText}}" target="_blank" rel="noopener" class="btn btn-wa-submit" style="flex: 1; text-align: center; text-decoration: none;">
        <i class="fa-brands fa-whatsapp"></i> Inquire Live Price on WhatsApp
      </a>
      <a href="tel:8378929951" class="btn btn-gold" style="padding: 10px 14px;" title="Call Showroom">
        <i class="fa-solid fa-phone"></i>
      </a>
    </div>
  `;

  modal.classList.add("active");
}}

window.openProductModal = openProductModal;
window.renderProducts = renderProducts;
'''

with open(r'c:\Users\DELL\.gemini\antigravity\scratch\svj-jewellers\items.js', 'w', encoding='utf-8') as f:
    f.write(js_content)

print(f"Generated items.js with {len(items)} items ({len(silver_items_data)} silver items + demo rings/necklaces/bridal)!")
