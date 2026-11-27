/**
 * SVJ Jewellers - Item Catalog Architecture
 * 90 Real Gold Masterpieces (24K, 22K, 18K) & 68 Pure Silver Designs
 * Categories: Bangles & Kadas (18), Necklaces (25), Earrings (22), Rings (25), Silver (68)
 */

const SVJ_CATALOG = [
  {
    "id": "svj-sunshine-01",
    "title": "Sunshine Royal Woven Mesh Bracelet",
    "category": "bangles",
    "carat": "22k",
    "metal": "Bracelet | 22K Hallmark Gold",
    "purity": "BIS 916 Standard (91.6%)",
    "weight": "24.00 g",
    "certification": "BIS 916 HUID Hallmarked",
    "badge": "22K Hallmark",
    "priceEstimate": "Calculated by Live Gold Rate",
    "image": "assets/gold/sunshine_kada_royal_woven.png",
    "description": "Signature Sunshine Royal Woven Mesh Bracelet crafted in BIS 916 22K gold with ornate filigree end-caps and traditional hook clasp."
  },
  {
    "id": "svj-gold-bangle-s01",
    "title": "Royal Vyaghra 24K Solid Kada",
    "category": "bangles",
    "carat": "24k",
    "metal": "Kada | 24K Pure Gold",
    "purity": "999 Pure Gold (99.9%)",
    "weight": "48.50 g",
    "certification": "999 Pure Bullion Certified",
    "badge": "24K Pure Gold",
    "priceEstimate": "Calculated by Live Gold Rate",
    "image": "assets/gold/bangle_18k_heritage_diamond.jpg",
    "description": "Prestigious solid 24K pure gold handcrafted Kada featuring auspicious lotus and royal peacock engravings with mirror-beveled rims. Forged in 999 bullion purity with traditional Saraf Bazar Solapur craftsmanship."
  },
  {
    "id": "svj-gold-bangle-s02",
    "title": "Heritage Nakshi 22K Bangles (Pair)",
    "category": "bangles",
    "carat": "22k",
    "metal": "Bangles Pair | 22K Hallmark Gold",
    "purity": "BIS 916 Standard (91.6%)",
    "weight": "38.20 g",
    "certification": "BIS 916 HUID Hallmarked",
    "badge": "22K Hallmark",
    "priceEstimate": "Calculated by Live Gold Rate",
    "image": "assets/gold/bangle_22k_broad_filigree_kada.jpg",
    "description": "Opulent pair of 22K hallmarked Nakshi bangles with deeply embossed floral arabesques and peacock medallions. Finished with radiant yellow gold luster and authentic BIS 916 hallmarking."
  },
  {
    "id": "svj-gold-bangle-s03",
    "title": "Antique Broad Filigree 22K Kada",
    "category": "bangles",
    "carat": "22k",
    "metal": "Broad Kada | 22K Hallmark Gold",
    "purity": "BIS 916 Standard (91.6%)",
    "weight": "34.80 g",
    "certification": "BIS 916 HUID Hallmarked",
    "badge": "22K Hallmark",
    "priceEstimate": "Calculated by Live Gold Rate",
    "image": "assets/gold/bangle_22k_embossed_kadas.jpg",
    "description": "Grand bridal 22K gold cuff kada adorned with intricate open filigree jali lattice, beaded border accents, and a concealed side screw hinge for effortless luxury wear."
  },
  {
    "id": "svj-gold-bangle-s04",
    "title": "Royal Filigree 22K Bangle Stack (Set of 4)",
    "category": "bangles",
    "carat": "22k",
    "metal": "Bangles Set | 22K Hallmark Gold",
    "purity": "BIS 916 Standard (91.6%)",
    "weight": "54.60 g",
    "certification": "BIS 916 HUID Hallmarked",
    "badge": "22K Hallmark",
    "priceEstimate": "Calculated by Live Gold Rate",
    "image": "assets/gold/bangle_22k_filigree_set.jpg",
    "description": "Spectacular 4-piece bridal bangle set crafted in BIS 916 yellow gold. Features precision laser-cut wirework, milgrain borders, and diamond-faceted gold beads."
  },
  {
    "id": "svj-gold-bangle-s05",
    "title": "Traditional Embossed 22K Temple Kadas (Pair)",
    "category": "bangles",
    "carat": "22k",
    "metal": "Kadas Pair | 22K Hallmark Gold",
    "purity": "BIS 916 Standard (91.6%)",
    "weight": "42.10 g",
    "certification": "BIS 916 HUID Hallmarked",
    "badge": "22K Hallmark",
    "priceEstimate": "Calculated by Live Gold Rate",
    "image": "assets/gold/bangle_22k_nakshi_pair.jpg",
    "description": "Authentic pair of Maharashtrian temple kadas displaying high-relief deity and floral repousse carving with matte antique patina and polished gold rims."
  },
  {
    "id": "svj-gold-bangle-s06",
    "title": "Vintage Diamond & 18K Gold Cuff",
    "category": "bangles",
    "carat": "18k",
    "metal": "Diamond Cuff | 18K Hallmarked Gold",
    "purity": "BIS 750 Standard (75.0%)",
    "weight": "28.40 g",
    "diamondWeight": "1.25 ct VVS-EF",
    "certification": "BIS 750 & IGI Diamond Certified",
    "badge": "18K Diamond",
    "priceEstimate": "Calculated by Live Gold Rate",
    "image": "assets/gold/bangle_24k_royal_kada.jpg",
    "description": "Exquisite 18K gold designer statement bangle encrusted with natural brilliant-cut diamonds in prongs. Seamlessly balances royal heritage elegance with contemporary cocktail glamour."
  },
  {
    "id": "svj-gold-001",
    "title": "Classic Bangle",
    "category": "bangles",
    "carat": "24k",
    "metal": "Bangle | 24K Pure Gold",
    "purity": "999 Pure Gold (99.9%)",
    "weight": "Made to Order / Custom Weight",
    "certification": "999 Pure Gold Certified",
    "badge": "24K Gold",
    "priceEstimate": "Calculated by Live Gold Rate",
    "image": "assets/gold/bangles_hd_01.jpg",
    "description": "Exquisite Classic Bangle crafted in 999 Pure Gold (99.9%) (24K). Available at SVJ Jewellers, Saraf Bazar, Solapur with transparent billing and live bullion rate."
  },
  {
    "id": "svj-gold-026",
    "title": "Floral Bangle",
    "category": "bangles",
    "carat": "22k",
    "metal": "Bangle | 22K Hallmark Gold",
    "purity": "BIS 916 Standard",
    "weight": "Made to Order / Custom Weight",
    "certification": "BIS 916 HUID Hallmarked",
    "badge": "22K Gold",
    "priceEstimate": "Calculated by Live Gold Rate",
    "image": "assets/gold/bangles_hd_02.jpg",
    "description": "Exquisite Floral Bangle crafted in BIS 916 Standard (22K). Available at SVJ Jewellers, Saraf Bazar, Solapur with transparent billing and live bullion rate."
  },
  {
    "id": "svj-gold-051",
    "title": "Minimal Bangle",
    "category": "bangles",
    "carat": "18k",
    "metal": "Bangle | 18K Diamond & Designer Gold",
    "purity": "BIS 750 Standard",
    "weight": "Made to Order / Custom Weight",
    "certification": "BIS 750 HUID Hallmarked",
    "badge": "18K Gold",
    "priceEstimate": "Calculated by Live Gold Rate",
    "image": "assets/gold/bangles_hd_03.jpg",
    "description": "Exquisite Minimal Bangle crafted in BIS 750 Standard (18K). Available at SVJ Jewellers, Saraf Bazar, Solapur with transparent billing and live bullion rate."
  },
  {
    "id": "svj-gold-002",
    "title": "Royal Bangle",
    "category": "bangles",
    "carat": "24k",
    "metal": "Bangle | 24K Pure Gold",
    "purity": "999 Pure Gold (99.9%)",
    "weight": "Made to Order / Custom Weight",
    "certification": "999 Pure Gold Certified",
    "badge": "24K Gold",
    "priceEstimate": "Calculated by Live Gold Rate",
    "image": "assets/gold/bangles_hd_04.jpg",
    "description": "Exquisite Royal Bangle crafted in 999 Pure Gold (99.9%) (24K). Available at SVJ Jewellers, Saraf Bazar, Solapur with transparent billing and live bullion rate."
  },
  {
    "id": "svj-gold-027",
    "title": "Leaf Pattern Bangle",
    "category": "bangles",
    "carat": "22k",
    "metal": "Bangle | 22K Hallmark Gold",
    "purity": "BIS 916 Standard",
    "weight": "Made to Order / Custom Weight",
    "certification": "BIS 916 HUID Hallmarked",
    "badge": "22K Gold",
    "priceEstimate": "Calculated by Live Gold Rate",
    "image": "assets/gold/bangles_hd_05.jpg",
    "description": "Exquisite Leaf Pattern Bangle crafted in BIS 916 Standard (22K). Available at SVJ Jewellers, Saraf Bazar, Solapur with transparent billing and live bullion rate."
  },
  {
    "id": "svj-gold-054",
    "title": "Modern Kada",
    "category": "bangles",
    "carat": "18k",
    "metal": "Kada | 18K Diamond & Designer Gold",
    "purity": "BIS 750 Standard",
    "weight": "Made to Order / Custom Weight",
    "certification": "BIS 750 HUID Hallmarked",
    "badge": "18K Gold",
    "priceEstimate": "Calculated by Live Gold Rate",
    "image": "assets/gold/bangles_hd_06.jpg",
    "description": "Exquisite Modern Kada crafted in BIS 750 Standard (18K). Available at SVJ Jewellers, Saraf Bazar, Solapur with transparent billing and live bullion rate."
  },
  {
    "id": "svj-gold-028",
    "title": "Designer Bangle",
    "category": "bangles",
    "carat": "22k",
    "metal": "Bangle | 22K Hallmark Gold",
    "purity": "BIS 916 Standard",
    "weight": "Made to Order / Custom Weight",
    "certification": "BIS 916 HUID Hallmarked",
    "badge": "22K Gold",
    "priceEstimate": "Calculated by Live Gold Rate",
    "image": "assets/gold/bangles_hd_08.jpg",
    "description": "Exquisite Designer Bangle crafted in BIS 916 Standard (22K). Available at SVJ Jewellers, Saraf Bazar, Solapur with transparent billing and live bullion rate."
  },
  {
    "id": "svj-gold-055",
    "title": "Stacked Bangle",
    "category": "bangles",
    "carat": "18k",
    "metal": "Bangle | 18K Diamond & Designer Gold",
    "purity": "BIS 750 Standard",
    "weight": "Made to Order / Custom Weight",
    "certification": "BIS 750 HUID Hallmarked",
    "badge": "18K Gold",
    "priceEstimate": "Calculated by Live Gold Rate",
    "image": "assets/gold/bangles_hd_09.jpg",
    "description": "Exquisite Stacked Bangle crafted in BIS 750 Standard (18K). Available at SVJ Jewellers, Saraf Bazar, Solapur with transparent billing and live bullion rate."
  },
  {
    "id": "svj-gold-029",
    "title": "Kada Bangle",
    "category": "bangles",
    "carat": "22k",
    "metal": "Kada | 22K Hallmark Gold",
    "purity": "BIS 916 Standard",
    "weight": "Made to Order / Custom Weight",
    "certification": "BIS 916 HUID Hallmarked",
    "badge": "22K Gold",
    "priceEstimate": "Calculated by Live Gold Rate",
    "image": "assets/gold/bangles_hd_11.jpg",
    "description": "Exquisite Kada Bangle crafted in BIS 916 Standard (22K). Available at SVJ Jewellers, Saraf Bazar, Solapur with transparent billing and live bullion rate."
  },
  {
    "id": "svj-gold-057",
    "title": "Infinity Bangle",
    "category": "bangles",
    "carat": "18k",
    "metal": "Bangle | 18K Diamond & Designer Gold",
    "purity": "BIS 750 Standard",
    "weight": "Made to Order / Custom Weight",
    "certification": "BIS 750 HUID Hallmarked",
    "badge": "18K Gold",
    "priceEstimate": "Calculated by Live Gold Rate",
    "image": "assets/gold/bangles_hd_15.jpg",
    "description": "Exquisite Infinity Bangle crafted in BIS 750 Standard (18K). Available at SVJ Jewellers, Saraf Bazar, Solapur with transparent billing and live bullion rate."
  },
  {
    "id": "svj-gold-007",
    "title": "Filigree Bangle",
    "category": "bangles",
    "carat": "24k",
    "metal": "Bangle | 24K Pure Gold",
    "purity": "999 Pure Gold (99.9%)",
    "weight": "Made to Order / Custom Weight",
    "certification": "999 Pure Gold Certified",
    "badge": "24K Gold",
    "priceEstimate": "Calculated by Live Gold Rate",
    "image": "assets/gold/bangles_hd_19.jpg",
    "description": "Exquisite Filigree Bangle crafted in 999 Pure Gold (99.9%) (24K). Available at SVJ Jewellers, Saraf Bazar, Solapur with transparent billing and live bullion rate."
  },
  {
    "id": "svj-gold-necklace-s01",
    "title": "Royal Hand-Woven 24K Gop Chain",
    "category": "necklaces",
    "carat": "24k",
    "metal": "Chain | 24K Pure Gold",
    "purity": "999 Pure Gold (99.9%)",
    "weight": "36.20 g",
    "certification": "999 Pure Bullion Certified",
    "badge": "24K Pure Gold",
    "priceEstimate": "Calculated by Live Gold Rate",
    "image": "assets/gold/necklace_18k_multi_chains.jpg",
    "description": "Supreme 24K solid pure gold Gop weave chain with an intricately sculpted traditional royal hook clasp. Exceptionally durable, radiant 999 bullion luster, ideal for daily and ceremonial prestige."
  },
  {
    "id": "svj-gold-necklace-s02",
    "title": "Heritage Lakshmi Kasu Mala (24K)",
    "category": "necklaces",
    "carat": "24k",
    "metal": "Kasu Mala | 24K Pure Gold",
    "purity": "999 Pure Gold (99.9%)",
    "weight": "52.40 g",
    "certification": "999 Pure Bullion Certified",
    "badge": "24K Pure Gold",
    "priceEstimate": "Calculated by Live Gold Rate",
    "image": "assets/gold/necklace_22k_mango_mala.jpg",
    "description": "Auspicious traditional South Indian Kasu Mala comprising die-stamped 24K gold coins embossed with Goddess Lakshmi seated on a lotus. Handcrafted in pure 999 gold for wedding and temple rituals."
  },
  {
    "id": "svj-gold-necklace-s03",
    "title": "Grand Temple Lakshmi 22K Bridal Choker",
    "category": "necklaces",
    "carat": "22k",
    "metal": "Bridal Choker | 22K Hallmark Gold",
    "purity": "BIS 916 Standard (91.6%)",
    "weight": "68.50 g",
    "certification": "BIS 916 HUID Hallmarked",
    "badge": "22K Hallmark",
    "priceEstimate": "Calculated by Live Gold Rate",
    "image": "assets/gold/necklace_22k_temple_choker.jpg",
    "description": "Crown jewel of our bridal gallery: an intricately carved 22K BIS 916 temple choker showcasing Goddess Lakshmi enthroned between regal peacocks, adorned with hanging solid gold bead tassels."
  },
  {
    "id": "svj-gold-necklace-s04",
    "title": "Antique 22K Mango Mala (Manga Malai)",
    "category": "necklaces",
    "carat": "22k",
    "metal": "Long Haram | 22K Hallmark Gold",
    "purity": "BIS 916 Standard (91.6%)",
    "weight": "62.30 g",
    "certification": "BIS 916 HUID Hallmarked",
    "badge": "22K Hallmark",
    "priceEstimate": "Calculated by Live Gold Rate",
    "image": "assets/gold/necklace_24k_gop_chain.jpg",
    "description": "Timeless 22K yellow gold Manga Malai haram showcasing traditional paisley-shaped mango units with micro-carved floral vines and antique matte finish."
  },
  {
    "id": "svj-gold-necklace-s05",
    "title": "Contemporary 18K Italian Chain Suite",
    "category": "necklaces",
    "carat": "18k",
    "metal": "Layered Chains | 18K Hallmarked Gold",
    "purity": "BIS 750 Standard (75.0%)",
    "weight": "22.80 g",
    "certification": "BIS 750 HUID Hallmarked",
    "badge": "18K Gold",
    "priceEstimate": "Calculated by Live Gold Rate",
    "image": "assets/gold/necklace_24k_kasu_mala.jpg",
    "description": "Chic multi-strand 18K yellow gold chain set featuring paperclip links, box links, and rope textures. Designed for modern daily sophistication and cocktail styling."
  },
  {
    "id": "svj-necklace-004",
    "title": "Grand Lakshmi Necklace",
    "category": "necklaces",
    "carat": "24k",
    "metal": "Necklace | 24K Pure Gold",
    "purity": "999 Pure Gold (99.9%)",
    "weight": "Made to Order / Custom Weight",
    "certification": "999 Pure Gold Certified",
    "badge": "24K Gold",
    "priceEstimate": "Calculated by Live Gold Rate",
    "image": "assets/gold/necklaces_hd_04.jpg",
    "description": "Exquisite Grand Lakshmi Necklace crafted in 999 Pure Gold (99.9%) (24K). Available at SVJ Jewellers, Saraf Bazar, Solapur with transparent billing and live bullion rate."
  },
  {
    "id": "svj-necklace-017",
    "title": "Royal Bridal Necklace",
    "category": "necklaces",
    "carat": "22k",
    "metal": "Necklace | 22K Hallmark Gold",
    "purity": "BIS 916 Standard",
    "weight": "Made to Order / Custom Weight",
    "certification": "BIS 916 HUID Hallmarked",
    "badge": "22K Gold",
    "priceEstimate": "Calculated by Live Gold Rate",
    "image": "assets/gold/necklaces_hd_06.jpg",
    "description": "Exquisite Royal Bridal Necklace crafted in BIS 916 Standard (22K). Available at SVJ Jewellers, Saraf Bazar, Solapur with transparent billing and live bullion rate."
  },
  {
    "id": "svj-necklace-033",
    "title": "Modern Pendant Necklace",
    "category": "necklaces",
    "carat": "18k",
    "metal": "Necklace | 18K Diamond & Designer Gold",
    "purity": "BIS 750 Standard",
    "weight": "Made to Order / Custom Weight",
    "certification": "BIS 750 HUID Hallmarked",
    "badge": "18K Gold",
    "priceEstimate": "Calculated by Live Gold Rate",
    "image": "assets/gold/necklaces_hd_07.jpg",
    "description": "Exquisite Modern Pendant Necklace crafted in BIS 750 Standard (18K). Available at SVJ Jewellers, Saraf Bazar, Solapur with transparent billing and live bullion rate."
  },
  {
    "id": "svj-necklace-006",
    "title": "Traditional Mango Necklace",
    "category": "necklaces",
    "carat": "24k",
    "metal": "Necklace | 24K Pure Gold",
    "purity": "999 Pure Gold (99.9%)",
    "weight": "Made to Order / Custom Weight",
    "certification": "999 Pure Gold Certified",
    "badge": "24K Gold",
    "priceEstimate": "Calculated by Live Gold Rate",
    "image": "assets/gold/necklaces_hd_08.jpg",
    "description": "Exquisite Traditional Mango Necklace crafted in 999 Pure Gold (99.9%) (24K). Available at SVJ Jewellers, Saraf Bazar, Solapur with transparent billing and live bullion rate."
  },
  {
    "id": "svj-necklace-018",
    "title": "Peacock Design Necklace",
    "category": "necklaces",
    "carat": "22k",
    "metal": "Necklace | 22K Hallmark Gold",
    "purity": "BIS 916 Standard",
    "weight": "Made to Order / Custom Weight",
    "certification": "BIS 916 HUID Hallmarked",
    "badge": "22K Gold",
    "priceEstimate": "Calculated by Live Gold Rate",
    "image": "assets/gold/necklaces_hd_09.jpg",
    "description": "Exquisite Peacock Design Necklace crafted in BIS 916 Standard (22K). Available at SVJ Jewellers, Saraf Bazar, Solapur with transparent billing and live bullion rate."
  },
  {
    "id": "svj-necklace-034",
    "title": "Infinity Design Necklace",
    "category": "necklaces",
    "carat": "18k",
    "metal": "Necklace | 18K Diamond & Designer Gold",
    "purity": "BIS 750 Standard",
    "weight": "Made to Order / Custom Weight",
    "certification": "BIS 750 HUID Hallmarked",
    "badge": "18K Gold",
    "priceEstimate": "Calculated by Live Gold Rate",
    "image": "assets/gold/necklaces_hd_10.jpg",
    "description": "Exquisite Infinity Design Necklace crafted in BIS 750 Standard (18K). Available at SVJ Jewellers, Saraf Bazar, Solapur with transparent billing and live bullion rate."
  },
  {
    "id": "svj-necklace-007",
    "title": "Floral Gold Necklace",
    "category": "necklaces",
    "carat": "24k",
    "metal": "Necklace | 24K Pure Gold",
    "purity": "999 Pure Gold (99.9%)",
    "weight": "Made to Order / Custom Weight",
    "certification": "999 Pure Gold Certified",
    "badge": "24K Gold",
    "priceEstimate": "Calculated by Live Gold Rate",
    "image": "assets/gold/necklaces_hd_11.jpg",
    "description": "Exquisite Floral Gold Necklace crafted in 999 Pure Gold (99.9%) (24K). Available at SVJ Jewellers, Saraf Bazar, Solapur with transparent billing and live bullion rate."
  },
  {
    "id": "svj-necklace-019",
    "title": "Floral Queen Necklace",
    "category": "necklaces",
    "carat": "22k",
    "metal": "Necklace | 22K Hallmark Gold",
    "purity": "BIS 916 Standard",
    "weight": "Made to Order / Custom Weight",
    "certification": "BIS 916 HUID Hallmarked",
    "badge": "22K Gold",
    "priceEstimate": "Calculated by Live Gold Rate",
    "image": "assets/gold/necklaces_hd_12.jpg",
    "description": "Exquisite Floral Queen Necklace crafted in BIS 916 Standard (22K). Available at SVJ Jewellers, Saraf Bazar, Solapur with transparent billing and live bullion rate."
  },
  {
    "id": "svj-necklace-035",
    "title": "Minimal Chain Necklace",
    "category": "necklaces",
    "carat": "18k",
    "metal": "Necklace | 18K Diamond & Designer Gold",
    "purity": "BIS 750 Standard",
    "weight": "Made to Order / Custom Weight",
    "certification": "BIS 750 HUID Hallmarked",
    "badge": "18K Gold",
    "priceEstimate": "Calculated by Live Gold Rate",
    "image": "assets/gold/necklaces_hd_13.jpg",
    "description": "Exquisite Minimal Chain Necklace crafted in BIS 750 Standard (18K). Available at SVJ Jewellers, Saraf Bazar, Solapur with transparent billing and live bullion rate."
  },
  {
    "id": "svj-necklace-008",
    "title": "Royal Peacock Necklace",
    "category": "necklaces",
    "carat": "24k",
    "metal": "Necklace | 24K Pure Gold",
    "purity": "999 Pure Gold (99.9%)",
    "weight": "Made to Order / Custom Weight",
    "certification": "999 Pure Gold Certified",
    "badge": "24K Gold",
    "priceEstimate": "Calculated by Live Gold Rate",
    "image": "assets/gold/necklaces_hd_14.jpg",
    "description": "Exquisite Royal Peacock Necklace crafted in 999 Pure Gold (99.9%) (24K). Available at SVJ Jewellers, Saraf Bazar, Solapur with transparent billing and live bullion rate."
  },
  {
    "id": "svj-necklace-020",
    "title": "Diamond Cut Necklace",
    "category": "necklaces",
    "carat": "22k",
    "metal": "Necklace | 22K Hallmark Gold",
    "purity": "BIS 916 Standard",
    "weight": "Made to Order / Custom Weight",
    "certification": "BIS 916 HUID Hallmarked",
    "badge": "22K Gold",
    "priceEstimate": "Calculated by Live Gold Rate",
    "image": "assets/gold/necklaces_hd_15.jpg",
    "description": "Exquisite Diamond Cut Necklace crafted in BIS 916 Standard (22K). Available at SVJ Jewellers, Saraf Bazar, Solapur with transparent billing and live bullion rate."
  },
  {
    "id": "svj-necklace-036",
    "title": "Circle Charm Necklace",
    "category": "necklaces",
    "carat": "18k",
    "metal": "Necklace | 18K Diamond & Designer Gold",
    "purity": "BIS 750 Standard",
    "weight": "Made to Order / Custom Weight",
    "certification": "BIS 750 HUID Hallmarked",
    "badge": "18K Gold",
    "priceEstimate": "Calculated by Live Gold Rate",
    "image": "assets/gold/necklaces_hd_16.jpg",
    "description": "Exquisite Circle Charm Necklace crafted in BIS 750 Standard (18K). Available at SVJ Jewellers, Saraf Bazar, Solapur with transparent billing and live bullion rate."
  },
  {
    "id": "svj-necklace-009",
    "title": "Solid Gold Necklace",
    "category": "necklaces",
    "carat": "24k",
    "metal": "Necklace | 24K Pure Gold",
    "purity": "999 Pure Gold (99.9%)",
    "weight": "Made to Order / Custom Weight",
    "certification": "999 Pure Gold Certified",
    "badge": "24K Gold",
    "priceEstimate": "Calculated by Live Gold Rate",
    "image": "assets/gold/necklaces_hd_17.jpg",
    "description": "Exquisite Solid Gold Necklace crafted in 999 Pure Gold (99.9%) (24K). Available at SVJ Jewellers, Saraf Bazar, Solapur with transparent billing and live bullion rate."
  },
  {
    "id": "svj-necklace-021",
    "title": "Traditional Haram",
    "category": "necklaces",
    "carat": "22k",
    "metal": "Necklace | 22K Hallmark Gold",
    "purity": "BIS 916 Standard",
    "weight": "Made to Order / Custom Weight",
    "certification": "BIS 916 HUID Hallmarked",
    "badge": "22K Gold",
    "priceEstimate": "Calculated by Live Gold Rate",
    "image": "assets/gold/necklaces_hd_18.jpg",
    "description": "Exquisite Traditional Haram crafted in BIS 916 Standard (22K). Available at SVJ Jewellers, Saraf Bazar, Solapur with transparent billing and live bullion rate."
  },
  {
    "id": "svj-necklace-038",
    "title": "Bar Necklace",
    "category": "necklaces",
    "carat": "18k",
    "metal": "Necklace | 18K Diamond & Designer Gold",
    "purity": "BIS 750 Standard",
    "weight": "Made to Order / Custom Weight",
    "certification": "BIS 750 HUID Hallmarked",
    "badge": "18K Gold",
    "priceEstimate": "Calculated by Live Gold Rate",
    "image": "assets/gold/necklaces_hd_19.jpg",
    "description": "Exquisite Bar Necklace crafted in BIS 750 Standard (18K). Available at SVJ Jewellers, Saraf Bazar, Solapur with transparent billing and live bullion rate."
  },
  {
    "id": "svj-necklace-010",
    "title": "Kundan Style Gold Necklace",
    "category": "necklaces",
    "carat": "24k",
    "metal": "Necklace | 24K Pure Gold",
    "purity": "999 Pure Gold (99.9%)",
    "weight": "Made to Order / Custom Weight",
    "certification": "999 Pure Gold Certified",
    "badge": "24K Gold",
    "priceEstimate": "Calculated by Live Gold Rate",
    "image": "assets/gold/necklaces_hd_20.jpg",
    "description": "Exquisite Kundan Style Gold Necklace crafted in 999 Pure Gold (99.9%) (24K). Available at SVJ Jewellers, Saraf Bazar, Solapur with transparent billing and live bullion rate."
  },
  {
    "id": "svj-necklace-022",
    "title": "Kasulaperu Necklace",
    "category": "necklaces",
    "carat": "22k",
    "metal": "Necklace | 22K Hallmark Gold",
    "purity": "BIS 916 Standard",
    "weight": "Made to Order / Custom Weight",
    "certification": "BIS 916 HUID Hallmarked",
    "badge": "22K Gold",
    "priceEstimate": "Calculated by Live Gold Rate",
    "image": "assets/gold/necklaces_hd_21.jpg",
    "description": "Exquisite Kasulaperu Necklace crafted in BIS 916 Standard (22K). Available at SVJ Jewellers, Saraf Bazar, Solapur with transparent billing and live bullion rate."
  },
  {
    "id": "svj-necklace-039",
    "title": "Drop Pendant Necklace",
    "category": "necklaces",
    "carat": "18k",
    "metal": "Necklace | 18K Diamond & Designer Gold",
    "purity": "BIS 750 Standard",
    "weight": "Made to Order / Custom Weight",
    "certification": "BIS 750 HUID Hallmarked",
    "badge": "18K Gold",
    "priceEstimate": "Calculated by Live Gold Rate",
    "image": "assets/gold/necklaces_hd_22.jpg",
    "description": "Exquisite Drop Pendant Necklace crafted in BIS 750 Standard (18K). Available at SVJ Jewellers, Saraf Bazar, Solapur with transparent billing and live bullion rate."
  },
  {
    "id": "svj-necklace-011",
    "title": "Heavy Temple Necklace",
    "category": "necklaces",
    "carat": "24k",
    "metal": "Necklace | 24K Pure Gold",
    "purity": "999 Pure Gold (99.9%)",
    "weight": "Made to Order / Custom Weight",
    "certification": "999 Pure Gold Certified",
    "badge": "24K Gold",
    "priceEstimate": "Calculated by Live Gold Rate",
    "image": "assets/gold/necklaces_hd_23.jpg",
    "description": "Exquisite Heavy Temple Necklace crafted in 999 Pure Gold (99.9%) (24K). Available at SVJ Jewellers, Saraf Bazar, Solapur with transparent billing and live bullion rate."
  },
  {
    "id": "svj-necklace-023",
    "title": "Pearl Drops Necklace",
    "category": "necklaces",
    "carat": "22k",
    "metal": "Necklace | 22K Hallmark Gold",
    "purity": "BIS 916 Standard",
    "weight": "Made to Order / Custom Weight",
    "certification": "BIS 916 HUID Hallmarked",
    "badge": "22K Gold",
    "priceEstimate": "Calculated by Live Gold Rate",
    "image": "assets/gold/necklaces_hd_24.jpg",
    "description": "Exquisite Pearl Drops Necklace crafted in BIS 916 Standard (22K). Available at SVJ Jewellers, Saraf Bazar, Solapur with transparent billing and live bullion rate."
  },
  {
    "id": "svj-gold-earring-s01",
    "title": "Pure 24K Floral Kundal Studs",
    "category": "earrings",
    "carat": "24k",
    "metal": "Studs | 24K Pure Gold",
    "purity": "999 Pure Gold (99.9%)",
    "weight": "12.40 g",
    "certification": "999 Pure Bullion Certified",
    "badge": "24K Pure Gold",
    "priceEstimate": "Calculated by Live Gold Rate",
    "image": "assets/gold/earring_18k_diamond_chandelier.jpg",
    "description": "Classic 24K solid gold Kundal ear studs forged with intricate multi-tiered floral petals and granulated micro-gold beading with a secure screw-back mechanism."
  },
  {
    "id": "svj-gold-earring-s02",
    "title": "Royal Mayur 22K Temple Jhumkas",
    "category": "earrings",
    "carat": "22k",
    "metal": "Jhumkas | 22K Hallmark Gold",
    "purity": "BIS 916 Standard (91.6%)",
    "weight": "26.80 g",
    "certification": "BIS 916 HUID Hallmarked",
    "badge": "22K Hallmark",
    "priceEstimate": "Calculated by Live Gold Rate",
    "image": "assets/gold/earring_22k_royal_chandbali.jpg",
    "description": "Grand two-tiered 22K gold temple Jhumkas crowned with dancing peacocks, gemstone accents, deeply etched Lakshmi bell domes, and swaying gold ball fringe."
  },
  {
    "id": "svj-gold-earring-s03",
    "title": "Heritage Pearl & Filigree 22K Chandbalis",
    "category": "earrings",
    "carat": "22k",
    "metal": "Chandbalis | 22K Hallmark Gold",
    "purity": "BIS 916 Standard (91.6%)",
    "weight": "24.50 g",
    "certification": "BIS 916 HUID Hallmarked",
    "badge": "22K Hallmark",
    "priceEstimate": "Calculated by Live Gold Rate",
    "image": "assets/gold/earring_22k_temple_peacock_jhumka.jpg",
    "description": "Crescent-moon royal 22K Chandbali earrings adorned with hand-strung natural seed pearls, delicate wire filigree, and floral tops for unforgettable bridal allure."
  },
  {
    "id": "svj-gold-earring-s04",
    "title": "Victorian Chandelier 18K Diamond Earrings",
    "category": "earrings",
    "carat": "18k",
    "metal": "Diamond Drops | 18K Hallmarked Gold",
    "purity": "BIS 750 Standard (75.0%)",
    "weight": "16.90 g",
    "diamondWeight": "2.40 ct VVS-EF",
    "certification": "BIS 750 & IGI Diamond Certified",
    "badge": "18K Diamond",
    "priceEstimate": "Calculated by Live Gold Rate",
    "image": "assets/gold/earring_24k_floral_kundal.jpg",
    "description": "Cascading chandelier earrings crafted in 18K white and yellow gold, micro-set with brilliant-cut diamonds creating liquid light brilliance."
  },
  {
    "id": "svj-gold-011",
    "title": "Royal Jhumka",
    "category": "earrings",
    "carat": "24k",
    "metal": "Earrings | 24K Pure Gold",
    "purity": "999 Pure Gold (99.9%)",
    "weight": "Made to Order / Custom Weight",
    "certification": "999 Pure Gold Certified",
    "badge": "24K Gold",
    "priceEstimate": "Calculated by Live Gold Rate",
    "image": "assets/gold/earrings_hd_01.jpg",
    "description": "Exquisite Royal Jhumka crafted in 999 Pure Gold (99.9%) (24K). Available at SVJ Jewellers, Saraf Bazar, Solapur with transparent billing and live bullion rate."
  },
  {
    "id": "svj-gold-036",
    "title": "Jhumka",
    "category": "earrings",
    "carat": "22k",
    "metal": "Earrings | 22K Hallmark Gold",
    "purity": "BIS 916 Standard",
    "weight": "Made to Order / Custom Weight",
    "certification": "BIS 916 HUID Hallmarked",
    "badge": "22K Gold",
    "priceEstimate": "Calculated by Live Gold Rate",
    "image": "assets/gold/earrings_hd_02.jpg",
    "description": "Exquisite Jhumka crafted in BIS 916 Standard (22K). Available at SVJ Jewellers, Saraf Bazar, Solapur with transparent billing and live bullion rate."
  },
  {
    "id": "svj-gold-037",
    "title": "Chandbali",
    "category": "earrings",
    "carat": "22k",
    "metal": "Earrings | 22K Hallmark Gold",
    "purity": "BIS 916 Standard",
    "weight": "Made to Order / Custom Weight",
    "certification": "BIS 916 HUID Hallmarked",
    "badge": "22K Gold",
    "priceEstimate": "Calculated by Live Gold Rate",
    "image": "assets/gold/earrings_hd_05.jpg",
    "description": "Exquisite Chandbali crafted in BIS 916 Standard (22K). Available at SVJ Jewellers, Saraf Bazar, Solapur with transparent billing and live bullion rate."
  },
  {
    "id": "svj-gold-013",
    "title": "Chandbali",
    "category": "earrings",
    "carat": "24k",
    "metal": "Earrings | 24K Pure Gold",
    "purity": "999 Pure Gold (99.9%)",
    "weight": "Made to Order / Custom Weight",
    "certification": "999 Pure Gold Certified",
    "badge": "24K Gold",
    "priceEstimate": "Calculated by Live Gold Rate",
    "image": "assets/gold/earrings_hd_07.jpg",
    "description": "Exquisite Chandbali crafted in 999 Pure Gold (99.9%) (24K). Available at SVJ Jewellers, Saraf Bazar, Solapur with transparent billing and live bullion rate."
  },
  {
    "id": "svj-gold-038",
    "title": "Kundan Earrings",
    "category": "earrings",
    "carat": "22k",
    "metal": "Earrings | 22K Hallmark Gold",
    "purity": "BIS 916 Standard",
    "weight": "Made to Order / Custom Weight",
    "certification": "BIS 916 HUID Hallmarked",
    "badge": "22K Gold",
    "priceEstimate": "Calculated by Live Gold Rate",
    "image": "assets/gold/earrings_hd_08.jpg",
    "description": "Exquisite Kundan Earrings crafted in BIS 916 Standard (22K). Available at SVJ Jewellers, Saraf Bazar, Solapur with transparent billing and live bullion rate."
  },
  {
    "id": "svj-gold-063",
    "title": "Drop Earrings",
    "category": "earrings",
    "carat": "18k",
    "metal": "Earrings | 18K Diamond & Designer Gold",
    "purity": "BIS 750 Standard",
    "weight": "Made to Order / Custom Weight",
    "certification": "BIS 750 HUID Hallmarked",
    "badge": "18K Gold",
    "priceEstimate": "Calculated by Live Gold Rate",
    "image": "assets/gold/earrings_hd_09.jpg",
    "description": "Exquisite Drop Earrings crafted in BIS 750 Standard (18K). Available at SVJ Jewellers, Saraf Bazar, Solapur with transparent billing and live bullion rate."
  },
  {
    "id": "svj-gold-014",
    "title": "Classic Studs",
    "category": "earrings",
    "carat": "24k",
    "metal": "Earrings | 24K Pure Gold",
    "purity": "999 Pure Gold (99.9%)",
    "weight": "Made to Order / Custom Weight",
    "certification": "999 Pure Gold Certified",
    "badge": "24K Gold",
    "priceEstimate": "Calculated by Live Gold Rate",
    "image": "assets/gold/earrings_hd_10.jpg",
    "description": "Exquisite Classic Studs crafted in 999 Pure Gold (99.9%) (24K). Available at SVJ Jewellers, Saraf Bazar, Solapur with transparent billing and live bullion rate."
  },
  {
    "id": "svj-gold-039",
    "title": "Drop Earrings",
    "category": "earrings",
    "carat": "22k",
    "metal": "Earrings | 22K Hallmark Gold",
    "purity": "BIS 916 Standard",
    "weight": "Made to Order / Custom Weight",
    "certification": "BIS 916 HUID Hallmarked",
    "badge": "22K Gold",
    "priceEstimate": "Calculated by Live Gold Rate",
    "image": "assets/gold/earrings_hd_11.jpg",
    "description": "Exquisite Drop Earrings crafted in BIS 916 Standard (22K). Available at SVJ Jewellers, Saraf Bazar, Solapur with transparent billing and live bullion rate."
  },
  {
    "id": "svj-gold-064",
    "title": "Bar Earrings",
    "category": "earrings",
    "carat": "18k",
    "metal": "Earrings | 18K Diamond & Designer Gold",
    "purity": "BIS 750 Standard",
    "weight": "Made to Order / Custom Weight",
    "certification": "BIS 750 HUID Hallmarked",
    "badge": "18K Gold",
    "priceEstimate": "Calculated by Live Gold Rate",
    "image": "assets/gold/earrings_hd_12.jpg",
    "description": "Exquisite Bar Earrings crafted in BIS 750 Standard (18K). Available at SVJ Jewellers, Saraf Bazar, Solapur with transparent billing and live bullion rate."
  },
  {
    "id": "svj-gold-015",
    "title": "Drop Earrings",
    "category": "earrings",
    "carat": "24k",
    "metal": "Earrings | 24K Pure Gold",
    "purity": "999 Pure Gold (99.9%)",
    "weight": "Made to Order / Custom Weight",
    "certification": "999 Pure Gold Certified",
    "badge": "24K Gold",
    "priceEstimate": "Calculated by Live Gold Rate",
    "image": "assets/gold/earrings_hd_13.jpg",
    "description": "Exquisite Drop Earrings crafted in 999 Pure Gold (99.9%) (24K). Available at SVJ Jewellers, Saraf Bazar, Solapur with transparent billing and live bullion rate."
  },
  {
    "id": "svj-gold-040",
    "title": "Cluster Earrings",
    "category": "earrings",
    "carat": "22k",
    "metal": "Earrings | 22K Hallmark Gold",
    "purity": "BIS 916 Standard",
    "weight": "Made to Order / Custom Weight",
    "certification": "BIS 916 HUID Hallmarked",
    "badge": "22K Gold",
    "priceEstimate": "Calculated by Live Gold Rate",
    "image": "assets/gold/earrings_hd_14.jpg",
    "description": "Exquisite Cluster Earrings crafted in BIS 916 Standard (22K). Available at SVJ Jewellers, Saraf Bazar, Solapur with transparent billing and live bullion rate."
  },
  {
    "id": "svj-gold-065",
    "title": "Tassel Earrings",
    "category": "earrings",
    "carat": "18k",
    "metal": "Earrings | 18K Diamond & Designer Gold",
    "purity": "BIS 750 Standard",
    "weight": "Made to Order / Custom Weight",
    "certification": "BIS 750 HUID Hallmarked",
    "badge": "18K Gold",
    "priceEstimate": "Calculated by Live Gold Rate",
    "image": "assets/gold/earrings_hd_15.jpg",
    "description": "Exquisite Tassel Earrings crafted in BIS 750 Standard (18K). Available at SVJ Jewellers, Saraf Bazar, Solapur with transparent billing and live bullion rate."
  },
  {
    "id": "svj-gold-016",
    "title": "Hoop Earrings",
    "category": "earrings",
    "carat": "24k",
    "metal": "Earrings | 24K Pure Gold",
    "purity": "999 Pure Gold (99.9%)",
    "weight": "Made to Order / Custom Weight",
    "certification": "999 Pure Gold Certified",
    "badge": "24K Gold",
    "priceEstimate": "Calculated by Live Gold Rate",
    "image": "assets/gold/earrings_hd_16.jpg",
    "description": "Exquisite Hoop Earrings crafted in 999 Pure Gold (99.9%) (24K). Available at SVJ Jewellers, Saraf Bazar, Solapur with transparent billing and live bullion rate."
  },
  {
    "id": "svj-gold-041",
    "title": "Floral Drop",
    "category": "earrings",
    "carat": "22k",
    "metal": "Earrings | 22K Hallmark Gold",
    "purity": "BIS 916 Standard",
    "weight": "Made to Order / Custom Weight",
    "certification": "BIS 916 HUID Hallmarked",
    "badge": "22K Gold",
    "priceEstimate": "Calculated by Live Gold Rate",
    "image": "assets/gold/earrings_hd_17.jpg",
    "description": "Exquisite Floral Drop crafted in BIS 916 Standard (22K). Available at SVJ Jewellers, Saraf Bazar, Solapur with transparent billing and live bullion rate."
  },
  {
    "id": "svj-gold-066",
    "title": "Star Earrings",
    "category": "earrings",
    "carat": "18k",
    "metal": "Earrings | 18K Diamond & Designer Gold",
    "purity": "BIS 750 Standard",
    "weight": "Made to Order / Custom Weight",
    "certification": "BIS 750 HUID Hallmarked",
    "badge": "18K Gold",
    "priceEstimate": "Calculated by Live Gold Rate",
    "image": "assets/gold/earrings_hd_18.jpg",
    "description": "Exquisite Star Earrings crafted in BIS 750 Standard (18K). Available at SVJ Jewellers, Saraf Bazar, Solapur with transparent billing and live bullion rate."
  },
  {
    "id": "svj-gold-017",
    "title": "Floral Earrings",
    "category": "earrings",
    "carat": "24k",
    "metal": "Earrings | 24K Pure Gold",
    "purity": "999 Pure Gold (99.9%)",
    "weight": "Made to Order / Custom Weight",
    "certification": "999 Pure Gold Certified",
    "badge": "24K Gold",
    "priceEstimate": "Calculated by Live Gold Rate",
    "image": "assets/gold/earrings_hd_19.jpg",
    "description": "Exquisite Floral Earrings crafted in 999 Pure Gold (99.9%) (24K). Available at SVJ Jewellers, Saraf Bazar, Solapur with transparent billing and live bullion rate."
  },
  {
    "id": "svj-gold-042",
    "title": "Tear Drop",
    "category": "earrings",
    "carat": "22k",
    "metal": "Earrings | 22K Hallmark Gold",
    "purity": "BIS 916 Standard",
    "weight": "Made to Order / Custom Weight",
    "certification": "BIS 916 HUID Hallmarked",
    "badge": "22K Gold",
    "priceEstimate": "Calculated by Live Gold Rate",
    "image": "assets/gold/earrings_hd_20.jpg",
    "description": "Exquisite Tear Drop crafted in BIS 916 Standard (22K). Available at SVJ Jewellers, Saraf Bazar, Solapur with transparent billing and live bullion rate."
  },
  {
    "id": "svj-gold-067",
    "title": "Heart Earrings",
    "category": "earrings",
    "carat": "18k",
    "metal": "Earrings | 18K Diamond & Designer Gold",
    "purity": "BIS 750 Standard",
    "weight": "Made to Order / Custom Weight",
    "certification": "BIS 750 HUID Hallmarked",
    "badge": "18K Gold",
    "priceEstimate": "Calculated by Live Gold Rate",
    "image": "assets/gold/earrings_hd_21.jpg",
    "description": "Exquisite Heart Earrings crafted in BIS 750 Standard (18K). Available at SVJ Jewellers, Saraf Bazar, Solapur with transparent billing and live bullion rate."
  },
  {
    "id": "svj-gold-ring-s01",
    "title": "Embossed Lakshmi 24K Signet Ring",
    "category": "rings",
    "carat": "24k",
    "metal": "Signet Ring | 24K Pure Gold",
    "purity": "999 Pure Gold (99.9%)",
    "weight": "14.20 g",
    "certification": "999 Pure Bullion Certified",
    "badge": "24K Pure Gold",
    "priceEstimate": "Calculated by Live Gold Rate",
    "image": "assets/gold/ring_18k_solitaire_diamond.jpg",
    "description": "Stately 24K solid gold signet ring featuring a raised high-relief Goddess Lakshmi medallion enclosed within a milgrain coin border and satin-finished shank."
  },
  {
    "id": "svj-gold-ring-s02",
    "title": "Bridal Lotus 22K Cocktail Ring",
    "category": "rings",
    "carat": "22k",
    "metal": "Cocktail Ring | 22K Hallmark Gold",
    "purity": "BIS 916 Standard (91.6%)",
    "weight": "11.60 g",
    "certification": "BIS 916 HUID Hallmarked",
    "badge": "22K Hallmark",
    "priceEstimate": "Calculated by Live Gold Rate",
    "image": "assets/gold/ring_22k_bridal_cocktail.jpg",
    "description": "Exquisite three-dimensional multi-layered 22K gold bridal flower ring crafted with antique repousse petals, center gold stamen, and an adjustable hallmarked band."
  },
  {
    "id": "svj-gold-ring-s03",
    "title": "Solitaire 18K Gold Diamond Engagement Ring",
    "category": "rings",
    "carat": "18k",
    "metal": "Solitaire Ring | 18K Hallmarked Gold",
    "purity": "BIS 750 Standard (75.0%)",
    "weight": "5.80 g",
    "diamondWeight": "1.02 ct Cushion Cut (VVS1 / E)",
    "certification": "BIS 750 & GIA Certified",
    "badge": "18K Diamond",
    "priceEstimate": "Calculated by Live Gold Rate",
    "image": "assets/gold/ring_24k_lakshmi_signet.jpg",
    "description": "Timeless luxury 18K yellow gold 6-prong solitaire engagement ring showcasing a certified 1.02 ct cushion-cut brilliant diamond with knife-edge polished comfort shank."
  },
  {
    "id": "svj-gold-021",
    "title": "Solid Gold Ring",
    "category": "rings",
    "carat": "24k",
    "metal": "Ring | 24K Pure Gold",
    "purity": "999 Pure Gold (99.9%)",
    "weight": "Made to Order / Custom Weight",
    "certification": "999 Pure Gold Certified",
    "badge": "24K Gold",
    "priceEstimate": "Calculated by Live Gold Rate",
    "image": "assets/gold/rings_hd_01.jpg",
    "description": "Exquisite Solid Gold Ring crafted in 999 Pure Gold (99.9%) (24K). Available at SVJ Jewellers, Saraf Bazar, Solapur with transparent billing and live bullion rate."
  },
  {
    "id": "svj-gold-046",
    "title": "Diamond Cut Ring",
    "category": "rings",
    "carat": "22k",
    "metal": "Ring | 22K Hallmark Gold",
    "purity": "BIS 916 Standard",
    "weight": "Made to Order / Custom Weight",
    "certification": "BIS 916 HUID Hallmarked",
    "badge": "22K Gold",
    "priceEstimate": "Calculated by Live Gold Rate",
    "image": "assets/gold/rings_hd_02.jpg",
    "description": "Exquisite Diamond Cut Ring crafted in BIS 916 Standard (22K). Available at SVJ Jewellers, Saraf Bazar, Solapur with transparent billing and live bullion rate."
  },
  {
    "id": "svj-gold-071",
    "title": "Thin Band Ring",
    "category": "rings",
    "carat": "18k",
    "metal": "Ring | 18K Diamond & Designer Gold",
    "purity": "BIS 750 Standard",
    "weight": "Made to Order / Custom Weight",
    "certification": "BIS 750 HUID Hallmarked",
    "badge": "18K Gold",
    "priceEstimate": "Calculated by Live Gold Rate",
    "image": "assets/gold/rings_hd_03.jpg",
    "description": "Exquisite Thin Band Ring crafted in BIS 750 Standard (18K). Available at SVJ Jewellers, Saraf Bazar, Solapur with transparent billing and live bullion rate."
  },
  {
    "id": "svj-gold-022",
    "title": "Signet Ring",
    "category": "rings",
    "carat": "24k",
    "metal": "Ring | 24K Pure Gold",
    "purity": "999 Pure Gold (99.9%)",
    "weight": "Made to Order / Custom Weight",
    "certification": "999 Pure Gold Certified",
    "badge": "24K Gold",
    "priceEstimate": "Calculated by Live Gold Rate",
    "image": "assets/gold/rings_hd_04.jpg",
    "description": "Exquisite Signet Ring crafted in 999 Pure Gold (99.9%) (24K). Available at SVJ Jewellers, Saraf Bazar, Solapur with transparent billing and live bullion rate."
  },
  {
    "id": "svj-gold-047",
    "title": "Solitaire Ring",
    "category": "rings",
    "carat": "22k",
    "metal": "Ring | 22K Hallmark Gold",
    "purity": "BIS 916 Standard",
    "weight": "Made to Order / Custom Weight",
    "certification": "BIS 916 HUID Hallmarked",
    "badge": "22K Gold",
    "priceEstimate": "Calculated by Live Gold Rate",
    "image": "assets/gold/rings_hd_05.jpg",
    "description": "Exquisite Solitaire Ring crafted in BIS 916 Standard (22K). Available at SVJ Jewellers, Saraf Bazar, Solapur with transparent billing and live bullion rate."
  },
  {
    "id": "svj-gold-072",
    "title": "Infinity Ring",
    "category": "rings",
    "carat": "18k",
    "metal": "Ring | 18K Diamond & Designer Gold",
    "purity": "BIS 750 Standard",
    "weight": "Made to Order / Custom Weight",
    "certification": "BIS 750 HUID Hallmarked",
    "badge": "18K Gold",
    "priceEstimate": "Calculated by Live Gold Rate",
    "image": "assets/gold/rings_hd_06.jpg",
    "description": "Exquisite Infinity Ring crafted in BIS 750 Standard (18K). Available at SVJ Jewellers, Saraf Bazar, Solapur with transparent billing and live bullion rate."
  },
  {
    "id": "svj-gold-023",
    "title": "Temple Ring",
    "category": "rings",
    "carat": "24k",
    "metal": "Ring | 24K Pure Gold",
    "purity": "999 Pure Gold (99.9%)",
    "weight": "Made to Order / Custom Weight",
    "certification": "999 Pure Gold Certified",
    "badge": "24K Gold",
    "priceEstimate": "Calculated by Live Gold Rate",
    "image": "assets/gold/rings_hd_07.jpg",
    "description": "Exquisite Temple Ring crafted in 999 Pure Gold (99.9%) (24K). Available at SVJ Jewellers, Saraf Bazar, Solapur with transparent billing and live bullion rate."
  },
  {
    "id": "svj-gold-048",
    "title": "Floral Ring",
    "category": "rings",
    "carat": "22k",
    "metal": "Ring | 22K Hallmark Gold",
    "purity": "BIS 916 Standard",
    "weight": "Made to Order / Custom Weight",
    "certification": "BIS 916 HUID Hallmarked",
    "badge": "22K Gold",
    "priceEstimate": "Calculated by Live Gold Rate",
    "image": "assets/gold/rings_hd_08.jpg",
    "description": "Exquisite Floral Ring crafted in BIS 916 Standard (22K). Available at SVJ Jewellers, Saraf Bazar, Solapur with transparent billing and live bullion rate."
  },
  {
    "id": "svj-gold-073",
    "title": "Heart Ring",
    "category": "rings",
    "carat": "18k",
    "metal": "Ring | 18K Diamond & Designer Gold",
    "purity": "BIS 750 Standard",
    "weight": "Made to Order / Custom Weight",
    "certification": "BIS 750 HUID Hallmarked",
    "badge": "18K Gold",
    "priceEstimate": "Calculated by Live Gold Rate",
    "image": "assets/gold/rings_hd_09.jpg",
    "description": "Exquisite Heart Ring crafted in BIS 750 Standard (18K). Available at SVJ Jewellers, Saraf Bazar, Solapur with transparent billing and live bullion rate."
  },
  {
    "id": "svj-gold-024",
    "title": "Flower Ring",
    "category": "rings",
    "carat": "24k",
    "metal": "Ring | 24K Pure Gold",
    "purity": "999 Pure Gold (99.9%)",
    "weight": "Made to Order / Custom Weight",
    "certification": "999 Pure Gold Certified",
    "badge": "24K Gold",
    "priceEstimate": "Calculated by Live Gold Rate",
    "image": "assets/gold/rings_hd_10.jpg",
    "description": "Exquisite Flower Ring crafted in 999 Pure Gold (99.9%) (24K). Available at SVJ Jewellers, Saraf Bazar, Solapur with transparent billing and live bullion rate."
  },
  {
    "id": "svj-gold-049",
    "title": "Leaf Ring",
    "category": "rings",
    "carat": "22k",
    "metal": "Ring | 22K Hallmark Gold",
    "purity": "BIS 916 Standard",
    "weight": "Made to Order / Custom Weight",
    "certification": "BIS 916 HUID Hallmarked",
    "badge": "22K Gold",
    "priceEstimate": "Calculated by Live Gold Rate",
    "image": "assets/gold/rings_hd_11.jpg",
    "description": "Exquisite Leaf Ring crafted in BIS 916 Standard (22K). Available at SVJ Jewellers, Saraf Bazar, Solapur with transparent billing and live bullion rate."
  },
  {
    "id": "svj-gold-074",
    "title": "Zircon Ring",
    "category": "rings",
    "carat": "18k",
    "metal": "Ring | 18K Diamond & Designer Gold",
    "purity": "BIS 750 Standard",
    "weight": "Made to Order / Custom Weight",
    "certification": "BIS 750 HUID Hallmarked",
    "badge": "18K Gold",
    "priceEstimate": "Calculated by Live Gold Rate",
    "image": "assets/gold/rings_hd_12.jpg",
    "description": "Exquisite Zircon Ring crafted in BIS 750 Standard (18K). Available at SVJ Jewellers, Saraf Bazar, Solapur with transparent billing and live bullion rate."
  },
  {
    "id": "svj-gold-025",
    "title": "Royal Coin Ring",
    "category": "rings",
    "carat": "24k",
    "metal": "Ring | 24K Pure Gold",
    "purity": "999 Pure Gold (99.9%)",
    "weight": "Made to Order / Custom Weight",
    "certification": "999 Pure Gold Certified",
    "badge": "24K Gold",
    "priceEstimate": "Calculated by Live Gold Rate",
    "image": "assets/gold/rings_hd_13.jpg",
    "description": "Exquisite Royal Coin Ring crafted in 999 Pure Gold (99.9%) (24K). Available at SVJ Jewellers, Saraf Bazar, Solapur with transparent billing and live bullion rate."
  },
  {
    "id": "svj-gold-050",
    "title": "Pearl Ring",
    "category": "rings",
    "carat": "22k",
    "metal": "Ring | 22K Hallmark Gold",
    "purity": "BIS 916 Standard",
    "weight": "Made to Order / Custom Weight",
    "certification": "BIS 916 HUID Hallmarked",
    "badge": "22K Gold",
    "priceEstimate": "Calculated by Live Gold Rate",
    "image": "assets/gold/rings_hd_14.jpg",
    "description": "Exquisite Pearl Ring crafted in BIS 916 Standard (22K). Available at SVJ Jewellers, Saraf Bazar, Solapur with transparent billing and live bullion rate."
  },
  {
    "id": "svj-gold-075",
    "title": "Designer Ring",
    "category": "rings",
    "carat": "18k",
    "metal": "Ring | 18K Diamond & Designer Gold",
    "purity": "BIS 750 Standard",
    "weight": "Made to Order / Custom Weight",
    "certification": "BIS 750 HUID Hallmarked",
    "badge": "18K Gold",
    "priceEstimate": "Calculated by Live Gold Rate",
    "image": "assets/gold/rings_hd_15.jpg",
    "description": "Exquisite Designer Ring crafted in BIS 750 Standard (18K). Available at SVJ Jewellers, Saraf Bazar, Solapur with transparent billing and live bullion rate."
  },
  {
    "id": "svj-gold-ring-ext01",
    "title": "Ganesha Embossed 24K Signet Ring",
    "category": "rings",
    "carat": "24k",
    "metal": "Signet Ring | 24K Pure Gold",
    "purity": "999 Pure Gold (99.9%)",
    "weight": "15.50 g",
    "certification": "999 Pure Bullion Certified",
    "badge": "24K Pure Gold",
    "priceEstimate": "Calculated by Live Gold Rate",
    "image": "assets/gold/rings_hd_16.jpg",
    "description": "Heirloom 24K pure gold signet ring hand-stamped with Lord Ganesha surrounded by a beaded sunburst frame and satin-finished tapered band."
  },
  {
    "id": "svj-gold-ring-ext04",
    "title": "Navratna Royal Heritage 22K Ring",
    "category": "rings",
    "carat": "22k",
    "metal": "Navratna Ring | 22K Hallmark Gold",
    "purity": "BIS 916 Standard (91.6%)",
    "weight": "11.20 g",
    "certification": "BIS 916 HUID Hallmarked",
    "badge": "22K Hallmark",
    "priceEstimate": "Calculated by Live Gold Rate",
    "image": "assets/gold/rings_hd_17.jpg",
    "description": "Auspicious 22K yellow gold Navratna ring featuring the nine planetary gemstones arranged in sacred planetary alignment with floral prong settings."
  },
  {
    "id": "svj-gold-ring-ext08",
    "title": "Diamond Princess Cut 18K Solitaire",
    "category": "rings",
    "carat": "18k",
    "metal": "Diamond Ring | 18K Gold",
    "purity": "BIS 750 Standard (75.0%)",
    "weight": "5.60 g",
    "diamondWeight": "1.15 ct Princess Cut",
    "certification": "BIS 750 & GIA Certified",
    "badge": "18K Diamond",
    "priceEstimate": "Calculated by Live Gold Rate",
    "image": "assets/gold/rings_hd_18.jpg",
    "description": "Geometric 18K yellow gold four-prong engagement ring featuring an exceptional 1.15 carat princess-cut diamond of fire and brilliance."
  },
  {
    "id": "svj-gold-ring-ext02",
    "title": "Royal Om 24K Bullion Band",
    "category": "rings",
    "carat": "24k",
    "metal": "Band | 24K Pure Gold",
    "purity": "999 Pure Gold (99.9%)",
    "weight": "12.80 g",
    "certification": "999 Pure Bullion Certified",
    "badge": "24K Pure Gold",
    "priceEstimate": "Calculated by Live Gold Rate",
    "image": "assets/gold/rings_hd_19.jpg",
    "description": "Solid 24K gold devotional band with deeply carved sacred Om symbol and micro-milgrain edges in heavy bullion weight."
  },
  {
    "id": "svj-gold-ring-ext06",
    "title": "Temple Coin Lakshmi 22K Ring",
    "category": "rings",
    "carat": "22k",
    "metal": "Coin Ring | 22K Hallmark Gold",
    "purity": "BIS 916 Standard (91.6%)",
    "weight": "9.80 g",
    "certification": "BIS 916 HUID Hallmarked",
    "badge": "22K Hallmark",
    "priceEstimate": "Calculated by Live Gold Rate",
    "image": "assets/gold/rings_hd_21.jpg",
    "description": "Traditional 22K gold coin ring showcasing Goddess Lakshmi seated on a lotus with an ornate rope border."
  },
  {
    "id": "svj-gold-ring-ext09",
    "title": "Pavé Diamond Infinity 18K Band",
    "category": "rings",
    "carat": "18k",
    "metal": "Eternity Band | 18K Gold",
    "purity": "BIS 750 Standard (75.0%)",
    "weight": "4.80 g",
    "diamondWeight": "0.65 ct Round Brilliant",
    "certification": "BIS 750 & IGI Certified",
    "badge": "18K Diamond",
    "priceEstimate": "Calculated by Live Gold Rate",
    "image": "assets/gold/rings_hd_22.jpg",
    "description": "Continuous eternity ring in 18K hallmarked gold set with micro-pavé sparkling natural diamonds symbolizing everlasting devotion."
  },
  {
    "id": "svj-gold-ring-ext03",
    "title": "Solid 24K Hand-Carved Men's Band",
    "category": "rings",
    "carat": "24k",
    "metal": "Men's Band | 24K Pure Gold",
    "purity": "999 Pure Gold (99.9%)",
    "weight": "16.20 g",
    "certification": "999 Pure Bullion Certified",
    "badge": "24K Pure Gold",
    "priceEstimate": "Calculated by Live Gold Rate",
    "image": "assets/gold/rings_hd_23.jpg",
    "description": "Robust 24K pure gold comfort-fit band showcasing traditional hand-chiseled chevron patterns with dual matte and mirror luster."
  },
  {
    "id": "svj-silver-chains-01",
    "title": "925 Sterling Silver Rope Twist Chain",
    "category": "silver",
    "metal": "92.5 Fine Sterling Silver",
    "purity": "BIS 925 Hallmark Silver",
    "weight": "28.5 g",
    "certification": "SVJ 925 Hallmark Certified",
    "badge": "925 Silver",
    "priceEstimate": "Calculated by Live Silver Rate",
    "image": "assets/silver/silver_chains_01.jpg",
    "description": "925 Sterling Silver Rope Twist Chain crafted in BIS 925 hallmarked fine sterling silver (approx. weight 28.5 g) with precision link texture and mirror polish. Available at SVJ Jewellers, Saraf Bazar, Solapur."
  },
  {
    "id": "svj-silver-chains-02",
    "title": "Pure Silver Venetian Box Link Chain",
    "category": "silver",
    "metal": "92.5 Fine Sterling Silver",
    "purity": "BIS 925 Hallmark Silver",
    "weight": "22.0 g",
    "certification": "SVJ 925 Hallmark Certified",
    "badge": "925 Silver",
    "priceEstimate": "Calculated by Live Silver Rate",
    "image": "assets/silver/silver_chains_02.jpg",
    "description": "Pure Silver Venetian Box Link Chain crafted in BIS 925 hallmarked fine sterling silver (approx. weight 22.0 g) with precision link texture and mirror polish. Available at SVJ Jewellers, Saraf Bazar, Solapur."
  },
  {
    "id": "svj-silver-chains-03",
    "title": "Solid 925 Silver Curb Cuban Chain",
    "category": "silver",
    "metal": "92.5 Fine Sterling Silver",
    "purity": "BIS 925 Hallmark Silver",
    "weight": "42.0 g",
    "certification": "SVJ 925 Hallmark Certified",
    "badge": "925 Silver",
    "priceEstimate": "Calculated by Live Silver Rate",
    "image": "assets/silver/silver_chains_03.jpg",
    "description": "Solid 925 Silver Curb Cuban Chain crafted in BIS 925 hallmarked fine sterling silver (approx. weight 42.0 g) with precision link texture and mirror polish. Available at SVJ Jewellers, Saraf Bazar, Solapur."
  },
  {
    "id": "svj-silver-chains-04",
    "title": "Italian Sterling Silver Figaro Chain",
    "category": "silver",
    "metal": "92.5 Fine Sterling Silver",
    "purity": "BIS 925 Hallmark Silver",
    "weight": "26.4 g",
    "certification": "SVJ 925 Hallmark Certified",
    "badge": "925 Silver",
    "priceEstimate": "Calculated by Live Silver Rate",
    "image": "assets/silver/silver_chains_04.jpg",
    "description": "Italian Sterling Silver Figaro Chain crafted in BIS 925 hallmarked fine sterling silver (approx. weight 26.4 g) with precision link texture and mirror polish. Available at SVJ Jewellers, Saraf Bazar, Solapur."
  },
  {
    "id": "svj-silver-chains-05",
    "title": "Sleek 925 Silver Round Snake Chain",
    "category": "silver",
    "metal": "92.5 Fine Sterling Silver",
    "purity": "BIS 925 Hallmark Silver",
    "weight": "19.8 g",
    "certification": "SVJ 925 Hallmark Certified",
    "badge": "925 Silver",
    "priceEstimate": "Calculated by Live Silver Rate",
    "image": "assets/silver/silver_chains_05.jpg",
    "description": "Sleek 925 Silver Round Snake Chain crafted in BIS 925 hallmarked fine sterling silver (approx. weight 19.8 g) with precision link texture and mirror polish. Available at SVJ Jewellers, Saraf Bazar, Solapur."
  },
  {
    "id": "svj-silver-chains-06",
    "title": "Handcrafted Silver Spiga Wheat Chain",
    "category": "silver",
    "metal": "92.5 Fine Sterling Silver",
    "purity": "BIS 925 Hallmark Silver",
    "weight": "31.2 g",
    "certification": "SVJ 925 Hallmark Certified",
    "badge": "925 Silver",
    "priceEstimate": "Calculated by Live Silver Rate",
    "image": "assets/silver/silver_chains_06.jpg",
    "description": "Handcrafted Silver Spiga Wheat Chain crafted in BIS 925 hallmarked fine sterling silver (approx. weight 31.2 g) with precision link texture and mirror polish. Available at SVJ Jewellers, Saraf Bazar, Solapur."
  },
  {
    "id": "svj-silver-chains-07",
    "title": "Antique Oxidized Silver Bismark Chain",
    "category": "silver",
    "metal": "92.5 Fine Sterling Silver",
    "purity": "BIS 925 Hallmark Silver",
    "weight": "36.0 g",
    "certification": "SVJ 925 Hallmark Certified",
    "badge": "925 Silver",
    "priceEstimate": "Calculated by Live Silver Rate",
    "image": "assets/silver/silver_chains_07.jpg",
    "description": "Antique Oxidized Silver Bismark Chain crafted in BIS 925 hallmarked fine sterling silver (approx. weight 36.0 g) with precision link texture and mirror polish. Available at SVJ Jewellers, Saraf Bazar, Solapur."
  },
  {
    "id": "svj-silver-earrings-01",
    "title": "925 Sterling Silver Filigree Drop Earrings",
    "category": "silver",
    "metal": "92.5 Fine Sterling Silver",
    "purity": "BIS 925 Hallmark Silver",
    "weight": "11.5 g",
    "certification": "SVJ 925 Hallmark Certified",
    "badge": "925 Silver",
    "priceEstimate": "Calculated by Live Silver Rate",
    "image": "assets/silver/silver_earrings_01.jpg",
    "description": "925 Sterling Silver Filigree Drop Earrings crafted in BIS 925 hallmarked fine sterling silver (approx. weight 11.5 g) with crisp detailing and radiant finish. Available at SVJ Jewellers, Saraf Bazar, Solapur."
  },
  {
    "id": "svj-silver-earrings-02",
    "title": "Oxidized Silver Temple Jhumka Earrings",
    "category": "silver",
    "metal": "92.5 Fine Sterling Silver",
    "purity": "BIS 925 Hallmark Silver",
    "weight": "16.2 g",
    "certification": "SVJ 925 Hallmark Certified",
    "badge": "925 Silver",
    "priceEstimate": "Calculated by Live Silver Rate",
    "image": "assets/silver/silver_earrings_02.jpg",
    "description": "Oxidized Silver Temple Jhumka Earrings crafted in BIS 925 hallmarked fine sterling silver (approx. weight 16.2 g) with crisp detailing and radiant finish. Available at SVJ Jewellers, Saraf Bazar, Solapur."
  },
  {
    "id": "svj-silver-earrings-03",
    "title": "Pure Silver Lotus Studs & Drops",
    "category": "silver",
    "metal": "92.5 Fine Sterling Silver",
    "purity": "BIS 925 Hallmark Silver",
    "weight": "8.4 g",
    "certification": "SVJ 925 Hallmark Certified",
    "badge": "925 Silver",
    "priceEstimate": "Calculated by Live Silver Rate",
    "image": "assets/silver/silver_earrings_03.jpg",
    "description": "Pure Silver Lotus Studs & Drops crafted in BIS 925 hallmarked fine sterling silver (approx. weight 8.4 g) with crisp detailing and radiant finish. Available at SVJ Jewellers, Saraf Bazar, Solapur."
  },
  {
    "id": "svj-silver-earrings-04",
    "title": "Artisan 925 Silver Hoop Danglers",
    "category": "silver",
    "metal": "92.5 Fine Sterling Silver",
    "purity": "BIS 925 Hallmark Silver",
    "weight": "12.8 g",
    "certification": "SVJ 925 Hallmark Certified",
    "badge": "925 Silver",
    "priceEstimate": "Calculated by Live Silver Rate",
    "image": "assets/silver/silver_earrings_04.jpg",
    "description": "Artisan 925 Silver Hoop Danglers crafted in BIS 925 hallmarked fine sterling silver (approx. weight 12.8 g) with crisp detailing and radiant finish. Available at SVJ Jewellers, Saraf Bazar, Solapur."
  },
  {
    "id": "svj-silver-earrings-05",
    "title": "Antique Silver Chandbali Earrings",
    "category": "silver",
    "metal": "92.5 Fine Sterling Silver",
    "purity": "BIS 925 Hallmark Silver",
    "weight": "18.5 g",
    "certification": "SVJ 925 Hallmark Certified",
    "badge": "925 Silver",
    "priceEstimate": "Calculated by Live Silver Rate",
    "image": "assets/silver/silver_earrings_05.jpg",
    "description": "Antique Silver Chandbali Earrings crafted in BIS 925 hallmarked fine sterling silver (approx. weight 18.5 g) with crisp detailing and radiant finish. Available at SVJ Jewellers, Saraf Bazar, Solapur."
  },
  {
    "id": "svj-silver-earrings-06",
    "title": "Handcrafted Silver Tribal Bell Jhumkas",
    "category": "silver",
    "metal": "92.5 Fine Sterling Silver",
    "purity": "BIS 925 Hallmark Silver",
    "weight": "15.0 g",
    "certification": "SVJ 925 Hallmark Certified",
    "badge": "925 Silver",
    "priceEstimate": "Calculated by Live Silver Rate",
    "image": "assets/silver/silver_earrings_06.jpg",
    "description": "Handcrafted Silver Tribal Bell Jhumkas crafted in BIS 925 hallmarked fine sterling silver (approx. weight 15.0 g) with crisp detailing and radiant finish. Available at SVJ Jewellers, Saraf Bazar, Solapur."
  },
  {
    "id": "svj-silver-earrings-07",
    "title": "Minimalist 925 Silver Teardrop Earrings",
    "category": "silver",
    "metal": "92.5 Fine Sterling Silver",
    "purity": "BIS 925 Hallmark Silver",
    "weight": "7.6 g",
    "certification": "SVJ 925 Hallmark Certified",
    "badge": "925 Silver",
    "priceEstimate": "Calculated by Live Silver Rate",
    "image": "assets/silver/silver_earrings_07.jpg",
    "description": "Minimalist 925 Silver Teardrop Earrings crafted in BIS 925 hallmarked fine sterling silver (approx. weight 7.6 g) with crisp detailing and radiant finish. Available at SVJ Jewellers, Saraf Bazar, Solapur."
  },
  {
    "id": "svj-silver-earrings-08",
    "title": "Royal Oxidized Silver Peacock Studs",
    "category": "silver",
    "metal": "92.5 Fine Sterling Silver",
    "purity": "BIS 925 Hallmark Silver",
    "weight": "10.4 g",
    "certification": "SVJ 925 Hallmark Certified",
    "badge": "925 Silver",
    "priceEstimate": "Calculated by Live Silver Rate",
    "image": "assets/silver/silver_earrings_08.jpg",
    "description": "Royal Oxidized Silver Peacock Studs crafted in BIS 925 hallmarked fine sterling silver (approx. weight 10.4 g) with crisp detailing and radiant finish. Available at SVJ Jewellers, Saraf Bazar, Solapur."
  },
  {
    "id": "svj-silver-earrings-10",
    "title": "Traditional Silver Ghungroo Jhumkis",
    "category": "silver",
    "metal": "92.5 Fine Sterling Silver",
    "purity": "BIS 925 Hallmark Silver",
    "weight": "17.0 g",
    "certification": "SVJ 925 Hallmark Certified",
    "badge": "925 Silver",
    "priceEstimate": "Calculated by Live Silver Rate",
    "image": "assets/silver/silver_earrings_10.jpg",
    "description": "Traditional Silver Ghungroo Jhumkis crafted in BIS 925 hallmarked fine sterling silver (approx. weight 17.0 g) with crisp detailing and radiant finish. Available at SVJ Jewellers, Saraf Bazar, Solapur."
  },
  {
    "id": "svj-silver-earrings-11",
    "title": "Silver Beaded Lattice Drop Earrings",
    "category": "silver",
    "metal": "92.5 Fine Sterling Silver",
    "purity": "BIS 925 Hallmark Silver",
    "weight": "11.8 g",
    "certification": "SVJ 925 Hallmark Certified",
    "badge": "925 Silver",
    "priceEstimate": "Calculated by Live Silver Rate",
    "image": "assets/silver/silver_earrings_11.jpg",
    "description": "Silver Beaded Lattice Drop Earrings crafted in BIS 925 hallmarked fine sterling silver (approx. weight 11.8 g) with crisp detailing and radiant finish. Available at SVJ Jewellers, Saraf Bazar, Solapur."
  },
  {
    "id": "svj-silver-earrings-12",
    "title": "Classic 925 Silver Floral Stud Earrings",
    "category": "silver",
    "metal": "92.5 Fine Sterling Silver",
    "purity": "BIS 925 Hallmark Silver",
    "weight": "6.9 g",
    "certification": "SVJ 925 Hallmark Certified",
    "badge": "925 Silver",
    "priceEstimate": "Calculated by Live Silver Rate",
    "image": "assets/silver/silver_earrings_12.jpg",
    "description": "Classic 925 Silver Floral Stud Earrings crafted in BIS 925 hallmarked fine sterling silver (approx. weight 6.9 g) with crisp detailing and radiant finish. Available at SVJ Jewellers, Saraf Bazar, Solapur."
  },
  {
    "id": "svj-silver-necklaces-01",
    "title": "925 Sterling Silver Heritage Pendant Necklace",
    "category": "silver",
    "metal": "92.5 Fine Sterling Silver",
    "purity": "BIS 925 Hallmark Silver",
    "weight": "22.4 g",
    "certification": "SVJ 925 Hallmark Certified",
    "badge": "925 Silver",
    "priceEstimate": "Calculated by Live Silver Rate",
    "image": "assets/silver/silver_necklaces_01.jpg",
    "description": "925 Sterling Silver Heritage Pendant Necklace crafted in BIS 925 hallmarked fine sterling silver (approx. weight 22.4 g) with crisp detailing and radiant finish. Available at SVJ Jewellers, Saraf Bazar, Solapur."
  },
  {
    "id": "svj-silver-necklaces-02",
    "title": "Oxidized Silver Tribal Hasli Collar",
    "category": "silver",
    "metal": "92.5 Fine Sterling Silver",
    "purity": "BIS 925 Hallmark Silver",
    "weight": "48.0 g",
    "certification": "SVJ 925 Hallmark Certified",
    "badge": "925 Silver",
    "priceEstimate": "Calculated by Live Silver Rate",
    "image": "assets/silver/silver_necklaces_02.jpg",
    "description": "Oxidized Silver Tribal Hasli Collar crafted in BIS 925 hallmarked fine sterling silver (approx. weight 48.0 g) with crisp detailing and radiant finish. Available at SVJ Jewellers, Saraf Bazar, Solapur."
  },
  {
    "id": "svj-silver-necklaces-03",
    "title": "Pure Silver Filigree Medallion Chain",
    "category": "silver",
    "metal": "92.5 Fine Sterling Silver",
    "purity": "BIS 925 Hallmark Silver",
    "weight": "19.5 g",
    "certification": "SVJ 925 Hallmark Certified",
    "badge": "925 Silver",
    "priceEstimate": "Calculated by Live Silver Rate",
    "image": "assets/silver/silver_necklaces_03.jpg",
    "description": "Pure Silver Filigree Medallion Chain crafted in BIS 925 hallmarked fine sterling silver (approx. weight 19.5 g) with crisp detailing and radiant finish. Available at SVJ Jewellers, Saraf Bazar, Solapur."
  },
  {
    "id": "svj-silver-necklaces-04",
    "title": "Artisan 925 Silver Statement Choker",
    "category": "silver",
    "metal": "92.5 Fine Sterling Silver",
    "purity": "BIS 925 Hallmark Silver",
    "weight": "42.0 g",
    "certification": "SVJ 925 Hallmark Certified",
    "badge": "925 Silver",
    "priceEstimate": "Calculated by Live Silver Rate",
    "image": "assets/silver/silver_necklaces_04.jpg",
    "description": "Artisan 925 Silver Statement Choker crafted in BIS 925 hallmarked fine sterling silver (approx. weight 42.0 g) with crisp detailing and radiant finish. Available at SVJ Jewellers, Saraf Bazar, Solapur."
  },
  {
    "id": "svj-silver-necklaces-05",
    "title": "Antique Silver Beaded Haram Necklace",
    "category": "silver",
    "metal": "92.5 Fine Sterling Silver",
    "purity": "BIS 925 Hallmark Silver",
    "weight": "54.5 g",
    "certification": "SVJ 925 Hallmark Certified",
    "badge": "925 Silver",
    "priceEstimate": "Calculated by Live Silver Rate",
    "image": "assets/silver/silver_necklaces_05.jpg",
    "description": "Antique Silver Beaded Haram Necklace crafted in BIS 925 hallmarked fine sterling silver (approx. weight 54.5 g) with crisp detailing and radiant finish. Available at SVJ Jewellers, Saraf Bazar, Solapur."
  },
  {
    "id": "svj-silver-necklaces-06",
    "title": "Handcrafted Silver Lotus Pendant Set",
    "category": "silver",
    "metal": "92.5 Fine Sterling Silver",
    "purity": "BIS 925 Hallmark Silver",
    "weight": "18.2 g",
    "certification": "SVJ 925 Hallmark Certified",
    "badge": "925 Silver",
    "priceEstimate": "Calculated by Live Silver Rate",
    "image": "assets/silver/silver_necklaces_06.jpg",
    "description": "Handcrafted Silver Lotus Pendant Set crafted in BIS 925 hallmarked fine sterling silver (approx. weight 18.2 g) with crisp detailing and radiant finish. Available at SVJ Jewellers, Saraf Bazar, Solapur."
  },
  {
    "id": "svj-silver-necklaces-07",
    "title": "Classic 925 Silver Box Chain Necklace",
    "category": "silver",
    "metal": "92.5 Fine Sterling Silver",
    "purity": "BIS 925 Hallmark Silver",
    "weight": "16.0 g",
    "certification": "SVJ 925 Hallmark Certified",
    "badge": "925 Silver",
    "priceEstimate": "Calculated by Live Silver Rate",
    "image": "assets/silver/silver_necklaces_07.jpg",
    "description": "Classic 925 Silver Box Chain Necklace crafted in BIS 925 hallmarked fine sterling silver (approx. weight 16.0 g) with crisp detailing and radiant finish. Available at SVJ Jewellers, Saraf Bazar, Solapur."
  },
  {
    "id": "svj-silver-necklaces-08",
    "title": "Royal Oxidized Silver Coin Mala",
    "category": "silver",
    "metal": "92.5 Fine Sterling Silver",
    "purity": "BIS 925 Hallmark Silver",
    "weight": "62.0 g",
    "certification": "SVJ 925 Hallmark Certified",
    "badge": "925 Silver",
    "priceEstimate": "Calculated by Live Silver Rate",
    "image": "assets/silver/silver_necklaces_08.jpg",
    "description": "Royal Oxidized Silver Coin Mala crafted in BIS 925 hallmarked fine sterling silver (approx. weight 62.0 g) with crisp detailing and radiant finish. Available at SVJ Jewellers, Saraf Bazar, Solapur."
  },
  {
    "id": "svj-silver-necklaces-09",
    "title": "Sterling Silver Geometric Bar Necklace",
    "category": "silver",
    "metal": "92.5 Fine Sterling Silver",
    "purity": "BIS 925 Hallmark Silver",
    "weight": "14.8 g",
    "certification": "SVJ 925 Hallmark Certified",
    "badge": "925 Silver",
    "priceEstimate": "Calculated by Live Silver Rate",
    "image": "assets/silver/silver_necklaces_09.jpg",
    "description": "Sterling Silver Geometric Bar Necklace crafted in BIS 925 hallmarked fine sterling silver (approx. weight 14.8 g) with crisp detailing and radiant finish. Available at SVJ Jewellers, Saraf Bazar, Solapur."
  },
  {
    "id": "svj-silver-necklaces-10",
    "title": "Traditional Silver Temple Torque",
    "category": "silver",
    "metal": "92.5 Fine Sterling Silver",
    "purity": "BIS 925 Hallmark Silver",
    "weight": "51.0 g",
    "certification": "SVJ 925 Hallmark Certified",
    "badge": "925 Silver",
    "priceEstimate": "Calculated by Live Silver Rate",
    "image": "assets/silver/silver_necklaces_10.jpg",
    "description": "Traditional Silver Temple Torque crafted in BIS 925 hallmarked fine sterling silver (approx. weight 51.0 g) with crisp detailing and radiant finish. Available at SVJ Jewellers, Saraf Bazar, Solapur."
  },
  {
    "id": "svj-silver-necklaces-11",
    "title": "925 Silver Twisted Rope Chain",
    "category": "silver",
    "metal": "92.5 Fine Sterling Silver",
    "purity": "BIS 925 Hallmark Silver",
    "weight": "21.0 g",
    "certification": "SVJ 925 Hallmark Certified",
    "badge": "925 Silver",
    "priceEstimate": "Calculated by Live Silver Rate",
    "image": "assets/silver/silver_necklaces_11.jpg",
    "description": "925 Silver Twisted Rope Chain crafted in BIS 925 hallmarked fine sterling silver (approx. weight 21.0 g) with crisp detailing and radiant finish. Available at SVJ Jewellers, Saraf Bazar, Solapur."
  },
  {
    "id": "svj-silver-necklaces-12",
    "title": "Delicate Silver Crescent Charm Necklace",
    "category": "silver",
    "metal": "92.5 Fine Sterling Silver",
    "purity": "BIS 925 Hallmark Silver",
    "weight": "12.5 g",
    "certification": "SVJ 925 Hallmark Certified",
    "badge": "925 Silver",
    "priceEstimate": "Calculated by Live Silver Rate",
    "image": "assets/silver/silver_necklaces_12.jpg",
    "description": "Delicate Silver Crescent Charm Necklace crafted in BIS 925 hallmarked fine sterling silver (approx. weight 12.5 g) with crisp detailing and radiant finish. Available at SVJ Jewellers, Saraf Bazar, Solapur."
  },
  {
    "id": "svj-silver-rings-02",
    "title": "Oxidized Silver Floral Statement Ring",
    "category": "silver",
    "metal": "92.5 Fine Sterling Silver",
    "purity": "BIS 925 Hallmark Silver",
    "weight": "8.2 g",
    "certification": "SVJ 925 Hallmark Certified",
    "badge": "925 Silver",
    "priceEstimate": "Calculated by Live Silver Rate",
    "image": "assets/silver/silver_rings_02.jpg",
    "description": "Oxidized Silver Floral Statement Ring crafted in BIS 925 hallmarked fine sterling silver (approx. weight 8.2 g) with crisp detailing and radiant finish. Available at SVJ Jewellers, Saraf Bazar, Solapur."
  },
  {
    "id": "svj-silver-rings-03",
    "title": "Pure Silver Solitaire Cushion Ring",
    "category": "silver",
    "metal": "92.5 Fine Sterling Silver",
    "purity": "BIS 925 Hallmark Silver",
    "weight": "5.4 g",
    "certification": "SVJ 925 Hallmark Certified",
    "badge": "925 Silver",
    "priceEstimate": "Calculated by Live Silver Rate",
    "image": "assets/silver/silver_rings_03.jpg",
    "description": "Pure Silver Solitaire Cushion Ring crafted in BIS 925 hallmarked fine sterling silver (approx. weight 5.4 g) with crisp detailing and radiant finish. Available at SVJ Jewellers, Saraf Bazar, Solapur."
  },
  {
    "id": "svj-silver-rings-05",
    "title": "Antique Silver Gemstone Cocktail Ring",
    "category": "silver",
    "metal": "92.5 Fine Sterling Silver",
    "purity": "BIS 925 Hallmark Silver",
    "weight": "11.2 g",
    "certification": "SVJ 925 Hallmark Certified",
    "badge": "925 Silver",
    "priceEstimate": "Calculated by Live Silver Rate",
    "image": "assets/silver/silver_rings_05.jpg",
    "description": "Antique Silver Gemstone Cocktail Ring crafted in BIS 925 hallmarked fine sterling silver (approx. weight 11.2 g) with crisp detailing and radiant finish. Available at SVJ Jewellers, Saraf Bazar, Solapur."
  },
  {
    "id": "svj-silver-rings-06",
    "title": "Handcrafted Silver Braided Eternity Band",
    "category": "silver",
    "metal": "92.5 Fine Sterling Silver",
    "purity": "BIS 925 Hallmark Silver",
    "weight": "5.9 g",
    "certification": "SVJ 925 Hallmark Certified",
    "badge": "925 Silver",
    "priceEstimate": "Calculated by Live Silver Rate",
    "image": "assets/silver/silver_rings_06.jpg",
    "description": "Handcrafted Silver Braided Eternity Band crafted in BIS 925 hallmarked fine sterling silver (approx. weight 5.9 g) with crisp detailing and radiant finish. Available at SVJ Jewellers, Saraf Bazar, Solapur."
  },
  {
    "id": "svj-silver-rings-08",
    "title": "Royal Oxidized Silver Lotus Finger Ring",
    "category": "silver",
    "metal": "92.5 Fine Sterling Silver",
    "purity": "BIS 925 Hallmark Silver",
    "weight": "9.1 g",
    "certification": "SVJ 925 Hallmark Certified",
    "badge": "925 Silver",
    "priceEstimate": "Calculated by Live Silver Rate",
    "image": "assets/silver/silver_rings_08.jpg",
    "description": "Royal Oxidized Silver Lotus Finger Ring crafted in BIS 925 hallmarked fine sterling silver (approx. weight 9.1 g) with crisp detailing and radiant finish. Available at SVJ Jewellers, Saraf Bazar, Solapur."
  },
  {
    "id": "svj-silver-rings-09",
    "title": "Sterling Silver Twisted Rope Ring",
    "category": "silver",
    "metal": "92.5 Fine Sterling Silver",
    "purity": "BIS 925 Hallmark Silver",
    "weight": "4.8 g",
    "certification": "SVJ 925 Hallmark Certified",
    "badge": "925 Silver",
    "priceEstimate": "Calculated by Live Silver Rate",
    "image": "assets/silver/silver_rings_09.jpg",
    "description": "Sterling Silver Twisted Rope Ring crafted in BIS 925 hallmarked fine sterling silver (approx. weight 4.8 g) with crisp detailing and radiant finish. Available at SVJ Jewellers, Saraf Bazar, Solapur."
  },
  {
    "id": "svj-silver-rings-10",
    "title": "Traditional Silver Temple Crest Ring",
    "category": "silver",
    "metal": "92.5 Fine Sterling Silver",
    "purity": "BIS 925 Hallmark Silver",
    "weight": "10.5 g",
    "certification": "SVJ 925 Hallmark Certified",
    "badge": "925 Silver",
    "priceEstimate": "Calculated by Live Silver Rate",
    "image": "assets/silver/silver_rings_10.jpg",
    "description": "Traditional Silver Temple Crest Ring crafted in BIS 925 hallmarked fine sterling silver (approx. weight 10.5 g) with crisp detailing and radiant finish. Available at SVJ Jewellers, Saraf Bazar, Solapur."
  },
  {
    "id": "svj-silver-rings-11",
    "title": "925 Silver Minimalist Bezel Ring",
    "category": "silver",
    "metal": "92.5 Fine Sterling Silver",
    "purity": "BIS 925 Hallmark Silver",
    "weight": "5.2 g",
    "certification": "SVJ 925 Hallmark Certified",
    "badge": "925 Silver",
    "priceEstimate": "Calculated by Live Silver Rate",
    "image": "assets/silver/silver_rings_11.jpg",
    "description": "925 Silver Minimalist Bezel Ring crafted in BIS 925 hallmarked fine sterling silver (approx. weight 5.2 g) with crisp detailing and radiant finish. Available at SVJ Jewellers, Saraf Bazar, Solapur."
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
    "id": "svj-silver-092",
    "title": "Lotus Pooja Thali & Deepak Set (6-Piece) - 350g",
    "category": "silver",
    "metal": "92.5 Fine Sterling Silver",
    "purity": "BIS 925 Hallmark Silver",
    "weight": "350 g",
    "size": "Complete 6-Piece Thali Set",
    "certification": "SVJ 925 Hallmark Certified",
    "badge": "New Arrival",
    "priceEstimate": "Calculated by Live Silver Rate",
    "image": "assets/silver/silver_092.jpg",
    "description": "Exquisite 6-piece pure 925 silver Pooja Thali set (approx. weight 350 g). Includes a mirror-polish round thali, central carved lotus-bud stand, two covered kumkum-haldi dibbis, and two pedestal deepak diyas. Ideal for daily worship, festivals, wedding gifting, and griha pravesh."
  },
  {
    "id": "svj-silver-093",
    "title": "Embossed Rim Lotus Pooja Thali Set (6-Piece) - 330g",
    "category": "silver",
    "metal": "92.5 Fine Sterling Silver",
    "purity": "BIS 925 Hallmark Silver",
    "weight": "330 g",
    "size": "Complete 6-Piece Thali Set",
    "certification": "SVJ 925 Hallmark Certified",
    "badge": "Festive Special",
    "priceEstimate": "Calculated by Live Silver Rate",
    "image": "assets/silver/silver_093.jpg",
    "description": "Handcrafted 6-piece pure 925 silver Pooja Thali set (approx. weight 330 g) featuring an embossed designer rim plate, central carved lotus-bud centerpiece, two lidded kumkum containers, and two pedestal aarti diyas. Perfect for temple pooja, auspicious gifting, and festive rituals."
  }
];

