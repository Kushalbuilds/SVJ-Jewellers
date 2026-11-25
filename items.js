/**
 * SVJ Jewellers - Item Catalog Architecture
 * Live rates, Gold & Silver collections, and real Silver Lamp photos
 */

const SVJ_CATALOG = [
  {
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
    "iconSvg": "<svg viewBox=\"0 0 100 100\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n      <ellipse cx=\"50\" cy=\"50\" rx=\"36\" ry=\"24\" stroke=\"url(#goldGrad)\" stroke-width=\"6\"/>\n      <path d=\"M50 20 L40 34 L60 34 Z\" fill=\"url(#diaGrad)\" stroke=\"#fff\" stroke-width=\"1.5\"/>\n      <circle cx=\"50\" cy=\"24\" r=\"3\" fill=\"#fff\"/>\n      <defs>\n        <linearGradient id=\"goldGrad\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"1\"><stop offset=\"0%\" stop-color=\"#fceda2\"/><stop offset=\"50%\" stop-color=\"#d4af37\"/><stop offset=\"100%\" stop-color=\"#997010\"/></linearGradient>\n        <linearGradient id=\"diaGrad\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"1\"><stop offset=\"0%\" stop-color=\"#ffffff\"/><stop offset=\"100%\" stop-color=\"#b8e2f2\"/></linearGradient>\n      </defs>\n    </svg>"
  },
  {
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
    "iconSvg": "<svg viewBox=\"0 0 100 100\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n      <ellipse cx=\"50\" cy=\"50\" rx=\"34\" ry=\"22\" stroke=\"url(#roseGrad)\" stroke-width=\"5\"/>\n      <circle cx=\"50\" cy=\"28\" r=\"3.5\" fill=\"#fff\"/>\n      <circle cx=\"35\" cy=\"32\" r=\"3\" fill=\"#fff\"/>\n      <circle cx=\"65\" cy=\"32\" r=\"3\" fill=\"#fff\"/>\n      <circle cx=\"22\" cy=\"42\" r=\"2.5\" fill=\"#fff\"/>\n      <circle cx=\"78\" cy=\"42\" r=\"2.5\" fill=\"#fff\"/>\n      <defs>\n        <linearGradient id=\"roseGrad\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"1\"><stop offset=\"0%\" stop-color=\"#fcd5ce\"/><stop offset=\"50%\" stop-color=\"#df8f7c\"/><stop offset=\"100%\" stop-color=\"#a85244\"/></linearGradient>\n      </defs>\n    </svg>"
  },
  {
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
    "iconSvg": "<svg viewBox=\"0 0 100 100\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n      <ellipse cx=\"50\" cy=\"52\" rx=\"36\" ry=\"22\" stroke=\"url(#goldGrad)\" stroke-width=\"7\"/>\n      <rect x=\"36\" y=\"24\" width=\"28\" height=\"22\" rx=\"4\" fill=\"#d4af37\" stroke=\"#fff\" stroke-width=\"1.5\"/>\n      <circle cx=\"50\" cy=\"35\" r=\"4\" fill=\"#e63946\"/>\n      <circle cx=\"42\" cy=\"30\" r=\"2\" fill=\"#3a86ff\"/>\n      <circle cx=\"58\" cy=\"30\" r=\"2\" fill=\"#2a9d8f\"/>\n      <circle cx=\"42\" cy=\"40\" r=\"2\" fill=\"#ffb703\"/>\n      <circle cx=\"58\" cy=\"40\" r=\"2\" fill=\"#fb8500\"/>\n    </svg>"
  },
  {
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
    "iconSvg": "<svg viewBox=\"0 0 100 100\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n      <ellipse cx=\"50\" cy=\"50\" rx=\"35\" ry=\"22\" stroke=\"#e2e8f0\" stroke-width=\"6\"/>\n      <path d=\"M50 22 L42 34 L58 34 Z\" fill=\"#ffffff\" stroke=\"#cbd5e1\" stroke-width=\"1.5\"/>\n      <circle cx=\"50\" cy=\"24\" r=\"3\" fill=\"#a5f3fc\"/>\n    </svg>"
  },
  {
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
    "iconSvg": "<svg viewBox=\"0 0 100 100\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n      <path d=\"M20 30 Q50 80 80 30\" stroke=\"url(#goldGrad)\" stroke-width=\"5\" stroke-linecap=\"round\"/>\n      <circle cx=\"50\" cy=\"68\" r=\"10\" fill=\"url(#goldGrad)\" stroke=\"#ffd700\" stroke-width=\"2\"/>\n      <circle cx=\"50\" cy=\"68\" r=\"4\" fill=\"#e63946\"/>\n      <path d=\"M30 42 L35 50 M70 42 L65 50\" stroke=\"url(#goldGrad)\" stroke-width=\"3\"/>\n    </svg>"
  },
  {
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
    "iconSvg": "<svg viewBox=\"0 0 100 100\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n      <path d=\"M25 40 Q50 70 75 40\" stroke=\"url(#goldGrad)\" stroke-width=\"8\" stroke-dasharray=\"6 2\"/>\n      <circle cx=\"50\" cy=\"62\" r=\"7\" fill=\"#d4af37\"/>\n      <circle cx=\"50\" cy=\"62\" r=\"3\" fill=\"#e63946\"/>\n    </svg>"
  },
  {
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
    "iconSvg": "<svg viewBox=\"0 0 100 100\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n      <path d=\"M20 25 Q50 90 80 25\" stroke=\"url(#goldGrad)\" stroke-width=\"4\"/>\n      <circle cx=\"30\" cy=\"45\" r=\"5\" fill=\"#d4af37\"/>\n      <circle cx=\"40\" cy=\"58\" r=\"5\" fill=\"#d4af37\"/>\n      <circle cx=\"50\" cy=\"66\" r=\"6\" fill=\"#d4af37\"/>\n      <circle cx=\"60\" cy=\"58\" r=\"5\" fill=\"#d4af37\"/>\n      <circle cx=\"70\" cy=\"45\" r=\"5\" fill=\"#d4af37\"/>\n    </svg>"
  },
  {
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
    "iconSvg": "<svg viewBox=\"0 0 100 100\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n      <path d=\"M22 30 Q50 82 78 30\" stroke=\"#cbd5e1\" stroke-width=\"5\" stroke-linecap=\"round\"/>\n      <circle cx=\"50\" cy=\"70\" r=\"9\" fill=\"#94a3b8\" stroke=\"#fff\" stroke-width=\"1.5\"/>\n      <circle cx=\"50\" cy=\"70\" r=\"3\" fill=\"#e2e8f0\"/>\n    </svg>"
  },
  {
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
    "iconSvg": "<svg viewBox=\"0 0 100 100\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n      <circle cx=\"50\" cy=\"50\" r=\"32\" stroke=\"url(#goldGrad)\" stroke-width=\"8\"/>\n      <circle cx=\"50\" cy=\"50\" r=\"24\" stroke=\"rgba(255,255,255,0.4)\" stroke-dasharray=\"2 4\"/>\n      <circle cx=\"20\" cy=\"50\" r=\"4\" fill=\"#d4af37\"/>\n      <circle cx=\"80\" cy=\"50\" r=\"4\" fill=\"#d4af37\"/>\n    </svg>"
  },
  {
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
    "iconSvg": "<svg viewBox=\"0 0 100 100\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n      <circle cx=\"50\" cy=\"26\" r=\"8\" fill=\"url(#goldGrad)\"/>\n      <path d=\"M35 50 C35 70 65 70 65 50\" stroke=\"url(#goldGrad)\" stroke-width=\"5\" fill=\"none\"/>\n      <circle cx=\"50\" cy=\"74\" r=\"5\" fill=\"#f8f9fa\" stroke=\"#d4af37\" stroke-width=\"1.5\"/>\n    </svg>"
  },
  {
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
    "iconSvg": "<svg viewBox=\"0 0 100 100\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n      <rect x=\"20\" y=\"32\" width=\"60\" height=\"14\" rx=\"4\" fill=\"url(#goldGrad)\" stroke=\"#ffd700\" stroke-width=\"1.5\"/>\n      <circle cx=\"35\" cy=\"58\" r=\"6\" fill=\"#e63946\"/>\n      <circle cx=\"50\" cy=\"62\" r=\"8\" fill=\"url(#goldGrad)\" stroke=\"#fff\" stroke-width=\"1\"/>\n      <circle cx=\"65\" cy=\"58\" r=\"6\" fill=\"#2a9d8f\"/>\n    </svg>"
  },
  {
    "id": "svj-silver-001",
    "title": "Royal Peacock Nakshi Samai (Pair) - 17\"",
    "category": "silver",
    "metal": "92.5 Fine Sterling Silver",
    "purity": "BIS 925 Hallmark Silver",
    "weight": "1650 g",
    "size": "17\"",
    "certification": "SVJ 925 Hallmark Certified",
    "badge": "Exclusive",
    "priceEstimate": "Calculated by Live Silver Rate",
    "image": "assets/silver/silver_001.jpg",
    "description": "Magnificent pair of handcrafted pure 925 silver Samai lamps (17\" height, approx. weight 1650 g). Adorned with auspicious Mayur (peacock) finial and deeply embossed traditional nakshi work. Perfect for temple pooja, festive illumination, wedding gifts, and griha pravesh."
  },
  {
    "id": "svj-silver-002",
    "title": "Heritage Mayur Fluted Samai (Pair) - 15.5\"",
    "category": "silver",
    "metal": "92.5 Fine Sterling Silver",
    "purity": "BIS 925 Hallmark Silver",
    "weight": "1200 g",
    "size": "15.5\"",
    "certification": "SVJ 925 Hallmark Certified",
    "badge": "Bestseller",
    "priceEstimate": "Calculated by Live Silver Rate",
    "image": "assets/silver/silver_002.jpg",
    "description": "Magnificent pair of handcrafted pure 925 silver Samai lamps (15.5\" height, approx. weight 1200 g). Adorned with auspicious Mayur (peacock) finial and deeply embossed traditional nakshi work. Perfect for temple pooja, festive illumination, wedding gifts, and griha pravesh."
  },
  {
    "id": "svj-silver-003",
    "title": "Classic Floral Bell Base Samai (Pair) - 16\"",
    "category": "silver",
    "metal": "92.5 Fine Sterling Silver",
    "purity": "BIS 925 Hallmark Silver",
    "weight": "1340 g",
    "size": "16\"",
    "certification": "SVJ 925 Hallmark Certified",
    "badge": "Handcrafted",
    "priceEstimate": "Calculated by Live Silver Rate",
    "image": "assets/silver/silver_003.jpg",
    "description": "Magnificent pair of handcrafted pure 925 silver Samai lamps (16\" height, approx. weight 1340 g). Adorned with auspicious Mayur (peacock) finial and deeply embossed traditional nakshi work. Perfect for temple pooja, festive illumination, wedding gifts, and griha pravesh."
  },
  {
    "id": "svj-silver-004",
    "title": "Shankh & Chakra Finial Tall Samai (Pair) - 18\"",
    "category": "silver",
    "metal": "92.5 Fine Sterling Silver",
    "purity": "BIS 925 Hallmark Silver",
    "weight": "1400 g",
    "size": "18\"",
    "certification": "SVJ 925 Hallmark Certified",
    "badge": "Temple Art",
    "priceEstimate": "Calculated by Live Silver Rate",
    "image": "assets/silver/silver_004.jpg",
    "description": "Magnificent pair of handcrafted pure 925 silver Samai lamps (18\" height, approx. weight 1400 g). Adorned with auspicious Mayur (peacock) finial and deeply embossed traditional nakshi work. Perfect for temple pooja, festive illumination, wedding gifts, and griha pravesh."
  },
  {
    "id": "svj-silver-005",
    "title": "Gaja Elephant Pedestal Peacock Samai (Pair) - 13\"",
    "category": "silver",
    "metal": "92.5 Fine Sterling Silver",
    "purity": "BIS 925 Hallmark Silver",
    "weight": "900 g",
    "size": "13\"",
    "certification": "SVJ 925 Hallmark Certified",
    "badge": "Heritage",
    "priceEstimate": "Calculated by Live Silver Rate",
    "image": "assets/silver/silver_005.jpg",
    "description": "Magnificent pair of handcrafted pure 925 silver Samai lamps (13\" height, approx. weight 900 g). Adorned with auspicious Mayur (peacock) finial and deeply embossed traditional nakshi work. Perfect for temple pooja, festive illumination, wedding gifts, and griha pravesh."
  },
  {
    "id": "svj-silver-006",
    "title": "Traditional Fluted Column Samai (Pair) - 10.5\"",
    "category": "silver",
    "metal": "92.5 Fine Sterling Silver",
    "purity": "BIS 925 Hallmark Silver",
    "weight": "800 g",
    "size": "10.5\"",
    "certification": "SVJ 925 Hallmark Certified",
    "badge": "Popular",
    "priceEstimate": "Calculated by Live Silver Rate",
    "image": "assets/silver/silver_006.jpg",
    "description": "Magnificent pair of handcrafted pure 925 silver Samai lamps (10.5\" height, approx. weight 800 g). Adorned with auspicious Mayur (peacock) finial and deeply embossed traditional nakshi work. Perfect for temple pooja, festive illumination, wedding gifts, and griha pravesh."
  },
  {
    "id": "svj-silver-007",
    "title": "Ornate Double Border Peacock Samai (Pair) - 13\"",
    "category": "silver",
    "metal": "92.5 Fine Sterling Silver",
    "purity": "BIS 925 Hallmark Silver",
    "weight": "1350 g",
    "size": "13\"",
    "certification": "SVJ 925 Hallmark Certified",
    "badge": "Pooja Special",
    "priceEstimate": "Calculated by Live Silver Rate",
    "image": "assets/silver/silver_007.jpg",
    "description": "Magnificent pair of handcrafted pure 925 silver Samai lamps (13\" height, approx. weight 1350 g). Adorned with auspicious Mayur (peacock) finial and deeply embossed traditional nakshi work. Perfect for temple pooja, festive illumination, wedding gifts, and griha pravesh."
  },
  {
    "id": "svj-silver-008",
    "title": "Goddess Lakshmi Nakshi Pedestal Samai (Pair) - 12\"",
    "category": "silver",
    "metal": "92.5 Fine Sterling Silver",
    "purity": "BIS 925 Hallmark Silver",
    "weight": "1000 g (1 kg)",
    "size": "12\"",
    "certification": "SVJ 925 Hallmark Certified",
    "badge": "Devotional",
    "priceEstimate": "Calculated by Live Silver Rate",
    "image": "assets/silver/silver_008.jpg",
    "description": "Magnificent pair of handcrafted pure 925 silver Samai lamps (12\" height, approx. weight 1000 g (1 kg)). Adorned with auspicious Mayur (peacock) finial and deeply embossed traditional nakshi work. Perfect for temple pooja, festive illumination, wedding gifts, and griha pravesh."
  },
  {
    "id": "svj-silver-009",
    "title": "Compact Fluted Mayur Diya Stand (Pair) - 7\"",
    "category": "silver",
    "metal": "92.5 Fine Sterling Silver",
    "purity": "BIS 925 Hallmark Silver",
    "weight": "340 g",
    "size": "7\"",
    "certification": "SVJ 925 Hallmark Certified",
    "badge": "Daily Pooja",
    "priceEstimate": "Calculated by Live Silver Rate",
    "image": "assets/silver/silver_009.jpg",
    "description": "Magnificent pair of handcrafted pure 925 silver Samai lamps (7\" height, approx. weight 340 g). Adorned with auspicious Mayur (peacock) finial and deeply embossed traditional nakshi work. Perfect for temple pooja, festive illumination, wedding gifts, and griha pravesh."
  },
  {
    "id": "svj-silver-010",
    "title": "Antique Floral Engraved Samai (Pair) - 11\"",
    "category": "silver",
    "metal": "92.5 Fine Sterling Silver",
    "purity": "BIS 925 Hallmark Silver",
    "weight": "850 g",
    "size": "11\"",
    "certification": "SVJ 925 Hallmark Certified",
    "badge": "Handcrafted",
    "priceEstimate": "Calculated by Live Silver Rate",
    "image": "assets/silver/silver_010.jpg",
    "description": "Magnificent pair of handcrafted pure 925 silver Samai lamps (11\" height, approx. weight 850 g). Adorned with auspicious Mayur (peacock) finial and deeply embossed traditional nakshi work. Perfect for temple pooja, festive illumination, wedding gifts, and griha pravesh."
  },
  {
    "id": "svj-silver-011",
    "title": "Miniature Grace Peacock Diya (Pair) - 5.5\"",
    "category": "silver",
    "metal": "92.5 Fine Sterling Silver",
    "purity": "BIS 925 Hallmark Silver",
    "weight": "250 g",
    "size": "5.5\"",
    "certification": "SVJ 925 Hallmark Certified",
    "badge": "Gift Special",
    "priceEstimate": "Calculated by Live Silver Rate",
    "image": "assets/silver/silver_011.jpg",
    "description": "Magnificent pair of handcrafted pure 925 silver Samai lamps (5.5\" height, approx. weight 250 g). Adorned with auspicious Mayur (peacock) finial and deeply embossed traditional nakshi work. Perfect for temple pooja, festive illumination, wedding gifts, and griha pravesh."
  },
  {
    "id": "svj-silver-012",
    "title": "Dome Base Peacock Samai (Pair) - 7\"",
    "category": "silver",
    "metal": "92.5 Fine Sterling Silver",
    "purity": "BIS 925 Hallmark Silver",
    "weight": "430 g",
    "size": "7\"",
    "certification": "SVJ 925 Hallmark Certified",
    "badge": "Bestseller",
    "priceEstimate": "Calculated by Live Silver Rate",
    "image": "assets/silver/silver_012.jpg",
    "description": "Magnificent pair of handcrafted pure 925 silver Samai lamps (7\" height, approx. weight 430 g). Adorned with auspicious Mayur (peacock) finial and deeply embossed traditional nakshi work. Perfect for temple pooja, festive illumination, wedding gifts, and griha pravesh."
  },
  {
    "id": "svj-silver-013",
    "title": "Checkered Lattice Globe Samai (Pair) - 8\"",
    "category": "silver",
    "metal": "92.5 Fine Sterling Silver",
    "purity": "BIS 925 Hallmark Silver",
    "weight": "440 g",
    "size": "8\"",
    "certification": "SVJ 925 Hallmark Certified",
    "badge": "Artisan Choice",
    "priceEstimate": "Calculated by Live Silver Rate",
    "image": "assets/silver/silver_013.jpg",
    "description": "Magnificent pair of handcrafted pure 925 silver Samai lamps (8\" height, approx. weight 440 g). Adorned with auspicious Mayur (peacock) finial and deeply embossed traditional nakshi work. Perfect for temple pooja, festive illumination, wedding gifts, and griha pravesh."
  },
  {
    "id": "svj-silver-014",
    "title": "Dancing Elephant Pedestal Samai (Pair) - 14\"",
    "category": "silver",
    "metal": "92.5 Fine Sterling Silver",
    "purity": "BIS 925 Hallmark Silver",
    "weight": "1260 g",
    "size": "14\"",
    "certification": "SVJ 925 Hallmark Certified",
    "badge": "Royal Heritage",
    "priceEstimate": "Calculated by Live Silver Rate",
    "image": "assets/silver/silver_014.jpg",
    "description": "Magnificent pair of handcrafted pure 925 silver Samai lamps (14\" height, approx. weight 1260 g). Adorned with auspicious Mayur (peacock) finial and deeply embossed traditional nakshi work. Perfect for temple pooja, festive illumination, wedding gifts, and griha pravesh."
  },
  {
    "id": "svj-silver-015",
    "title": "Classic Sleek Peacock Diya (Pair) - 5.5\"",
    "category": "silver",
    "metal": "92.5 Fine Sterling Silver",
    "purity": "BIS 925 Hallmark Silver",
    "weight": "250 g",
    "size": "5.5\"",
    "certification": "SVJ 925 Hallmark Certified",
    "badge": "Daily Pooja",
    "priceEstimate": "Calculated by Live Silver Rate",
    "image": "assets/silver/silver_015.jpg",
    "description": "Magnificent pair of handcrafted pure 925 silver Samai lamps (5.5\" height, approx. weight 250 g). Adorned with auspicious Mayur (peacock) finial and deeply embossed traditional nakshi work. Perfect for temple pooja, festive illumination, wedding gifts, and griha pravesh."
  },
  {
    "id": "svj-silver-016",
    "title": "Gaja Base Layered Oil Basin Samai (Pair) - 9\"",
    "category": "silver",
    "metal": "92.5 Fine Sterling Silver",
    "purity": "BIS 925 Hallmark Silver",
    "weight": "630 g",
    "size": "9\"",
    "certification": "SVJ 925 Hallmark Certified",
    "badge": "Trending",
    "priceEstimate": "Calculated by Live Silver Rate",
    "image": "assets/silver/silver_016.jpg",
    "description": "Magnificent pair of handcrafted pure 925 silver Samai lamps (9\" height, approx. weight 630 g). Adorned with auspicious Mayur (peacock) finial and deeply embossed traditional nakshi work. Perfect for temple pooja, festive illumination, wedding gifts, and griha pravesh."
  },
  {
    "id": "svj-silver-017",
    "title": "Heritage Elephant Stand Samai (Pair) - 9\"",
    "category": "silver",
    "metal": "92.5 Fine Sterling Silver",
    "purity": "BIS 925 Hallmark Silver",
    "weight": "630 g",
    "size": "9\"",
    "certification": "SVJ 925 Hallmark Certified",
    "badge": "Temple Art",
    "priceEstimate": "Calculated by Live Silver Rate",
    "image": "assets/silver/silver_017.jpg",
    "description": "Magnificent pair of handcrafted pure 925 silver Samai lamps (9\" height, approx. weight 630 g). Adorned with auspicious Mayur (peacock) finial and deeply embossed traditional nakshi work. Perfect for temple pooja, festive illumination, wedding gifts, and griha pravesh."
  },
  {
    "id": "svj-silver-018",
    "title": "Grand Elephant Pedestal Samai (Pair) - 15\"",
    "category": "silver",
    "metal": "92.5 Fine Sterling Silver",
    "purity": "BIS 925 Hallmark Silver",
    "weight": "1370 g",
    "size": "15\"",
    "certification": "SVJ 925 Hallmark Certified",
    "badge": "Bridal Pride",
    "priceEstimate": "Calculated by Live Silver Rate",
    "image": "assets/silver/silver_018.jpg",
    "description": "Magnificent pair of handcrafted pure 925 silver Samai lamps (15\" height, approx. weight 1370 g). Adorned with auspicious Mayur (peacock) finial and deeply embossed traditional nakshi work. Perfect for temple pooja, festive illumination, wedding gifts, and griha pravesh."
  },
  {
    "id": "svj-silver-019",
    "title": "Royal Elephant Court Samai (Pair) - 16\"",
    "category": "silver",
    "metal": "92.5 Fine Sterling Silver",
    "purity": "BIS 925 Hallmark Silver",
    "weight": "1474 g",
    "size": "16\"",
    "certification": "SVJ 925 Hallmark Certified",
    "badge": "Masterpiece",
    "priceEstimate": "Calculated by Live Silver Rate",
    "image": "assets/silver/silver_019.jpg",
    "description": "Magnificent pair of handcrafted pure 925 silver Samai lamps (16\" height, approx. weight 1474 g). Adorned with auspicious Mayur (peacock) finial and deeply embossed traditional nakshi work. Perfect for temple pooja, festive illumination, wedding gifts, and griha pravesh."
  },
  {
    "id": "svj-silver-020",
    "title": "Elephant Pillar Silver Niranjan (Pair) - 11\"",
    "category": "silver",
    "metal": "92.5 Fine Sterling Silver",
    "purity": "BIS 925 Hallmark Silver",
    "weight": "857 g",
    "size": "11\"",
    "certification": "SVJ 925 Hallmark Certified",
    "badge": "Traditional",
    "priceEstimate": "Calculated by Live Silver Rate",
    "image": "assets/silver/silver_020.jpg",
    "description": "Magnificent pair of handcrafted pure 925 silver Samai lamps (11\" height, approx. weight 857 g). Adorned with auspicious Mayur (peacock) finial and deeply embossed traditional nakshi work. Perfect for temple pooja, festive illumination, wedding gifts, and griha pravesh."
  },
  {
    "id": "svj-silver-021",
    "title": "Slender Fluted Peacock Samai (Pair) - 13\"",
    "category": "silver",
    "metal": "92.5 Fine Sterling Silver",
    "purity": "BIS 925 Hallmark Silver",
    "weight": "950 g",
    "size": "13\"",
    "certification": "SVJ 925 Hallmark Certified",
    "badge": "Popular",
    "priceEstimate": "Calculated by Live Silver Rate",
    "image": "assets/silver/silver_021.jpg",
    "description": "Magnificent pair of handcrafted pure 925 silver Samai lamps (13\" height, approx. weight 950 g). Adorned with auspicious Mayur (peacock) finial and deeply embossed traditional nakshi work. Perfect for temple pooja, festive illumination, wedding gifts, and griha pravesh."
  },
  {
    "id": "svj-silver-022",
    "title": "Heritage Elephant Pedestal Niranjan (Pair) - 11\"",
    "category": "silver",
    "metal": "92.5 Fine Sterling Silver",
    "purity": "BIS 925 Hallmark Silver",
    "weight": "857 g",
    "size": "11\"",
    "certification": "SVJ 925 Hallmark Certified",
    "badge": "Handcrafted",
    "priceEstimate": "Calculated by Live Silver Rate",
    "image": "assets/silver/silver_022.jpg",
    "description": "Magnificent pair of handcrafted pure 925 silver Samai lamps (11\" height, approx. weight 857 g). Adorned with auspicious Mayur (peacock) finial and deeply embossed traditional nakshi work. Perfect for temple pooja, festive illumination, wedding gifts, and griha pravesh."
  },
  {
    "id": "svj-silver-023",
    "title": "Cone Filigree Engraved Samai (Pair) - 7.5\"",
    "category": "silver",
    "metal": "92.5 Fine Sterling Silver",
    "purity": "BIS 925 Hallmark Silver",
    "weight": "440 g",
    "size": "7.5\"",
    "certification": "SVJ 925 Hallmark Certified",
    "badge": "Daily Pooja",
    "priceEstimate": "Calculated by Live Silver Rate",
    "image": "assets/silver/silver_023.jpg",
    "description": "Magnificent pair of handcrafted pure 925 silver Samai lamps (7.5\" height, approx. weight 440 g). Adorned with auspicious Mayur (peacock) finial and deeply embossed traditional nakshi work. Perfect for temple pooja, festive illumination, wedding gifts, and griha pravesh."
  },
  {
    "id": "svj-silver-024",
    "title": "Intricate Net Pattern Samai (Pair) - 7.5\"",
    "category": "silver",
    "metal": "92.5 Fine Sterling Silver",
    "purity": "BIS 925 Hallmark Silver",
    "weight": "440 g",
    "size": "7.5\"",
    "certification": "SVJ 925 Hallmark Certified",
    "badge": "Artisan Choice",
    "priceEstimate": "Calculated by Live Silver Rate",
    "image": "assets/silver/silver_024.jpg",
    "description": "Magnificent pair of handcrafted pure 925 silver Samai lamps (7.5\" height, approx. weight 440 g). Adorned with auspicious Mayur (peacock) finial and deeply embossed traditional nakshi work. Perfect for temple pooja, festive illumination, wedding gifts, and griha pravesh."
  },
  {
    "id": "svj-silver-025",
    "title": "Elephant Footed Ornate Samai (Pair) - 17\"",
    "category": "silver",
    "metal": "92.5 Fine Sterling Silver",
    "purity": "BIS 925 Hallmark Silver",
    "weight": "1450 g",
    "size": "17\"",
    "certification": "SVJ 925 Hallmark Certified",
    "badge": "Royal Heritage",
    "priceEstimate": "Calculated by Live Silver Rate",
    "image": "assets/silver/silver_025.jpg",
    "description": "Magnificent pair of handcrafted pure 925 silver Samai lamps (17\" height, approx. weight 1450 g). Adorned with auspicious Mayur (peacock) finial and deeply embossed traditional nakshi work. Perfect for temple pooja, festive illumination, wedding gifts, and griha pravesh."
  },
  {
    "id": "svj-silver-026",
    "title": "Tapered Vine Engraved Samai (Pair) - 17.5\"",
    "category": "silver",
    "metal": "92.5 Fine Sterling Silver",
    "purity": "BIS 925 Hallmark Silver",
    "weight": "1440 g",
    "size": "17.5\"",
    "certification": "SVJ 925 Hallmark Certified",
    "badge": "Temple Art",
    "priceEstimate": "Calculated by Live Silver Rate",
    "image": "assets/silver/silver_026.jpg",
    "description": "Magnificent pair of handcrafted pure 925 silver Samai lamps (17.5\" height, approx. weight 1440 g). Adorned with auspicious Mayur (peacock) finial and deeply embossed traditional nakshi work. Perfect for temple pooja, festive illumination, wedding gifts, and griha pravesh."
  },
  {
    "id": "svj-silver-027",
    "title": "Elephant Legged Ornate Samai (Pair) - 18\"",
    "category": "silver",
    "metal": "92.5 Fine Sterling Silver",
    "purity": "BIS 925 Hallmark Silver",
    "weight": "1650 g",
    "size": "18\"",
    "certification": "SVJ 925 Hallmark Certified",
    "badge": "Bestseller",
    "priceEstimate": "Calculated by Live Silver Rate",
    "image": "assets/silver/silver_027.jpg",
    "description": "Magnificent pair of handcrafted pure 925 silver Samai lamps (18\" height, approx. weight 1650 g). Adorned with auspicious Mayur (peacock) finial and deeply embossed traditional nakshi work. Perfect for temple pooja, festive illumination, wedding gifts, and griha pravesh."
  },
  {
    "id": "svj-silver-028",
    "title": "Conical Floral Nakshi Samai (Pair) - 10\"",
    "category": "silver",
    "metal": "92.5 Fine Sterling Silver",
    "purity": "BIS 925 Hallmark Silver",
    "weight": "500 g",
    "size": "10\"",
    "certification": "SVJ 925 Hallmark Certified",
    "badge": "Popular",
    "priceEstimate": "Calculated by Live Silver Rate",
    "image": "assets/silver/silver_028.jpg",
    "description": "Magnificent pair of handcrafted pure 925 silver Samai lamps (10\" height, approx. weight 500 g). Adorned with auspicious Mayur (peacock) finial and deeply embossed traditional nakshi work. Perfect for temple pooja, festive illumination, wedding gifts, and griha pravesh."
  },
  {
    "id": "svj-silver-029",
    "title": "Antique Vine Baluster Samai (Pair) - 10.5\"",
    "category": "silver",
    "metal": "92.5 Fine Sterling Silver",
    "purity": "BIS 925 Hallmark Silver",
    "weight": "560 g",
    "size": "10.5\"",
    "certification": "SVJ 925 Hallmark Certified",
    "badge": "Trending",
    "priceEstimate": "Calculated by Live Silver Rate",
    "image": "assets/silver/silver_029.jpg",
    "description": "Magnificent pair of handcrafted pure 925 silver Samai lamps (10.5\" height, approx. weight 560 g). Adorned with auspicious Mayur (peacock) finial and deeply embossed traditional nakshi work. Perfect for temple pooja, festive illumination, wedding gifts, and griha pravesh."
  },
  {
    "id": "svj-silver-030",
    "title": "Parrot & Peacock Perched Samai (Pair) - 11.5\"",
    "category": "silver",
    "metal": "92.5 Fine Sterling Silver",
    "purity": "BIS 925 Hallmark Silver",
    "weight": "720 g",
    "size": "11.5\"",
    "certification": "SVJ 925 Hallmark Certified",
    "badge": "Rare Masterpiece",
    "priceEstimate": "Calculated by Live Silver Rate",
    "image": "assets/silver/silver_030.jpg",
    "description": "Magnificent pair of handcrafted pure 925 silver Samai lamps (11.5\" height, approx. weight 720 g). Adorned with auspicious Mayur (peacock) finial and deeply embossed traditional nakshi work. Perfect for temple pooja, festive illumination, wedding gifts, and griha pravesh."
  },
  {
    "id": "svj-silver-031",
    "title": "Fluted Tiered Silver Samai (Pair) - 10.5\"",
    "category": "silver",
    "metal": "92.5 Fine Sterling Silver",
    "purity": "BIS 925 Hallmark Silver",
    "weight": "550 g",
    "size": "10.5\"",
    "certification": "SVJ 925 Hallmark Certified",
    "badge": "Pooja Special",
    "priceEstimate": "Calculated by Live Silver Rate",
    "image": "assets/silver/silver_031.jpg",
    "description": "Magnificent pair of handcrafted pure 925 silver Samai lamps (10.5\" height, approx. weight 550 g). Adorned with auspicious Mayur (peacock) finial and deeply embossed traditional nakshi work. Perfect for temple pooja, festive illumination, wedding gifts, and griha pravesh."
  },
  {
    "id": "svj-silver-032",
    "title": "Ribbed Pillar Mayur Samai (Pair) - 10\"",
    "category": "silver",
    "metal": "92.5 Fine Sterling Silver",
    "purity": "BIS 925 Hallmark Silver",
    "weight": "540 g",
    "size": "10\"",
    "certification": "SVJ 925 Hallmark Certified",
    "badge": "Handcrafted",
    "priceEstimate": "Calculated by Live Silver Rate",
    "image": "assets/silver/silver_032.jpg",
    "description": "Magnificent pair of handcrafted pure 925 silver Samai lamps (10\" height, approx. weight 540 g). Adorned with auspicious Mayur (peacock) finial and deeply embossed traditional nakshi work. Perfect for temple pooja, festive illumination, wedding gifts, and griha pravesh."
  },
  {
    "id": "svj-silver-033",
    "title": "Classic Fluted Base Samai (Pair) - 10.5\"",
    "category": "silver",
    "metal": "92.5 Fine Sterling Silver",
    "purity": "BIS 925 Hallmark Silver",
    "weight": "530 g",
    "size": "10.5\"",
    "certification": "SVJ 925 Hallmark Certified",
    "badge": "Traditional",
    "priceEstimate": "Calculated by Live Silver Rate",
    "image": "assets/silver/silver_033.jpg",
    "description": "Magnificent pair of handcrafted pure 925 silver Samai lamps (10.5\" height, approx. weight 530 g). Adorned with auspicious Mayur (peacock) finial and deeply embossed traditional nakshi work. Perfect for temple pooja, festive illumination, wedding gifts, and griha pravesh."
  },
  {
    "id": "svj-silver-034",
    "title": "Heavy Floral Nakshi Samai (Pair) - 10\"",
    "category": "silver",
    "metal": "92.5 Fine Sterling Silver",
    "purity": "BIS 925 Hallmark Silver",
    "weight": "640 g",
    "size": "10\"",
    "certification": "SVJ 925 Hallmark Certified",
    "badge": "Temple Art",
    "priceEstimate": "Calculated by Live Silver Rate",
    "image": "assets/silver/silver_034.jpg",
    "description": "Magnificent pair of handcrafted pure 925 silver Samai lamps (10\" height, approx. weight 640 g). Adorned with auspicious Mayur (peacock) finial and deeply embossed traditional nakshi work. Perfect for temple pooja, festive illumination, wedding gifts, and griha pravesh."
  },
  {
    "id": "svj-silver-035",
    "title": "Compact Double Globe Samai (Pair) - 6.5\"",
    "category": "silver",
    "metal": "92.5 Fine Sterling Silver",
    "purity": "BIS 925 Hallmark Silver",
    "weight": "260 g",
    "size": "6.5\"",
    "certification": "SVJ 925 Hallmark Certified",
    "badge": "Daily Pooja",
    "priceEstimate": "Calculated by Live Silver Rate",
    "image": "assets/silver/silver_035.jpg",
    "description": "Magnificent pair of handcrafted pure 925 silver Samai lamps (6.5\" height, approx. weight 260 g). Adorned with auspicious Mayur (peacock) finial and deeply embossed traditional nakshi work. Perfect for temple pooja, festive illumination, wedding gifts, and griha pravesh."
  },
  {
    "id": "svj-silver-036",
    "title": "Graceful Floral Stem Samai (Pair) - 8\"",
    "category": "silver",
    "metal": "92.5 Fine Sterling Silver",
    "purity": "BIS 925 Hallmark Silver",
    "weight": "350 g",
    "size": "8\"",
    "certification": "SVJ 925 Hallmark Certified",
    "badge": "Gift Special",
    "priceEstimate": "Calculated by Live Silver Rate",
    "image": "assets/silver/silver_036.jpg",
    "description": "Magnificent pair of handcrafted pure 925 silver Samai lamps (8\" height, approx. weight 350 g). Adorned with auspicious Mayur (peacock) finial and deeply embossed traditional nakshi work. Perfect for temple pooja, festive illumination, wedding gifts, and griha pravesh."
  },
  {
    "id": "svj-silver-037",
    "title": "Petal Pattern Compact Samai (Pair) - 7\"",
    "category": "silver",
    "metal": "92.5 Fine Sterling Silver",
    "purity": "BIS 925 Hallmark Silver",
    "weight": "320 g",
    "size": "7\"",
    "certification": "SVJ 925 Hallmark Certified",
    "badge": "Popular",
    "priceEstimate": "Calculated by Live Silver Rate",
    "image": "assets/silver/silver_037.jpg",
    "description": "Magnificent pair of handcrafted pure 925 silver Samai lamps (7\" height, approx. weight 320 g). Adorned with auspicious Mayur (peacock) finial and deeply embossed traditional nakshi work. Perfect for temple pooja, festive illumination, wedding gifts, and griha pravesh."
  },
  {
    "id": "svj-silver-038",
    "title": "Elephant Pedestal Floral Samai (Pair) - 8\"",
    "category": "silver",
    "metal": "92.5 Fine Sterling Silver",
    "purity": "BIS 925 Hallmark Silver",
    "weight": "550 g",
    "size": "8\"",
    "certification": "SVJ 925 Hallmark Certified",
    "badge": "Handcrafted",
    "priceEstimate": "Calculated by Live Silver Rate",
    "image": "assets/silver/silver_038.jpg",
    "description": "Magnificent pair of handcrafted pure 925 silver Samai lamps (8\" height, approx. weight 550 g). Adorned with auspicious Mayur (peacock) finial and deeply embossed traditional nakshi work. Perfect for temple pooja, festive illumination, wedding gifts, and griha pravesh."
  },
  {
    "id": "svj-silver-039",
    "title": "Ring Stem Peacock Niranjan (Pair) - 9\"",
    "category": "silver",
    "metal": "92.5 Fine Sterling Silver",
    "purity": "BIS 925 Hallmark Silver",
    "weight": "500 g",
    "size": "9\"",
    "certification": "SVJ 925 Hallmark Certified",
    "badge": "Bestseller",
    "priceEstimate": "Calculated by Live Silver Rate",
    "image": "assets/silver/silver_039.jpg",
    "description": "Magnificent pair of handcrafted pure 925 silver Samai lamps (9\" height, approx. weight 500 g). Adorned with auspicious Mayur (peacock) finial and deeply embossed traditional nakshi work. Perfect for temple pooja, festive illumination, wedding gifts, and griha pravesh."
  },
  {
    "id": "svj-silver-040",
    "title": "Smooth Baluster Mayur Diya (Pair) - 7\"",
    "category": "silver",
    "metal": "92.5 Fine Sterling Silver",
    "purity": "BIS 925 Hallmark Silver",
    "weight": "280 g",
    "size": "7\"",
    "certification": "SVJ 925 Hallmark Certified",
    "badge": "Daily Pooja",
    "priceEstimate": "Calculated by Live Silver Rate",
    "image": "assets/silver/silver_040.jpg",
    "description": "Magnificent pair of handcrafted pure 925 silver Samai lamps (7\" height, approx. weight 280 g). Adorned with auspicious Mayur (peacock) finial and deeply embossed traditional nakshi work. Perfect for temple pooja, festive illumination, wedding gifts, and griha pravesh."
  },
  {
    "id": "svj-silver-041",
    "title": "Shankh Motif Globe Samai (Pair) - 9\"",
    "category": "silver",
    "metal": "92.5 Fine Sterling Silver",
    "purity": "BIS 925 Hallmark Silver",
    "weight": "400 g",
    "size": "9\"",
    "certification": "SVJ 925 Hallmark Certified",
    "badge": "Devotional",
    "priceEstimate": "Calculated by Live Silver Rate",
    "image": "assets/silver/silver_041.jpg",
    "description": "Magnificent pair of handcrafted pure 925 silver Samai lamps (9\" height, approx. weight 400 g). Adorned with auspicious Mayur (peacock) finial and deeply embossed traditional nakshi work. Perfect for temple pooja, festive illumination, wedding gifts, and griha pravesh."
  },
  {
    "id": "svj-silver-042",
    "title": "Tiered Petal Silver Samai (Pair) - 7\"",
    "category": "silver",
    "metal": "92.5 Fine Sterling Silver",
    "purity": "BIS 925 Hallmark Silver",
    "weight": "340 g",
    "size": "7\"",
    "certification": "SVJ 925 Hallmark Certified",
    "badge": "Pooja Special",
    "priceEstimate": "Calculated by Live Silver Rate",
    "image": "assets/silver/silver_042.jpg",
    "description": "Magnificent pair of handcrafted pure 925 silver Samai lamps (7\" height, approx. weight 340 g). Adorned with auspicious Mayur (peacock) finial and deeply embossed traditional nakshi work. Perfect for temple pooja, festive illumination, wedding gifts, and griha pravesh."
  },
  {
    "id": "svj-silver-043",
    "title": "Double Pot Nakshi Samai (Pair) - 10\"",
    "category": "silver",
    "metal": "92.5 Fine Sterling Silver",
    "purity": "BIS 925 Hallmark Silver",
    "weight": "560 g",
    "size": "10\"",
    "certification": "SVJ 925 Hallmark Certified",
    "badge": "Exclusive",
    "priceEstimate": "Calculated by Live Silver Rate",
    "image": "assets/silver/silver_043.jpg",
    "description": "Magnificent pair of handcrafted pure 925 silver Samai lamps (10\" height, approx. weight 560 g). Adorned with auspicious Mayur (peacock) finial and deeply embossed traditional nakshi work. Perfect for temple pooja, festive illumination, wedding gifts, and griha pravesh."
  },
  {
    "id": "svj-silver-044",
    "title": "Fluted Column Peacock Samai (Pair) - 9\"",
    "category": "silver",
    "metal": "92.5 Fine Sterling Silver",
    "purity": "BIS 925 Hallmark Silver",
    "weight": "440 g",
    "size": "9\"",
    "certification": "SVJ 925 Hallmark Certified",
    "badge": "Popular",
    "priceEstimate": "Calculated by Live Silver Rate",
    "image": "assets/silver/silver_044.jpg",
    "description": "Magnificent pair of handcrafted pure 925 silver Samai lamps (9\" height, approx. weight 440 g). Adorned with auspicious Mayur (peacock) finial and deeply embossed traditional nakshi work. Perfect for temple pooja, festive illumination, wedding gifts, and griha pravesh."
  },
  {
    "id": "svj-silver-045",
    "title": "Baluster Floral Engraved Samai (Pair) - 9.5\"",
    "category": "silver",
    "metal": "92.5 Fine Sterling Silver",
    "purity": "BIS 925 Hallmark Silver",
    "weight": "450 g",
    "size": "9.5\"",
    "certification": "SVJ 925 Hallmark Certified",
    "badge": "Handcrafted",
    "priceEstimate": "Calculated by Live Silver Rate",
    "image": "assets/silver/silver_045.jpg",
    "description": "Magnificent pair of handcrafted pure 925 silver Samai lamps (9.5\" height, approx. weight 450 g). Adorned with auspicious Mayur (peacock) finial and deeply embossed traditional nakshi work. Perfect for temple pooja, festive illumination, wedding gifts, and griha pravesh."
  },
  {
    "id": "svj-silver-046",
    "title": "Mini Classic Peacock Diya (Pair) - 6\"",
    "category": "silver",
    "metal": "92.5 Fine Sterling Silver",
    "purity": "BIS 925 Hallmark Silver",
    "weight": "220 g",
    "size": "6\"",
    "certification": "SVJ 925 Hallmark Certified",
    "badge": "Gift Special",
    "priceEstimate": "Calculated by Live Silver Rate",
    "image": "assets/silver/silver_046.jpg",
    "description": "Magnificent pair of handcrafted pure 925 silver Samai lamps (6\" height, approx. weight 220 g). Adorned with auspicious Mayur (peacock) finial and deeply embossed traditional nakshi work. Perfect for temple pooja, festive illumination, wedding gifts, and griha pravesh."
  },
  {
    "id": "svj-silver-047",
    "title": "Tapered Filigree Pillar Samai (Pair) - 11.5\"",
    "category": "silver",
    "metal": "92.5 Fine Sterling Silver",
    "purity": "BIS 925 Hallmark Silver",
    "weight": "690 g",
    "size": "11.5\"",
    "certification": "SVJ 925 Hallmark Certified",
    "badge": "Bestseller",
    "priceEstimate": "Calculated by Live Silver Rate",
    "image": "assets/silver/silver_047.jpg",
    "description": "Magnificent pair of handcrafted pure 925 silver Samai lamps (11.5\" height, approx. weight 690 g). Adorned with auspicious Mayur (peacock) finial and deeply embossed traditional nakshi work. Perfect for temple pooja, festive illumination, wedding gifts, and griha pravesh."
  },
  {
    "id": "svj-silver-048",
    "title": "Floral Engraved Compact Samai (Pair) - 7\"",
    "category": "silver",
    "metal": "92.5 Fine Sterling Silver",
    "purity": "BIS 925 Hallmark Silver",
    "weight": "350 g",
    "size": "7\"",
    "certification": "SVJ 925 Hallmark Certified",
    "badge": "Popular",
    "priceEstimate": "Calculated by Live Silver Rate",
    "image": "assets/silver/silver_048.jpg",
    "description": "Magnificent pair of handcrafted pure 925 silver Samai lamps (7\" height, approx. weight 350 g). Adorned with auspicious Mayur (peacock) finial and deeply embossed traditional nakshi work. Perfect for temple pooja, festive illumination, wedding gifts, and griha pravesh."
  },
  {
    "id": "svj-silver-049",
    "title": "Laxmi Prabhavali Crown Samai (Pair) - 8.5\"",
    "category": "silver",
    "metal": "92.5 Fine Sterling Silver",
    "purity": "BIS 925 Hallmark Silver",
    "weight": "470 g",
    "size": "8.5\"",
    "certification": "SVJ 925 Hallmark Certified",
    "badge": "Devotional",
    "priceEstimate": "Calculated by Live Silver Rate",
    "image": "assets/silver/silver_049.jpg",
    "description": "Magnificent pair of handcrafted pure 925 silver Samai lamps (8.5\" height, approx. weight 470 g). Adorned with auspicious Mayur (peacock) finial and deeply embossed traditional nakshi work. Perfect for temple pooja, festive illumination, wedding gifts, and griha pravesh."
  },
  {
    "id": "svj-silver-050",
    "title": "Embossed Floral Pedestal Samai (Pair) - 9\"",
    "category": "silver",
    "metal": "92.5 Fine Sterling Silver",
    "purity": "BIS 925 Hallmark Silver",
    "weight": "500 g",
    "size": "9\"",
    "certification": "SVJ 925 Hallmark Certified",
    "badge": "Temple Art",
    "priceEstimate": "Calculated by Live Silver Rate",
    "image": "assets/silver/silver_050.jpg",
    "description": "Magnificent pair of handcrafted pure 925 silver Samai lamps (9\" height, approx. weight 500 g). Adorned with auspicious Mayur (peacock) finial and deeply embossed traditional nakshi work. Perfect for temple pooja, festive illumination, wedding gifts, and griha pravesh."
  },
  {
    "id": "svj-silver-051",
    "title": "Graceful Slender Stem Samai (Pair) - 8\"",
    "category": "silver",
    "metal": "92.5 Fine Sterling Silver",
    "purity": "BIS 925 Hallmark Silver",
    "weight": "350 g",
    "size": "8\"",
    "certification": "SVJ 925 Hallmark Certified",
    "badge": "Artisan Choice",
    "priceEstimate": "Calculated by Live Silver Rate",
    "image": "assets/silver/silver_051.jpg",
    "description": "Magnificent pair of handcrafted pure 925 silver Samai lamps (8\" height, approx. weight 350 g). Adorned with auspicious Mayur (peacock) finial and deeply embossed traditional nakshi work. Perfect for temple pooja, festive illumination, wedding gifts, and griha pravesh."
  },
  {
    "id": "svj-silver-052",
    "title": "Tapered Column Peacock Samai (Pair) - 11\"",
    "category": "silver",
    "metal": "92.5 Fine Sterling Silver",
    "purity": "BIS 925 Hallmark Silver",
    "weight": "620 g",
    "size": "11\"",
    "certification": "SVJ 925 Hallmark Certified",
    "badge": "Traditional",
    "priceEstimate": "Calculated by Live Silver Rate",
    "image": "assets/silver/silver_052.jpg",
    "description": "Magnificent pair of handcrafted pure 925 silver Samai lamps (11\" height, approx. weight 620 g). Adorned with auspicious Mayur (peacock) finial and deeply embossed traditional nakshi work. Perfect for temple pooja, festive illumination, wedding gifts, and griha pravesh."
  },
  {
    "id": "svj-silver-053",
    "title": "Goddess Lakshmi Crown Diya (Pair) - 9\"",
    "category": "silver",
    "metal": "92.5 Fine Sterling Silver",
    "purity": "BIS 925 Hallmark Silver",
    "weight": "450 g",
    "size": "9\"",
    "certification": "SVJ 925 Hallmark Certified",
    "badge": "Auspicious",
    "priceEstimate": "Calculated by Live Silver Rate",
    "image": "assets/silver/silver_053.jpg",
    "description": "Magnificent pair of handcrafted pure 925 silver Samai lamps (9\" height, approx. weight 450 g). Adorned with auspicious Mayur (peacock) finial and deeply embossed traditional nakshi work. Perfect for temple pooja, festive illumination, wedding gifts, and griha pravesh."
  },
  {
    "id": "svj-silver-054",
    "title": "Spiral Ribbed Elephant Base Samai (Pair) - 13\"",
    "category": "silver",
    "metal": "92.5 Fine Sterling Silver",
    "purity": "BIS 925 Hallmark Silver",
    "weight": "1023 g",
    "size": "13\"",
    "certification": "SVJ 925 Hallmark Certified",
    "badge": "Royal Heritage",
    "priceEstimate": "Calculated by Live Silver Rate",
    "image": "assets/silver/silver_054.jpg",
    "description": "Magnificent pair of handcrafted pure 925 silver Samai lamps (13\" height, approx. weight 1023 g). Adorned with auspicious Mayur (peacock) finial and deeply embossed traditional nakshi work. Perfect for temple pooja, festive illumination, wedding gifts, and griha pravesh."
  },
  {
    "id": "svj-silver-055",
    "title": "Compact Globe Filigree Samai (Pair) - 6.5\"",
    "category": "silver",
    "metal": "92.5 Fine Sterling Silver",
    "purity": "BIS 925 Hallmark Silver",
    "weight": "260 g",
    "size": "6.5\"",
    "certification": "SVJ 925 Hallmark Certified",
    "badge": "Daily Pooja",
    "priceEstimate": "Calculated by Live Silver Rate",
    "image": "assets/silver/silver_055.jpg",
    "description": "Magnificent pair of handcrafted pure 925 silver Samai lamps (6.5\" height, approx. weight 260 g). Adorned with auspicious Mayur (peacock) finial and deeply embossed traditional nakshi work. Perfect for temple pooja, festive illumination, wedding gifts, and griha pravesh."
  },
  {
    "id": "svj-silver-056",
    "title": "Petite Mayur Table Samai (Pair) - 5.5\"",
    "category": "silver",
    "metal": "92.5 Fine Sterling Silver",
    "purity": "BIS 925 Hallmark Silver",
    "weight": "240 g",
    "size": "5.5\"",
    "certification": "SVJ 925 Hallmark Certified",
    "badge": "Gift Special",
    "priceEstimate": "Calculated by Live Silver Rate",
    "image": "assets/silver/silver_056.jpg",
    "description": "Magnificent pair of handcrafted pure 925 silver Samai lamps (5.5\" height, approx. weight 240 g). Adorned with auspicious Mayur (peacock) finial and deeply embossed traditional nakshi work. Perfect for temple pooja, festive illumination, wedding gifts, and griha pravesh."
  },
  {
    "id": "svj-silver-057",
    "title": "Dual Sphere Nakshi Samai (Pair) - 8\"",
    "category": "silver",
    "metal": "92.5 Fine Sterling Silver",
    "purity": "BIS 925 Hallmark Silver",
    "weight": "370 g",
    "size": "8\"",
    "certification": "SVJ 925 Hallmark Certified",
    "badge": "Trending",
    "priceEstimate": "Calculated by Live Silver Rate",
    "image": "assets/silver/silver_057.jpg",
    "description": "Magnificent pair of handcrafted pure 925 silver Samai lamps (8\" height, approx. weight 370 g). Adorned with auspicious Mayur (peacock) finial and deeply embossed traditional nakshi work. Perfect for temple pooja, festive illumination, wedding gifts, and griha pravesh."
  },
  {
    "id": "svj-silver-058",
    "title": "Carved Floral Globe Samai (Pair) - 8.5\"",
    "category": "silver",
    "metal": "92.5 Fine Sterling Silver",
    "purity": "BIS 925 Hallmark Silver",
    "weight": "470 g",
    "size": "8.5\"",
    "certification": "SVJ 925 Hallmark Certified",
    "badge": "Handcrafted",
    "priceEstimate": "Calculated by Live Silver Rate",
    "image": "assets/silver/silver_058.jpg",
    "description": "Magnificent pair of handcrafted pure 925 silver Samai lamps (8.5\" height, approx. weight 470 g). Adorned with auspicious Mayur (peacock) finial and deeply embossed traditional nakshi work. Perfect for temple pooja, festive illumination, wedding gifts, and griha pravesh."
  },
  {
    "id": "svj-silver-059",
    "title": "Delicate Vine Pattern Samai (Pair) - 7\"",
    "category": "silver",
    "metal": "92.5 Fine Sterling Silver",
    "purity": "BIS 925 Hallmark Silver",
    "weight": "320 g",
    "size": "7\"",
    "certification": "SVJ 925 Hallmark Certified",
    "badge": "Popular",
    "priceEstimate": "Calculated by Live Silver Rate",
    "image": "assets/silver/silver_059.jpg",
    "description": "Magnificent pair of handcrafted pure 925 silver Samai lamps (7\" height, approx. weight 320 g). Adorned with auspicious Mayur (peacock) finial and deeply embossed traditional nakshi work. Perfect for temple pooja, festive illumination, wedding gifts, and griha pravesh."
  },
  {
    "id": "svj-silver-060",
    "title": "Traditional Dome Pillar Samai (Pair) - 8\"",
    "category": "silver",
    "metal": "92.5 Fine Sterling Silver",
    "purity": "BIS 925 Hallmark Silver",
    "weight": "400 g",
    "size": "8\"",
    "certification": "SVJ 925 Hallmark Certified",
    "badge": "Pooja Special",
    "priceEstimate": "Calculated by Live Silver Rate",
    "image": "assets/silver/silver_060.jpg",
    "description": "Magnificent pair of handcrafted pure 925 silver Samai lamps (8\" height, approx. weight 400 g). Adorned with auspicious Mayur (peacock) finial and deeply embossed traditional nakshi work. Perfect for temple pooja, festive illumination, wedding gifts, and griha pravesh."
  },
  {
    "id": "svj-silver-061",
    "title": "Ornate Embossed Base Samai (Pair) - 9\"",
    "category": "silver",
    "metal": "92.5 Fine Sterling Silver",
    "purity": "BIS 925 Hallmark Silver",
    "weight": "550 g",
    "size": "9\"",
    "certification": "SVJ 925 Hallmark Certified",
    "badge": "Bestseller",
    "priceEstimate": "Calculated by Live Silver Rate",
    "image": "assets/silver/silver_061.jpg",
    "description": "Magnificent pair of handcrafted pure 925 silver Samai lamps (9\" height, approx. weight 550 g). Adorned with auspicious Mayur (peacock) finial and deeply embossed traditional nakshi work. Perfect for temple pooja, festive illumination, wedding gifts, and griha pravesh."
  },
  {
    "id": "svj-silver-062",
    "title": "Conical Filigree Mayur Diya (Pair) - 6.25\"",
    "category": "silver",
    "metal": "92.5 Fine Sterling Silver",
    "purity": "BIS 925 Hallmark Silver",
    "weight": "280 g",
    "size": "6.25\"",
    "certification": "SVJ 925 Hallmark Certified",
    "badge": "Daily Pooja",
    "priceEstimate": "Calculated by Live Silver Rate",
    "image": "assets/silver/silver_062.jpg",
    "description": "Magnificent pair of handcrafted pure 925 silver Samai lamps (6.25\" height, approx. weight 280 g). Adorned with auspicious Mayur (peacock) finial and deeply embossed traditional nakshi work. Perfect for temple pooja, festive illumination, wedding gifts, and griha pravesh."
  },
  {
    "id": "svj-silver-063",
    "title": "Mini Peacock Fan Tail Diya (Pair) - 5\"",
    "category": "silver",
    "metal": "92.5 Fine Sterling Silver",
    "purity": "BIS 925 Hallmark Silver",
    "weight": "230 g",
    "size": "5\"",
    "certification": "SVJ 925 Hallmark Certified",
    "badge": "Gift Special",
    "priceEstimate": "Calculated by Live Silver Rate",
    "image": "assets/silver/silver_063.jpg",
    "description": "Magnificent pair of handcrafted pure 925 silver Samai lamps (5\" height, approx. weight 230 g). Adorned with auspicious Mayur (peacock) finial and deeply embossed traditional nakshi work. Perfect for temple pooja, festive illumination, wedding gifts, and griha pravesh."
  },
  {
    "id": "svj-silver-064",
    "title": "Bell Pedestal Peacock Samai (Pair) - 7\"",
    "category": "silver",
    "metal": "92.5 Fine Sterling Silver",
    "purity": "BIS 925 Hallmark Silver",
    "weight": "350 g",
    "size": "7\"",
    "certification": "SVJ 925 Hallmark Certified",
    "badge": "Popular",
    "priceEstimate": "Calculated by Live Silver Rate",
    "image": "assets/silver/silver_064.jpg",
    "description": "Magnificent pair of handcrafted pure 925 silver Samai lamps (7\" height, approx. weight 350 g). Adorned with auspicious Mayur (peacock) finial and deeply embossed traditional nakshi work. Perfect for temple pooja, festive illumination, wedding gifts, and griha pravesh."
  },
  {
    "id": "svj-silver-065",
    "title": "Tapered Floral Net Diya (Pair) - 8\"",
    "category": "silver",
    "metal": "92.5 Fine Sterling Silver",
    "purity": "BIS 925 Hallmark Silver",
    "weight": "480 g",
    "size": "8\"",
    "certification": "SVJ 925 Hallmark Certified",
    "badge": "Artisan Choice",
    "priceEstimate": "Calculated by Live Silver Rate",
    "image": "assets/silver/silver_065.jpg",
    "description": "Magnificent pair of handcrafted pure 925 silver Samai lamps (8\" height, approx. weight 480 g). Adorned with auspicious Mayur (peacock) finial and deeply embossed traditional nakshi work. Perfect for temple pooja, festive illumination, wedding gifts, and griha pravesh."
  },
  {
    "id": "svj-silver-066",
    "title": "Lightweight Elegant Diya (Pair) - 6.5\"",
    "category": "silver",
    "metal": "92.5 Fine Sterling Silver",
    "purity": "BIS 925 Hallmark Silver",
    "weight": "130 g",
    "size": "6.5\"",
    "certification": "SVJ 925 Hallmark Certified",
    "badge": "Daily Pooja",
    "priceEstimate": "Calculated by Live Silver Rate",
    "image": "assets/silver/silver_066.jpg",
    "description": "Magnificent pair of handcrafted pure 925 silver Samai lamps (6.5\" height, approx. weight 130 g). Adorned with auspicious Mayur (peacock) finial and deeply embossed traditional nakshi work. Perfect for temple pooja, festive illumination, wedding gifts, and griha pravesh."
  },
  {
    "id": "svj-silver-067",
    "title": "Grand Lakshmi Prabhavali Arch Samai (Pair) - 15.5\"",
    "category": "silver",
    "metal": "92.5 Fine Sterling Silver",
    "purity": "BIS 925 Hallmark Silver",
    "weight": "1500 g",
    "size": "15.5\"",
    "certification": "SVJ 925 Hallmark Certified",
    "badge": "Temple Masterpiece",
    "priceEstimate": "Calculated by Live Silver Rate",
    "image": "assets/silver/silver_067.jpg",
    "description": "Magnificent pair of handcrafted pure 925 silver Samai lamps (15.5\" height, approx. weight 1500 g). Adorned with auspicious Mayur (peacock) finial and deeply embossed traditional nakshi work. Perfect for temple pooja, festive illumination, wedding gifts, and griha pravesh."
  },
  {
    "id": "svj-silver-068",
    "title": "Spiral Ribbed Master Samai (Pair) - 14\"",
    "category": "silver",
    "metal": "92.5 Fine Sterling Silver",
    "purity": "BIS 925 Hallmark Silver",
    "weight": "1000 g (1 kg)",
    "size": "14\"",
    "certification": "SVJ 925 Hallmark Certified",
    "badge": "Royal Heritage",
    "priceEstimate": "Calculated by Live Silver Rate",
    "image": "assets/silver/silver_068.jpg",
    "description": "Magnificent pair of handcrafted pure 925 silver Samai lamps (14\" height, approx. weight 1000 g (1 kg)). Adorned with auspicious Mayur (peacock) finial and deeply embossed traditional nakshi work. Perfect for temple pooja, festive illumination, wedding gifts, and griha pravesh."
  },
  {
    "id": "svj-silver-069",
    "title": "Classic Fluted Base Samai (Pair) - 8\"",
    "category": "silver",
    "metal": "92.5 Fine Sterling Silver",
    "purity": "BIS 925 Hallmark Silver",
    "weight": "462 g",
    "size": "8\"",
    "certification": "SVJ 925 Hallmark Certified",
    "badge": "Popular",
    "priceEstimate": "Calculated by Live Silver Rate",
    "image": "assets/silver/silver_069.jpg",
    "description": "Magnificent pair of handcrafted pure 925 silver Samai lamps (8\" height, approx. weight 462 g). Adorned with auspicious Mayur (peacock) finial and deeply embossed traditional nakshi work. Perfect for temple pooja, festive illumination, wedding gifts, and griha pravesh."
  },
  {
    "id": "svj-silver-070",
    "title": "Heritage Lakshmi Arch Fluted Samai (Pair) - 16\"",
    "category": "silver",
    "metal": "92.5 Fine Sterling Silver",
    "purity": "BIS 925 Hallmark Silver",
    "weight": "1650 g",
    "size": "16\"",
    "certification": "SVJ 925 Hallmark Certified",
    "badge": "Devotional",
    "priceEstimate": "Calculated by Live Silver Rate",
    "image": "assets/silver/silver_070.jpg",
    "description": "Magnificent pair of handcrafted pure 925 silver Samai lamps (16\" height, approx. weight 1650 g). Adorned with auspicious Mayur (peacock) finial and deeply embossed traditional nakshi work. Perfect for temple pooja, festive illumination, wedding gifts, and griha pravesh."
  },
  {
    "id": "svj-silver-071",
    "title": "Fluted Mayur Pedestal Samai (Pair) - 9\"",
    "category": "silver",
    "metal": "92.5 Fine Sterling Silver",
    "purity": "BIS 925 Hallmark Silver",
    "weight": "480 g",
    "size": "9\"",
    "certification": "SVJ 925 Hallmark Certified",
    "badge": "Pooja Special",
    "priceEstimate": "Calculated by Live Silver Rate",
    "image": "assets/silver/silver_071.jpg",
    "description": "Magnificent pair of handcrafted pure 925 silver Samai lamps (9\" height, approx. weight 480 g). Adorned with auspicious Mayur (peacock) finial and deeply embossed traditional nakshi work. Perfect for temple pooja, festive illumination, wedding gifts, and griha pravesh."
  },
  {
    "id": "svj-silver-072",
    "title": "Multi-Tiered Globe Samai (Pair) - 12\"",
    "category": "silver",
    "metal": "92.5 Fine Sterling Silver",
    "purity": "BIS 925 Hallmark Silver",
    "weight": "720 g",
    "size": "12\"",
    "certification": "SVJ 925 Hallmark Certified",
    "badge": "Handcrafted",
    "priceEstimate": "Calculated by Live Silver Rate",
    "image": "assets/silver/silver_072.jpg",
    "description": "Magnificent pair of handcrafted pure 925 silver Samai lamps (12\" height, approx. weight 720 g). Adorned with auspicious Mayur (peacock) finial and deeply embossed traditional nakshi work. Perfect for temple pooja, festive illumination, wedding gifts, and griha pravesh."
  },
  {
    "id": "svj-silver-073",
    "title": "Intricate Mesh Base Samai (Pair) - 10\"",
    "category": "silver",
    "metal": "92.5 Fine Sterling Silver",
    "purity": "BIS 925 Hallmark Silver",
    "weight": "580 g",
    "size": "10\"",
    "certification": "SVJ 925 Hallmark Certified",
    "badge": "Bestseller",
    "priceEstimate": "Calculated by Live Silver Rate",
    "image": "assets/silver/silver_073.jpg",
    "description": "Magnificent pair of handcrafted pure 925 silver Samai lamps (10\" height, approx. weight 580 g). Adorned with auspicious Mayur (peacock) finial and deeply embossed traditional nakshi work. Perfect for temple pooja, festive illumination, wedding gifts, and griha pravesh."
  },
  {
    "id": "svj-silver-074",
    "title": "Embossed Floral Petal Samai (Pair) - 10\"",
    "category": "silver",
    "metal": "92.5 Fine Sterling Silver",
    "purity": "BIS 925 Hallmark Silver",
    "weight": "560 g",
    "size": "10\"",
    "certification": "SVJ 925 Hallmark Certified",
    "badge": "Trending",
    "priceEstimate": "Calculated by Live Silver Rate",
    "image": "assets/silver/silver_074.jpg",
    "description": "Magnificent pair of handcrafted pure 925 silver Samai lamps (10\" height, approx. weight 560 g). Adorned with auspicious Mayur (peacock) finial and deeply embossed traditional nakshi work. Perfect for temple pooja, festive illumination, wedding gifts, and griha pravesh."
  },
  {
    "id": "svj-silver-075",
    "title": "Fluted Tiered Diya Stand (Pair) - 7.5\"",
    "category": "silver",
    "metal": "92.5 Fine Sterling Silver",
    "purity": "BIS 925 Hallmark Silver",
    "weight": "440 g",
    "size": "7.5\"",
    "certification": "SVJ 925 Hallmark Certified",
    "badge": "Daily Pooja",
    "priceEstimate": "Calculated by Live Silver Rate",
    "image": "assets/silver/silver_075.jpg",
    "description": "Magnificent pair of handcrafted pure 925 silver Samai lamps (7.5\" height, approx. weight 440 g). Adorned with auspicious Mayur (peacock) finial and deeply embossed traditional nakshi work. Perfect for temple pooja, festive illumination, wedding gifts, and griha pravesh."
  },
  {
    "id": "svj-silver-076",
    "title": "Slender Spire Mayur Samai (Pair) - 8.5\"",
    "category": "silver",
    "metal": "92.5 Fine Sterling Silver",
    "purity": "BIS 925 Hallmark Silver",
    "weight": "340 g",
    "size": "8.5\"",
    "certification": "SVJ 925 Hallmark Certified",
    "badge": "Popular",
    "priceEstimate": "Calculated by Live Silver Rate",
    "image": "assets/silver/silver_076.jpg",
    "description": "Magnificent pair of handcrafted pure 925 silver Samai lamps (8.5\" height, approx. weight 340 g). Adorned with auspicious Mayur (peacock) finial and deeply embossed traditional nakshi work. Perfect for temple pooja, festive illumination, wedding gifts, and griha pravesh."
  },
  {
    "id": "svj-silver-077",
    "title": "Heavy Engraved Diya (Pair) - 6.5\"",
    "category": "silver",
    "metal": "92.5 Fine Sterling Silver",
    "purity": "BIS 925 Hallmark Silver",
    "weight": "380 g",
    "size": "6.5\"",
    "certification": "SVJ 925 Hallmark Certified",
    "badge": "Artisan Choice",
    "priceEstimate": "Calculated by Live Silver Rate",
    "image": "assets/silver/silver_077.jpg",
    "description": "Magnificent pair of handcrafted pure 925 silver Samai lamps (6.5\" height, approx. weight 380 g). Adorned with auspicious Mayur (peacock) finial and deeply embossed traditional nakshi work. Perfect for temple pooja, festive illumination, wedding gifts, and griha pravesh."
  },
  {
    "id": "svj-silver-078",
    "title": "Conical Lattice Mayur Samai (Pair) - 8.5\"",
    "category": "silver",
    "metal": "92.5 Fine Sterling Silver",
    "purity": "BIS 925 Hallmark Silver",
    "weight": "500 g",
    "size": "8.5\"",
    "certification": "SVJ 925 Hallmark Certified",
    "badge": "Temple Art",
    "priceEstimate": "Calculated by Live Silver Rate",
    "image": "assets/silver/silver_078.jpg",
    "description": "Magnificent pair of handcrafted pure 925 silver Samai lamps (8.5\" height, approx. weight 500 g). Adorned with auspicious Mayur (peacock) finial and deeply embossed traditional nakshi work. Perfect for temple pooja, festive illumination, wedding gifts, and griha pravesh."
  },
  {
    "id": "svj-silver-079",
    "title": "Dual Pattern Globe Samai (Pair) - 8.5\"",
    "category": "silver",
    "metal": "92.5 Fine Sterling Silver",
    "purity": "BIS 925 Hallmark Silver",
    "weight": "400 g",
    "size": "8.5\"",
    "certification": "SVJ 925 Hallmark Certified",
    "badge": "Pooja Special",
    "priceEstimate": "Calculated by Live Silver Rate",
    "image": "assets/silver/silver_079.jpg",
    "description": "Magnificent pair of handcrafted pure 925 silver Samai lamps (8.5\" height, approx. weight 400 g). Adorned with auspicious Mayur (peacock) finial and deeply embossed traditional nakshi work. Perfect for temple pooja, festive illumination, wedding gifts, and griha pravesh."
  },
  {
    "id": "svj-silver-080",
    "title": "Stacked Tier Mayur Samai (Pair) - 13.5\"",
    "category": "silver",
    "metal": "92.5 Fine Sterling Silver",
    "purity": "BIS 925 Hallmark Silver",
    "weight": "760 g",
    "size": "13.5\"",
    "certification": "SVJ 925 Hallmark Certified",
    "badge": "Traditional",
    "priceEstimate": "Calculated by Live Silver Rate",
    "image": "assets/silver/silver_080.jpg",
    "description": "Magnificent pair of handcrafted pure 925 silver Samai lamps (13.5\" height, approx. weight 760 g). Adorned with auspicious Mayur (peacock) finial and deeply embossed traditional nakshi work. Perfect for temple pooja, festive illumination, wedding gifts, and griha pravesh."
  },
  {
    "id": "svj-silver-081",
    "title": "Fluted Pedestal Diya Stand (Pair) - 7.5\"",
    "category": "silver",
    "metal": "92.5 Fine Sterling Silver",
    "purity": "BIS 925 Hallmark Silver",
    "weight": "400 g",
    "size": "7.5\"",
    "certification": "SVJ 925 Hallmark Certified",
    "badge": "Gift Special",
    "priceEstimate": "Calculated by Live Silver Rate",
    "image": "assets/silver/silver_081.jpg",
    "description": "Magnificent pair of handcrafted pure 925 silver Samai lamps (7.5\" height, approx. weight 400 g). Adorned with auspicious Mayur (peacock) finial and deeply embossed traditional nakshi work. Perfect for temple pooja, festive illumination, wedding gifts, and griha pravesh."
  },
  {
    "id": "svj-silver-082",
    "title": "Carved Baluster Samai (Pair) - 8\"",
    "category": "silver",
    "metal": "92.5 Fine Sterling Silver",
    "purity": "BIS 925 Hallmark Silver",
    "weight": "530 g",
    "size": "8\"",
    "certification": "SVJ 925 Hallmark Certified",
    "badge": "Handcrafted",
    "priceEstimate": "Calculated by Live Silver Rate",
    "image": "assets/silver/silver_082.jpg",
    "description": "Magnificent pair of handcrafted pure 925 silver Samai lamps (8\" height, approx. weight 530 g). Adorned with auspicious Mayur (peacock) finial and deeply embossed traditional nakshi work. Perfect for temple pooja, festive illumination, wedding gifts, and griha pravesh."
  },
  {
    "id": "svj-silver-083",
    "title": "Bell Base Mayur Samai (Pair) - 7.5\"",
    "category": "silver",
    "metal": "92.5 Fine Sterling Silver",
    "purity": "BIS 925 Hallmark Silver",
    "weight": "360 g",
    "size": "7.5\"",
    "certification": "SVJ 925 Hallmark Certified",
    "badge": "Popular",
    "priceEstimate": "Calculated by Live Silver Rate",
    "image": "assets/silver/silver_083.jpg",
    "description": "Magnificent pair of handcrafted pure 925 silver Samai lamps (7.5\" height, approx. weight 360 g). Adorned with auspicious Mayur (peacock) finial and deeply embossed traditional nakshi work. Perfect for temple pooja, festive illumination, wedding gifts, and griha pravesh."
  },
  {
    "id": "svj-silver-084",
    "title": "Ribbed Base Peacock Samai (Pair) - 8\"",
    "category": "silver",
    "metal": "92.5 Fine Sterling Silver",
    "purity": "BIS 925 Hallmark Silver",
    "weight": "480 g",
    "size": "8\"",
    "certification": "SVJ 925 Hallmark Certified",
    "badge": "Trending",
    "priceEstimate": "Calculated by Live Silver Rate",
    "image": "assets/silver/silver_084.jpg",
    "description": "Magnificent pair of handcrafted pure 925 silver Samai lamps (8\" height, approx. weight 480 g). Adorned with auspicious Mayur (peacock) finial and deeply embossed traditional nakshi work. Perfect for temple pooja, festive illumination, wedding gifts, and griha pravesh."
  },
  {
    "id": "svj-silver-085",
    "title": "Petite Peacock Diya Pair - 5.5\"",
    "category": "silver",
    "metal": "92.5 Fine Sterling Silver",
    "purity": "BIS 925 Hallmark Silver",
    "weight": "250 g",
    "size": "5.5\"",
    "certification": "SVJ 925 Hallmark Certified",
    "badge": "Daily Pooja",
    "priceEstimate": "Calculated by Live Silver Rate",
    "image": "assets/silver/silver_085.jpg",
    "description": "Magnificent pair of handcrafted pure 925 silver Samai lamps (5.5\" height, approx. weight 250 g). Adorned with auspicious Mayur (peacock) finial and deeply embossed traditional nakshi work. Perfect for temple pooja, festive illumination, wedding gifts, and griha pravesh."
  },
  {
    "id": "svj-silver-086",
    "title": "Fluted Petal Petite Diya (Pair) - 5.5\"",
    "category": "silver",
    "metal": "92.5 Fine Sterling Silver",
    "purity": "BIS 925 Hallmark Silver",
    "weight": "260 g",
    "size": "5.5\"",
    "certification": "SVJ 925 Hallmark Certified",
    "badge": "Daily Pooja",
    "priceEstimate": "Calculated by Live Silver Rate",
    "image": "assets/silver/silver_086.jpg",
    "description": "Magnificent pair of handcrafted pure 925 silver Samai lamps (5.5\" height, approx. weight 260 g). Adorned with auspicious Mayur (peacock) finial and deeply embossed traditional nakshi work. Perfect for temple pooja, festive illumination, wedding gifts, and griha pravesh."
  },
  {
    "id": "svj-silver-087",
    "title": "Imperial 21-Inch Elephant Pedestal Samai (Pair) - 21\"",
    "category": "silver",
    "metal": "92.5 Fine Sterling Silver",
    "purity": "BIS 925 Hallmark Silver",
    "weight": "2350 g",
    "size": "21\"",
    "certification": "SVJ 925 Hallmark Certified",
    "badge": "Showpiece Grand",
    "priceEstimate": "Calculated by Live Silver Rate",
    "image": "assets/silver/silver_087.jpg",
    "description": "Magnificent pair of handcrafted pure 925 silver Samai lamps (21\" height, approx. weight 2350 g). Adorned with auspicious Mayur (peacock) finial and deeply embossed traditional nakshi work. Perfect for temple pooja, festive illumination, wedding gifts, and griha pravesh."
  },
  {
    "id": "svj-silver-088",
    "title": "Grand 21-Inch Ornate Mayur Samai (Pair) - 21\"",
    "category": "silver",
    "metal": "92.5 Fine Sterling Silver",
    "purity": "BIS 925 Hallmark Silver",
    "weight": "1800 g",
    "size": "21\"",
    "certification": "SVJ 925 Hallmark Certified",
    "badge": "Royal Temple",
    "priceEstimate": "Calculated by Live Silver Rate",
    "image": "assets/silver/silver_088.jpg",
    "description": "Magnificent pair of handcrafted pure 925 silver Samai lamps (21\" height, approx. weight 1800 g). Adorned with auspicious Mayur (peacock) finial and deeply embossed traditional nakshi work. Perfect for temple pooja, festive illumination, wedding gifts, and griha pravesh."
  },
  {
    "id": "svj-silver-089",
    "title": "Magnificent 18-Inch Triple Tier Samai (Pair) - 18\"",
    "category": "silver",
    "metal": "92.5 Fine Sterling Silver",
    "purity": "BIS 925 Hallmark Silver",
    "weight": "1400 g",
    "size": "18\"",
    "certification": "SVJ 925 Hallmark Certified",
    "badge": "Exclusive",
    "priceEstimate": "Calculated by Live Silver Rate",
    "image": "assets/silver/silver_089.jpg",
    "description": "Magnificent pair of handcrafted pure 925 silver Samai lamps (18\" height, approx. weight 1400 g). Adorned with auspicious Mayur (peacock) finial and deeply embossed traditional nakshi work. Perfect for temple pooja, festive illumination, wedding gifts, and griha pravesh."
  },
  {
    "id": "svj-silver-090",
    "title": "Splendid 17-Inch Filigree Pillar Samai (Pair) - 17\"",
    "category": "silver",
    "metal": "92.5 Fine Sterling Silver",
    "purity": "BIS 925 Hallmark Silver",
    "weight": "1500 g",
    "size": "17\"",
    "certification": "SVJ 925 Hallmark Certified",
    "badge": "Masterpiece",
    "priceEstimate": "Calculated by Live Silver Rate",
    "image": "assets/silver/silver_090.jpg",
    "description": "Magnificent pair of handcrafted pure 925 silver Samai lamps (17\" height, approx. weight 1500 g). Adorned with auspicious Mayur (peacock) finial and deeply embossed traditional nakshi work. Perfect for temple pooja, festive illumination, wedding gifts, and griha pravesh."
  },
  {
    "id": "svj-silver-091",
    "title": "Grand Open-Fan Peacock Samai (Pair) - 15\"",
    "category": "silver",
    "metal": "92.5 Fine Sterling Silver",
    "purity": "BIS 925 Hallmark Silver",
    "weight": "1250 g",
    "size": "15\"",
    "certification": "SVJ 925 Hallmark Certified",
    "badge": "Grand Heritage",
    "priceEstimate": "Calculated by Live Silver Rate",
    "image": "assets/silver/silver_091.jpg",
    "description": "Magnificent pair of handcrafted pure 925 silver Samai lamps (15\" height, approx. weight 1250 g). Adorned with auspicious Mayur (peacock) finial and deeply embossed traditional nakshi work. Perfect for temple pooja, festive illumination, wedding gifts, and griha pravesh."
  }
];