// Helper to render products into grid
function renderProducts(category = "all") {
  const grid = document.getElementById("products-grid");
  if (!grid) return;

  const filtered = category === "all"
    ? SVJ_CATALOG
    : (["24k", "22k", "18k"].includes(category)
        ? SVJ_CATALOG.filter(item => item.carat === category)
        : SVJ_CATALOG.filter(item => item.category === category));

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 60px 20px;">
        <i class="fa-solid fa-gem" style="font-size: 2.8rem; color: #d4af37; margin-bottom: 16px; display: inline-block;"></i>
        <h3 style="font-size: 1.25rem; color: #f8fafc; margin-bottom: 8px;">Gold Collection Updating Soon</h3>
        <p style="font-size: 0.95rem; color: #94a3b8; max-width: 480px; margin: 0 auto 20px;">
          Our gold ornament catalog is currently being updated with new designs. In the meantime, explore our Pure Silver Collection or contact our showroom directly.
        </p>
        <a href="https://wa.me/918378929951?text=Hello%20SVJ%20Jewellers%2C%20I%20would%20like%20to%20inquire%20about%20your%20gold%20ornaments%20collection." target="_blank" rel="noopener" class="btn-card-inquire" style="display: inline-flex; align-items: center; gap: 8px; padding: 10px 20px; text-decoration: none;">
          <i class="fa-brands fa-whatsapp"></i> Inquire on WhatsApp
        </a>
      </div>
    `;
    return;
  }

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

  const isGold = item.category !== "silver";
  const visualPreview = item.image 
    ? `<img src="${item.image}" alt="${item.title}" style="max-height: ${isGold ? '164px' : '195px'}; max-width: ${isGold ? '230px' : '275px'}; border-radius: 10px; object-fit: contain; display: block; margin: 0 auto; image-rendering: -webkit-optimize-contrast; image-rendering: high-quality; filter: contrast(1.06) saturate(1.12) brightness(1.02) drop-shadow(0 8px 14px rgba(38,24,10,0.36));" />`
    : (item.iconSvg || `<i class="fa-solid fa-gem" style="font-size: 50px; color: #d4af37;"></i>`);

  const stageInner = isGold ? `<div class="modal-gold-cushion">${visualPreview}</div>` : visualPreview;

  body.innerHTML = `
    <div style="text-align: center; margin-bottom: 14px;">
      <div style="width: 100%; height: 230px; margin: 0 auto; background: radial-gradient(circle at 50% 45%, #3a2414 0%, #1d1007 78%, #100803 100%); border-radius: 12px; display: flex; align-items: center; justify-content: center; border: 1px solid rgba(180,114,24,0.4); padding: 12px; overflow: hidden; box-sizing: border-box;">
        ${stageInner}
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