// Helper to render products into grid
function renderProducts(category = "all") {
  const grid = document.getElementById("products-grid");
  if (!grid) return;

  const filtered = category === "all" 
    ? SVJ_CATALOG 
    : SVJ_CATALOG.filter(item => item.category === category);

  grid.innerHTML = filtered.map(item => {
    const waText = encodeURIComponent(
      `Hello SVJ Jewellers, I am inquiring about *${item.title}* (ID: ${item.id}, Purity: ${item.purity}, Weight: ${item.weight}). Please share today's live price and availability.`
    );
    
    // Check if item has real image or SVG
    const visualContent = item.image 
      ? `<img src="${item.image}" alt="${item.title}" class="product-real-img" loading="lazy" />`
      : (item.iconSvg || `<i class="fa-solid fa-gem" style="font-size: 40px; color: #d4af37;"></i>`);

    return `
      <div class="product-card" data-category="${item.category}">
        <span class="product-badge">${item.badge}</span>
        <div class="product-img-wrap" onclick="openProductModal('${item.id}')" style="cursor: pointer;">
          ${visualContent}
        </div>
        <div class="product-body">
          <span class="product-category">${item.category.toUpperCase()}</span>
          <h4 class="product-title">${item.title}</h4>
          <div class="product-purity">
            <i class="fa-solid fa-scale-balanced"></i> <strong>${item.weight}</strong>
          </div>
          <div class="product-purity-sub">
            <i class="fa-solid fa-certificate"></i> ${item.purity}
          </div>
          <div class="product-actions">
            <a href="https://wa.me/918378929951?text=${waText}" target="_blank" rel="noopener" class="btn-card-inquire" title="Inquire on WhatsApp">
              <i class="fa-brands fa-whatsapp"></i> Inquire
            </a>
            <button class="btn-card-view" onclick="openProductModal('${item.id}')" title="View Specifications" aria-label="View Details">
              <i class="fa-solid fa-eye"></i> Specs
            </button>
          </div>
        </div>
      </div>
    `;
  }).join("");
}

// Open Product Quick View Modal
function openProductModal(id) {
  const item = SVJ_CATALOG.find(i => i.id === id);
  if (!item) return;

  const modal = document.getElementById("product-detail-modal");
  const title = document.getElementById("modal-product-title");
  const body = document.getElementById("modal-product-body");

  title.textContent = item.title;
  const waText = encodeURIComponent(
    `Hello SVJ Jewellers, I would like to inquire about *${item.title}* (${item.id}). Purity: ${item.purity}, Approx Weight: ${item.weight}.`
  );

  const visualPreview = item.image 
    ? `<img src="${item.image}" alt="${item.title}" style="max-height: 220px; max-width: 100%; border-radius: 8px; object-fit: contain;" />`
    : (item.iconSvg || `<i class="fa-solid fa-gem" style="font-size: 50px; color: #d4af37;"></i>`);

  body.innerHTML = `
    <div style="text-align: center; margin-bottom: 14px;">
      <div style="width: 100%; max-height: 240px; margin: 0 auto; background: radial-gradient(circle, #fffdf8, #f7eedc); border-radius: 12px; display: flex; align-items: center; justify-content: center; border: 1px solid rgba(180,114,24,0.3); padding: 12px; overflow: hidden;">
        ${visualPreview}
      </div>
    </div>
    <p style="color: #4a2e1b; font-size: 13px; line-height: 1.6; margin-bottom: 14px;">${item.description}</p>
    
    <div style="background: #f7eedc; border: 1px solid rgba(180,114,24,0.28); border-radius: 10px; padding: 14px; margin-bottom: 16px; font-size: 12px;">
      <div style="display: flex; justify-content: space-between; padding: 6px 0; border-bottom: 1px solid rgba(74,46,27,0.12);">
        <span style="color: #785942; font-weight: 600;">Item Code:</span>
        <strong style="color: #2c1a0e;">${item.id.toUpperCase()}</strong>
      </div>
      <div style="display: flex; justify-content: space-between; padding: 6px 0; border-bottom: 1px solid rgba(74,46,27,0.12);">
        <span style="color: #785942; font-weight: 600;">Metal & Category:</span>
        <strong style="color: #a45e0d;">${item.metal}</strong>
      </div>
      <div style="display: flex; justify-content: space-between; padding: 6px 0; border-bottom: 1px solid rgba(74,46,27,0.12);">
        <span style="color: #785942; font-weight: 600;">Purity Standard:</span>
        <strong style="color: #2c1a0e;">${item.purity}</strong>
      </div>
      <div style="display: flex; justify-content: space-between; padding: 6px 0; border-bottom: 1px solid rgba(74,46,27,0.12);">
        <span style="color: #785942; font-weight: 600;">Approx Gross Weight:</span>
        <strong style="color: #c97b18;">${item.weight}</strong>
      </div>
      ${item.size ? `
      <div style="display: flex; justify-content: space-between; padding: 6px 0; border-bottom: 1px solid rgba(74,46,27,0.12);">
        <span style="color: #785942; font-weight: 600;">Height / Size:</span>
        <strong style="color: #2c1a0e;">${item.size}</strong>
      </div>` : ''}
      ${item.diamondWeight ? `
      <div style="display: flex; justify-content: space-between; padding: 6px 0; border-bottom: 1px solid rgba(74,46,27,0.12);">
        <span style="color: #785942; font-weight: 600;">Diamonds:</span>
        <strong style="color: #2c1a0e;">${item.diamondWeight}</strong>
      </div>` : ''}
      <div style="display: flex; justify-content: space-between; padding: 6px 0;">
        <span style="color: #785942; font-weight: 600;">Certification:</span>
        <strong style="color: #1f9d55;"><i class="fa-solid fa-shield-check"></i> ${item.certification}</strong>
      </div>
    </div>

    <div style="display: flex; gap: 8px;">
      <a href="https://wa.me/918378929951?text=${waText}" target="_blank" rel="noopener" class="btn btn-wa-submit" style="flex: 1; text-align: center; text-decoration: none;">
        <i class="fa-brands fa-whatsapp"></i> Inquire Live Price on WhatsApp
      </a>
      <a href="tel:8378929951" class="btn btn-amber" style="padding: 10px 16px;" title="Call Showroom">
        <i class="fa-solid fa-phone"></i>
      </a>
    </div>
  `;

  modal.classList.add("active");
}

window.openProductModal = openProductModal;
window.renderProducts = renderProducts;
