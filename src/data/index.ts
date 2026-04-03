// =============================================================================
// HAUPTDATEI FÜR ALLE INHALTE DES GUTSCHEIN-PORTALS
// Alle Inhalte hier bearbeiten – Shops, Kategorien, Gutscheine, Navigation etc.
// =============================================================================

export interface Category {
  id: string;
  slug: string;
  name: string;
  icon: string;
  description: string;
  color: string;
}

export interface Shop {
  id: string;
  slug: string;
  name: string;
  description: string;
  longDescription: string;
  categoryId: string;
  website: string;
  rating: number;
  reviewCount: number;
  featured: boolean;
  popular: boolean;
  logo: string; // Pfad zum SVG-Logo
  logoPlaceholder: string; // Farbe für Logo-Platzhalter (Fallback)
  cashback?: string;
  shippingInfo?: string;
  returnPolicy?: string;
  tags: string[];
}

export interface Coupon {
  id: string;
  shopId: string;
  title: string;
  description: string;
  code?: string; // undefined = automatischer Rabatt / Deal
  type: "prozent" | "betrag" | "gratis" | "deal";
  value?: number; // z.B. 20 für 20% oder 10 für 10€
  minOrder?: number;
  expiresAt: string; // ISO-Datum
  isNew: boolean;
  isPopular: boolean;
  isFeatured: boolean;
  isFreeShipping: boolean;
  isVerified: boolean;
  usageCount: number;
  terms?: string;
}

export interface NavItem {
  label: string;
  href: string;
  icon?: string;
}

export interface FooterSection {
  heading: string;
  links: { label: string; href: string }[];
}

// =============================================================================
// KATEGORIEN
// =============================================================================
export const CATEGORIES: Category[] = [
  {
    id: "mode",
    slug: "mode",
    name: "Mode & Bekleidung",
    icon: "👗",
    description: "Gutscheine für Kleidung, Schuhe und Accessoires",
    color: "#e91e63",
  },
  {
    id: "elektronik",
    slug: "elektronik",
    name: "Elektronik & Technik",
    icon: "💻",
    description: "Rabatte für Smartphones, Laptops und mehr",
    color: "#2196f3",
  },
  {
    id: "reisen",
    slug: "reisen",
    name: "Reisen & Hotels",
    icon: "✈️",
    description: "Spar bei Flügen, Hotels und Mietwagen",
    color: "#ff9800",
  },
  {
    id: "lebensmittel",
    slug: "lebensmittel",
    name: "Lebensmittel & Lieferung",
    icon: "🛒",
    description: "Rabatte bei Supermärkten und Lieferdiensten",
    color: "#4caf50",
  },
  {
    id: "beauty",
    slug: "beauty",
    name: "Beauty & Gesundheit",
    icon: "💄",
    description: "Gutscheine für Kosmetik, Pflege und Wellness",
    color: "#9c27b0",
  },
  {
    id: "sport",
    slug: "sport",
    name: "Sport & Outdoor",
    icon: "⚽",
    description: "Rabatte für Sportartikel und Outdoor-Ausrüstung",
    color: "#f44336",
  },
  {
    id: "haushalt",
    slug: "haushalt",
    name: "Haushalt & Wohnen",
    icon: "🏠",
    description: "Gutscheine für Möbel, Deko und Haushaltsgeräte",
    color: "#795548",
  },
  {
    id: "unterhaltung",
    slug: "unterhaltung",
    name: "Unterhaltung & Medien",
    icon: "🎬",
    description: "Rabatte für Streaming, Bücher und Spiele",
    color: "#607d8b",
  },
  {
    id: "auto",
    slug: "auto",
    name: "Auto & Mobilität",
    icon: "🚗",
    description: "Gutscheine für Kfz-Zubehör und Mobilitätsdienste",
    color: "#455a64",
  },
  {
    id: "finanzen",
    slug: "finanzen",
    name: "Finanzen & Versicherung",
    icon: "💰",
    description: "Bonusangebote für Bankprodukte und Versicherungen",
    color: "#009688",
  },
  {
    id: "games",
    slug: "games",
    name: "Games & Gaming",
    icon: "🎮",
    description: "Rabatte für Videospiele und Gaming-Zubehör",
    color: "#673ab7",
  },
  {
    id: "gastronomie",
    slug: "gastronomie",
    name: "Restaurants & Essen",
    icon: "🍕",
    description: "Gutscheine für Restaurants und Food-Delivery",
    color: "#ffc107",
  },
];

// =============================================================================
// SHOPS
// =============================================================================
export const SHOPS: Shop[] = [
  // MODE
  {
    id: "zalando",
    slug: "zalando",
    name: "Zalando",
    description: "Europas größter Online-Modehändler",
    longDescription:
      "Zalando ist Europas führende Online-Plattform für Mode und Lifestyle. Das Sortiment umfasst über 4.500 internationale Marken von A bis Z. Mit kostenlosem Versand und 100 Tagen Rückgaberecht gehört Zalando zu den beliebtesten Modeshops Deutschlands.",
    categoryId: "mode",
    website: "https://www.zalando.de",
    rating: 4.5,
    reviewCount: 12450,
    featured: true,
    popular: true,
    logo: "/logos/zalando.svg",
    logoPlaceholder: "#ff6900",
    cashback: "bis zu 5%",
    shippingInfo: "Kostenloser Versand ab 0€",
    returnPolicy: "100 Tage kostenlose Rücksendung",
    tags: ["Mode", "Schuhe", "Accessoires", "Sale"],
  },
  {
    id: "aboutyou",
    slug: "aboutyou",
    name: "ABOUT YOU",
    description: "Personalisiertes Shopping-Erlebnis für Mode",
    longDescription:
      "ABOUT YOU ist ein deutsches Mode-Startup aus Hamburg, das sich auf personalisiertes Online-Shopping spezialisiert hat. Die Plattform bietet über 500.000 Produkte von mehr als 3.000 Marken und passt das Angebot individuell an jeden Kunden an.",
    categoryId: "mode",
    website: "https://www.aboutyou.de",
    rating: 4.3,
    reviewCount: 8320,
    featured: true,
    popular: true,
    logo: "/logos/aboutyou.svg",
    logoPlaceholder: "#000000",
    cashback: "bis zu 4%",
    shippingInfo: "Kostenloser Versand ab 19€",
    returnPolicy: "60 Tage kostenlose Rücksendung",
    tags: ["Mode", "Trends", "Influencer", "Marken"],
  },
  {
    id: "hm",
    slug: "hm",
    name: "H&M",
    description: "Mode für die ganze Familie zu guten Preisen",
    longDescription:
      "H&M ist eine der bekanntesten Modeketten der Welt und bietet modische Kleidung für Damen, Herren und Kinder zu erschwinglichen Preisen. Im Online-Shop finden Sie aktuelle Kollektionen sowie nachhaltige Mode aus der Conscious-Linie.",
    categoryId: "mode",
    website: "https://www.hm.com/de",
    rating: 4.1,
    reviewCount: 9870,
    featured: false,
    popular: true,
    logo: "/logos/hm.svg",
    logoPlaceholder: "#e50010",
    shippingInfo: "Kostenloser Versand ab 40€",
    returnPolicy: "30 Tage kostenlose Rücksendung",
    tags: ["Mode", "Familie", "Preiswerт", "Basics"],
  },
  {
    id: "snipes",
    slug: "snipes",
    name: "SNIPES",
    description: "Streetwear und Sneaker für Urban Fashion",
    longDescription:
      "SNIPES ist spezialisiert auf Streetwear, Sneaker und urban inspirierte Mode. Mit Marken wie Nike, adidas, Jordan und New Balance ist SNIPES die erste Adresse für Sneaker-Enthusiasten in Deutschland.",
    categoryId: "mode",
    website: "https://www.snipes.com/de",
    rating: 4.2,
    reviewCount: 4560,
    featured: false,
    popular: true,
    logo: "/logos/snipes.svg",
    logoPlaceholder: "#1a1a1a",
    shippingInfo: "Kostenloser Versand ab 60€",
    returnPolicy: "30 Tage Rücksendung",
    tags: ["Sneaker", "Streetwear", "Nike", "Adidas"],
  },

  // ELEKTRONIK
  {
    id: "mediamarkt",
    slug: "mediamarkt",
    name: "MediaMarkt",
    description: "Deutschlands größter Elektronikhändler",
    longDescription:
      "MediaMarkt ist mit über 400 Filialen und einem umfangreichen Online-Shop Deutschlands führender Elektronikhändler. Das Sortiment reicht von Smartphones über Laptops bis hin zu Haushaltsgeräten und Unterhaltungselektronik.",
    categoryId: "elektronik",
    website: "https://www.mediamarkt.de",
    rating: 4.0,
    reviewCount: 15230,
    featured: true,
    popular: true,
    logo: "/logos/mediamarkt.svg",
    logoPlaceholder: "#cc0000",
    shippingInfo: "Kostenloser Versand ab 59€",
    returnPolicy: "30 Tage Rückgabe",
    tags: ["Elektronik", "Smartphones", "Laptops", "TV"],
  },
  {
    id: "saturn",
    slug: "saturn",
    name: "Saturn",
    description: "Technik und Elektronik für jeden Bedarf",
    longDescription:
      "Saturn ist neben MediaMarkt eine der größten Elektronikketten Deutschlands. Im Online-Shop finden Kunden eine riesige Auswahl an Consumer Electronics, Haushaltsgeräten und Büroelektronik zu wettbewerbsfähigen Preisen.",
    categoryId: "elektronik",
    website: "https://www.saturn.de",
    rating: 4.0,
    reviewCount: 11650,
    featured: false,
    popular: true,
    logo: "/logos/saturn.svg",
    logoPlaceholder: "#0050aa",
    shippingInfo: "Kostenloser Versand ab 59€",
    returnPolicy: "30 Tage Rückgabe",
    tags: ["Elektronik", "Technik", "Haushaltsgeräte"],
  },
  {
    id: "cyberport",
    slug: "cyberport",
    name: "Cyberport",
    description: "Apple-Premium-Reseller und IT-Spezialist",
    longDescription:
      "Cyberport ist ein führender IT-Online-Händler mit besonderem Fokus auf Apple-Produkte sowie PCs, Laptops und Zubehör. Als Apple Premium Reseller bietet Cyberport das komplette Apple-Sortiment zu offiziellen Preisen.",
    categoryId: "elektronik",
    website: "https://www.cyberport.de",
    rating: 4.4,
    reviewCount: 6780,
    featured: false,
    popular: false,
    logo: "/logos/cyberport.svg",
    logoPlaceholder: "#005ea6",
    cashback: "bis zu 2%",
    shippingInfo: "Kostenloser Versand ab 1€",
    returnPolicy: "14 Tage Rückgabe",
    tags: ["Apple", "Laptops", "IT", "Tablets"],
  },

  // REISEN
  {
    id: "booking",
    slug: "booking",
    name: "Booking.com",
    description: "Hotels, Ferienwohnungen und mehr weltweit buchen",
    longDescription:
      "Booking.com ist mit über 28 Millionen Unterkünften die weltweit größte Unterkunftsbuchungsplattform. Ob Hotels, Ferienwohnungen, Apartments oder Hostels – bei Booking.com finden Sie die passende Unterkunft für jeden Reisezweck.",
    categoryId: "reisen",
    website: "https://www.booking.com",
    rating: 4.3,
    reviewCount: 34500,
    featured: true,
    popular: true,
    logo: "/logos/booking.svg",
    logoPlaceholder: "#003580",
    shippingInfo: "Sofort-Buchung verfügbar",
    tags: ["Hotels", "Urlaub", "Weltweit", "Ferienwohnung"],
  },
  {
    id: "expedia",
    slug: "expedia",
    name: "Expedia",
    description: "Flüge, Hotels und Pauschalreisen im Bundle",
    longDescription:
      "Expedia ist eine der führenden Online-Reiseplattformen und bietet Flüge, Hotels, Mietwagen und Pauschalreisen für über 200 Länder. Besonders attraktiv sind die Bundle-Angebote, bei denen Sie durch die Kombination von Flug und Hotel erheblich sparen können.",
    categoryId: "reisen",
    website: "https://www.expedia.de",
    rating: 4.1,
    reviewCount: 21300,
    featured: false,
    popular: true,
    logo: "/logos/expedia.svg",
    logoPlaceholder: "#ffc72c",
    tags: ["Flüge", "Hotels", "Mietwagen", "Pauschalreisen"],
  },
  {
    id: "airbnb",
    slug: "airbnb",
    name: "Airbnb",
    description: "Einzigartige Unterkünfte weltweit",
    longDescription:
      "Airbnb revolutionierte die Reisebranche mit seinem Konzept der Privatunterkünfte. Als Gast können Sie weltweit in authentischen Unterkünften – von der gemütlichen Wohnung bis zum Schloss – übernachten und dabei echte lokale Erfahrungen sammeln.",
    categoryId: "reisen",
    website: "https://www.airbnb.de",
    rating: 4.5,
    reviewCount: 18900,
    featured: false,
    popular: true,
    logo: "/logos/airbnb.svg",
    logoPlaceholder: "#ff5a5f",
    tags: ["Ferienwohnung", "Privat", "Einzigartig", "Weltweit"],
  },

  // LEBENSMITTEL
  {
    id: "hellofresh",
    slug: "hellofresh",
    name: "HelloFresh",
    description: "Kochboxen mit frischen Zutaten und Rezepten",
    longDescription:
      "HelloFresh ist der weltweit größte Kochbox-Anbieter und liefert frische Zutaten mit Schritt-für-Schritt-Rezepten direkt nach Hause. Wöchentlich wechselnde Menüs sorgen für Abwechslung auf dem Teller.",
    categoryId: "lebensmittel",
    website: "https://www.hellofresh.de",
    rating: 4.3,
    reviewCount: 8920,
    featured: true,
    popular: true,
    logo: "/logos/hellofresh.svg",
    logoPlaceholder: "#6fa832",
    tags: ["Kochbox", "Rezepte", "Frisch", "Lieferung"],
  },
  {
    id: "lieferando",
    slug: "lieferando",
    name: "Lieferando",
    description: "Essen bestellen vom Lieblingsrestaurant",
    longDescription:
      "Lieferando ist Deutschlands führende Essenslieferplattform mit über 20.000 Restaurants. Von Pizza über Sushi bis hin zu Burger – bei Lieferando können Sie aus einem riesigen Angebot lokaler und nationaler Restaurants wählen.",
    categoryId: "gastronomie",
    website: "https://www.lieferando.de",
    rating: 3.9,
    reviewCount: 22100,
    featured: false,
    popular: true,
    logo: "/logos/lieferando.svg",
    logoPlaceholder: "#ff8000",
    shippingInfo: "Liefergebühr je nach Restaurant",
    tags: ["Essenslieferung", "Restaurants", "Pizza", "Sushi"],
  },

  // BEAUTY
  {
    id: "douglas",
    slug: "douglas",
    name: "Douglas",
    description: "Premium-Beauty und Parfums online kaufen",
    longDescription:
      "Douglas ist Europas führender Beauty-Retailer mit einem riesigen Sortiment an Parfums, Kosmetik, Pflegeprodukten und Accessoires. Im Online-Shop finden Sie Luxusmarken wie Chanel, Dior und Lancôme sowie Naturkosmetik und Eigenmarken.",
    categoryId: "beauty",
    website: "https://www.douglas.de",
    rating: 4.4,
    reviewCount: 14670,
    featured: true,
    popular: true,
    logo: "/logos/douglas.svg",
    logoPlaceholder: "#c8a96e",
    cashback: "bis zu 3%",
    shippingInfo: "Kostenloser Versand ab 25€",
    returnPolicy: "30 Tage kostenlose Rücksendung",
    tags: ["Parfum", "Kosmetik", "Pflege", "Luxus"],
  },
  {
    id: "notino",
    slug: "notino",
    name: "Notino",
    description: "Parfums und Kosmetik zum besten Preis",
    longDescription:
      "Notino ist eines der größten Online-Parfümerien Europas mit über 55.000 Produkten bekannter Marken. Das tschechische Unternehmen bietet authentische Originalprodukte zu günstigen Preisen mit schneller Lieferung.",
    categoryId: "beauty",
    website: "https://www.notino.de",
    rating: 4.2,
    reviewCount: 9230,
    featured: false,
    popular: false,
    logo: "/logos/notino.svg",
    logoPlaceholder: "#c9a84c",
    tags: ["Parfum", "Kosmetik", "Günstig", "Original"],
  },

  // SPORT
  {
    id: "decathlon",
    slug: "decathlon",
    name: "Decathlon",
    description: "Sportartikel für über 70 Sportarten",
    longDescription:
      "Decathlon ist Weltmarktführer im Sportartikeleinzelhandel mit einem eigenen Sortiment für über 70 Sportarten. Von Fußball über Wandern bis Yoga – hier finden Sie hochwertige Sportausrüstung zu fairen Preisen.",
    categoryId: "sport",
    website: "https://www.decathlon.de",
    rating: 4.4,
    reviewCount: 11230,
    featured: true,
    popular: true,
    logo: "/logos/decathlon.svg",
    logoPlaceholder: "#0082c3",
    shippingInfo: "Kostenloser Versand ab 30€",
    returnPolicy: "365 Tage Rückgabe",
    tags: ["Sport", "Outdoor", "Eigenmarke", "Günstig"],
  },
  {
    id: "engelhorn",
    slug: "engelhorn",
    name: "Engelhorn Sports",
    description: "Premium-Sportmarken und Outdoorausrüstung",
    longDescription:
      "Engelhorn Sports ist ein führender deutscher Fachhändler für Sport- und Outdoormode. Das Sortiment umfasst Topmarken wie Patagonia, Arc'teryx, The North Face und viele weitere Premium-Sportmarken.",
    categoryId: "sport",
    website: "https://www.engelhorn.de",
    rating: 4.3,
    reviewCount: 4120,
    featured: false,
    popular: false,
    logo: "/logos/engelhorn.svg",
    logoPlaceholder: "#1a3a5c",
    shippingInfo: "Kostenloser Versand ab 49€",
    returnPolicy: "30 Tage Rücksendung",
    tags: ["Premium", "Outdoor", "Patagonia", "North Face"],
  },

  // HAUSHALT
  {
    id: "ikea",
    slug: "ikea",
    name: "IKEA",
    description: "Möbel und Einrichtung für jeden Geschmack",
    longDescription:
      "IKEA ist der weltweit größte Möbel- und Einrichtungskonzern aus Schweden. Der Online-Shop bietet das komplette IKEA-Sortiment mit Möbeln, Küchen, Beleuchtung, Textilien und Accessoires für Wohnung, Schlafzimmer, Küche und alle weiteren Räume.",
    categoryId: "haushalt",
    website: "https://www.ikea.com/de",
    rating: 4.2,
    reviewCount: 18450,
    featured: true,
    popular: true,
    logo: "/logos/ikea.svg",
    logoPlaceholder: "#0058a3",
    shippingInfo: "Liefergebühr ab 5,90€",
    returnPolicy: "365 Tage Rückgabe",
    tags: ["Möbel", "Einrichtung", "Küche", "Schwedisch"],
  },
  {
    id: "westwing",
    slug: "westwing",
    name: "Westwing",
    description: "Wohnen und Living mit Premium-Designerstücken",
    longDescription:
      "Westwing ist eine Premium-Lifestyle-Plattform für Home & Living, die täglich neue Kollektionen mit exklusiven Designerstücken, Möbeln und Dekorationsartikeln präsentiert. Die kuratierten Sales dauern meist 3-5 Tage.",
    categoryId: "haushalt",
    website: "https://www.westwing.de",
    rating: 4.3,
    reviewCount: 6780,
    featured: false,
    popular: false,
    logo: "/logos/westwing.svg",
    logoPlaceholder: "#2d2d2d",
    shippingInfo: "Kostenloser Versand ab 50€",
    tags: ["Premium", "Design", "Deko", "Living"],
  },

  // UNTERHALTUNG
  {
    id: "spotify",
    slug: "spotify",
    name: "Spotify",
    description: "Musik-Streaming für alle Lebenslagen",
    longDescription:
      "Spotify ist der weltgrößte Musik-Streaming-Dienst mit über 80 Millionen Songs und Podcasts. Mit Spotify Premium genießen Sie werbefreies Musik-Streaming, Downloads für die Offline-Nutzung und die beste Klangqualität.",
    categoryId: "unterhaltung",
    website: "https://www.spotify.com/de",
    rating: 4.6,
    reviewCount: 45200,
    featured: false,
    popular: true,
    logo: "/logos/spotify.svg",
    logoPlaceholder: "#1db954",
    tags: ["Musik", "Streaming", "Podcast", "Premium"],
  },
  {
    id: "amazon",
    slug: "amazon",
    name: "Amazon",
    description: "Alles kaufen auf dem weltgrößten Marktplatz",
    longDescription:
      "Amazon ist der weltweit größte E-Commerce-Marktplatz und bietet Millionen von Produkten in allen Kategorien. Mit Amazon Prime erhalten Kunden kostenlosen und schnellen Versand, Zugang zu Prime Video, Prime Music und viele weitere Vorteile.",
    categoryId: "unterhaltung",
    website: "https://www.amazon.de",
    rating: 4.4,
    reviewCount: 89300,
    featured: true,
    popular: true,
    logo: "/logos/amazon.svg",
    logoPlaceholder: "#ff9900",
    cashback: "bis zu 8%",
    shippingInfo: "Kostenloser Versand mit Prime",
    returnPolicy: "30 Tage kostenlose Rücksendung",
    tags: ["Alles", "Prime", "Schnell", "Günstig"],
  },

  // AUTO
  {
    id: "autodoc",
    slug: "autodoc",
    name: "AUTODOC",
    description: "Kfz-Ersatzteile und Zubehör günstig kaufen",
    longDescription:
      "AUTODOC ist eines der größten Online-Shops für Kfz-Ersatzteile in Europa mit einem Sortiment von über 5 Millionen Produkten für mehr als 166.000 Fahrzeugmodelle. Inklusive Einbauanleitungen und Fahrzeugauswahl.",
    categoryId: "auto",
    website: "https://www.autodoc.de",
    rating: 4.1,
    reviewCount: 7890,
    featured: false,
    popular: true,
    logo: "/logos/autodoc.svg",
    logoPlaceholder: "#e21d1d",
    shippingInfo: "Kostenloser Versand ab 80€",
    returnPolicy: "30 Tage Rücksendung",
    tags: ["Kfz-Teile", "Ersatzteile", "Auto", "Zubehör"],
  },
];

// =============================================================================
// GUTSCHEINE
// =============================================================================
export const COUPONS: Coupon[] = [
  // ZALANDO
  {
    id: "z001",
    shopId: "zalando",
    title: "20% Rabatt auf alles",
    description: "Spare 20% auf das gesamte Zalando-Sortiment – auch auf Sale-Artikel!",
    code: "ZALA20",
    type: "prozent",
    value: 20,
    minOrder: 50,
    expiresAt: "2026-04-30",
    isNew: false,
    isPopular: true,
    isFeatured: true,
    isFreeShipping: false,
    isVerified: true,
    usageCount: 4328,
    terms: "Gültig auf alle Artikel im Zalando-Shop. Mindestbestellwert 50€. Nicht kombinierbar mit anderen Aktions-Codes.",
  },
  {
    id: "z002",
    shopId: "zalando",
    title: "Kostenloser Versand ohne Mindestbestellwert",
    description: "Bestellen Sie ohne Versandkosten – egal wie groß Ihre Bestellung ist.",
    type: "gratis",
    expiresAt: "2026-06-30",
    isNew: false,
    isPopular: true,
    isFeatured: false,
    isFreeShipping: true,
    isVerified: true,
    usageCount: 8920,
    terms: "Dauerhaft gültig. Kostenlose Rücksendung für alle Bestellungen.",
  },
  {
    id: "z003",
    shopId: "zalando",
    title: "15% auf Nike und Adidas",
    description: "Exklusiver Rabatt auf alle Nike- und Adidas-Produkte bei Zalando.",
    code: "SPORTMODE15",
    type: "prozent",
    value: 15,
    minOrder: 30,
    expiresAt: "2026-03-31",
    isNew: true,
    isPopular: false,
    isFeatured: false,
    isFreeShipping: false,
    isVerified: true,
    usageCount: 1240,
    terms: "Nur für Nike- und Adidas-Produkte gültig. Mindestbestellwert 30€.",
  },

  // ABOUT YOU
  {
    id: "ay001",
    shopId: "aboutyou",
    title: "10€ Rabatt auf Erstbestellung",
    description: "Neue Kunden erhalten 10€ Sofortrabatt auf ihre erste Bestellung.",
    code: "ABOUT10NEU",
    type: "betrag",
    value: 10,
    minOrder: 40,
    expiresAt: "2026-12-31",
    isNew: false,
    isPopular: true,
    isFeatured: true,
    isFreeShipping: false,
    isVerified: true,
    usageCount: 6540,
    terms: "Nur für Neukunden. Einmalig einlösbar. Mindestbestellwert 40€.",
  },
  {
    id: "ay002",
    shopId: "aboutyou",
    title: "30% auf ausgewählte Marken",
    description: "Große Markenauswahl mit 30% Rabatt in der Saisonschluss-Aktion.",
    type: "prozent",
    value: 30,
    expiresAt: "2026-03-25",
    isNew: true,
    isPopular: true,
    isFeatured: true,
    isFreeShipping: false,
    isVerified: true,
    usageCount: 2890,
    terms: "Gilt nur für markierte Artikel. Kein weiterer Rabattcode einlösbar.",
  },

  // H&M
  {
    id: "hm001",
    shopId: "hm",
    title: "25% auf neue Kollektion",
    description: "Frühlingskollektion mit 25% Einführungsrabatt.",
    code: "HMNEU25",
    type: "prozent",
    value: 25,
    minOrder: 35,
    expiresAt: "2026-04-15",
    isNew: true,
    isPopular: false,
    isFeatured: false,
    isFreeShipping: false,
    isVerified: true,
    usageCount: 1560,
    terms: "Gültig auf Artikel der neuen Frühlingskollektion.",
  },
  {
    id: "hm002",
    shopId: "hm",
    title: "SALE – bis zu 50% Rabatt",
    description: "Großer Saisonschlussverkauf mit bis zu 50% auf hunderte Artikel.",
    type: "deal",
    expiresAt: "2026-03-28",
    isNew: false,
    isPopular: true,
    isFeatured: false,
    isFreeShipping: false,
    isVerified: true,
    usageCount: 7640,
    terms: "Gilt nur für markierte SALE-Artikel.",
  },

  // MEDIAMARKT
  {
    id: "mm001",
    shopId: "mediamarkt",
    title: "15% auf Smartphones",
    description: "Alle aktuellen Smartphones im Angebot – spare 15% mit diesem Code.",
    code: "MMPHONE15",
    type: "prozent",
    value: 15,
    minOrder: 100,
    expiresAt: "2026-04-01",
    isNew: false,
    isPopular: true,
    isFeatured: true,
    isFreeShipping: false,
    isVerified: true,
    usageCount: 3210,
    terms: "Nur auf Smartphones ab 100€ gültig. Nicht mit anderen Aktionen kombinierbar.",
  },
  {
    id: "mm002",
    shopId: "mediamarkt",
    title: "50€ Sofortrabatt auf TV ab 500€",
    description: "Kaufen Sie einen TV ab 500€ und sparen Sie sofort 50€.",
    code: "MMTV50",
    type: "betrag",
    value: 50,
    minOrder: 500,
    expiresAt: "2026-03-31",
    isNew: false,
    isPopular: false,
    isFeatured: false,
    isFreeShipping: false,
    isVerified: true,
    usageCount: 890,
    terms: "Nur für TV-Geräte ab 500€. Einmalig pro Kunde.",
  },
  {
    id: "mm003",
    shopId: "mediamarkt",
    title: "Kostenloser Versand auf alle Laptops",
    description: "Alle Laptops versandkostenfrei direkt zu Ihnen nach Hause.",
    type: "gratis",
    expiresAt: "2026-05-31",
    isNew: false,
    isPopular: false,
    isFeatured: false,
    isFreeShipping: true,
    isVerified: true,
    usageCount: 2340,
    terms: "Gilt nur für Laptops in der Laptop-Kategorie.",
  },
  {
    id: "mm004",
    shopId: "mediamarkt",
    title: "20% Rabatt auf PlayStation-Spiele",
    description: "Spare 20% auf alle PlayStation 4 und PlayStation 5 Spiele im MediaMarkt.",
    code: "PSGAMES20",
    type: "prozent",
    value: 20,
    minOrder: 30,
    expiresAt: "2026-04-15",
    isNew: true,
    isPopular: true,
    isFeatured: true,
    isFreeShipping: false,
    isVerified: true,
    usageCount: 1450,
    terms: "Gültig auf alle PS4 und PS5 Spiele. Mindestbestellwert 30€.",
  },
  {
    id: "mm005",
    shopId: "mediamarkt",
    title: "15€ Sofortrabatt auf Nintendo Switch",
    description: "Kaufen Sie eine Nintendo Switch Konsole und sparen Sie sofort 15€.",
    code: "SWITCH15",
    type: "betrag",
    value: 15,
    minOrder: 250,
    expiresAt: "2026-03-31",
    isNew: true,
    isPopular: false,
    isFeatured: false,
    isFreeShipping: false,
    isVerified: true,
    usageCount: 780,
    terms: "Nur für Nintendo Switch Konsolen. Einmalig pro Kunde.",
  },
  {
    id: "mm006",
    shopId: "mediamarkt",
    title: "Kostenloser Versand auf Gaming-Zubehör",
    description: "Alle Gaming-Accessoires wie Controller, Headsets und mehr versandkostenfrei.",
    type: "gratis",
    expiresAt: "2026-05-31",
    isNew: false,
    isPopular: true,
    isFeatured: false,
    isFreeShipping: true,
    isVerified: true,
    usageCount: 2100,
    terms: "Gilt nur für Produkte in der Gaming-Kategorie.",
  },
  {
    id: "mm007",
    shopId: "mediamarkt",
    title: "2 PS5-Spiele zum Preis von 1",
    description: "Wählen Sie 2 PS5-Spiele aus und zahlen Sie nur für das teurere – das günstigere ist gratis!",
    code: "PS5DEAL",
    type: "deal",
    expiresAt: "2026-04-30",
    isNew: false,
    isPopular: true,
    isFeatured: true,
    isFreeShipping: false,
    isVerified: true,
    usageCount: 320,
    terms: "Gültig für ausgewählte PS5-Spiele. Das günstigere Spiel ist kostenlos.",
  },

  // SATURN
  {
    id: "sat001",
    shopId: "saturn",
    title: "10% auf Haushaltsgeräte",
    description: "Große Auswahl an Waschmaschinen, Kühlschränken und mehr – 10% günstiger.",
    code: "SATHAUS10",
    type: "prozent",
    value: 10,
    minOrder: 199,
    expiresAt: "2026-04-30",
    isNew: false,
    isPopular: true,
    isFeatured: false,
    isFreeShipping: false,
    isVerified: true,
    usageCount: 1890,
    terms: "Gilt für alle Haushaltsgroßgeräte ab 199€.",
  },

  // BOOKING
  {
    id: "bk001",
    shopId: "booking",
    title: "Genius-Rabatt: 10% auf ausgewählte Hotels",
    description: "Booking.com Genius-Mitglieder sparen 10% auf tausende Hotels.",
    type: "prozent",
    value: 10,
    expiresAt: "2026-12-31",
    isNew: false,
    isPopular: true,
    isFeatured: true,
    isFreeShipping: false,
    isVerified: true,
    usageCount: 18940,
    terms: "Nur für eingeloggte Genius-Mitglieder. Nicht auf alle Unterkünfte anwendbar.",
  },
  {
    id: "bk002",
    shopId: "booking",
    title: "15% auf Last-Minute-Buchungen",
    description: "Buchen Sie kurzfristig und sparen Sie 15% auf die Übernachtungskosten.",
    code: "LASTMIN15",
    type: "prozent",
    value: 15,
    expiresAt: "2026-04-30",
    isNew: true,
    isPopular: false,
    isFeatured: false,
    isFreeShipping: false,
    isVerified: true,
    usageCount: 3450,
    terms: "Gültig für Buchungen weniger als 7 Tage vor Anreise.",
  },

  // HELLOFRESH
  {
    id: "hf001",
    shopId: "hellofresh",
    title: "3 Kochboxen zum Preis von 1",
    description: "Erstbestellungs-Angebot: Erste 3 Boxen mit massivem Rabatt.",
    code: "FRESH3X1",
    type: "deal",
    expiresAt: "2026-06-30",
    isNew: true,
    isPopular: true,
    isFeatured: true,
    isFreeShipping: true,
    isVerified: true,
    usageCount: 5670,
    terms: "Nur für Neukunden. Rabatt wird automatisch auf die ersten 3 Boxen angewendet.",
  },
  {
    id: "hf002",
    shopId: "hellofresh",
    title: "20€ Rabatt auf erste Kochbox",
    description: "Starten Sie mit HelloFresh und erhalten Sie 20€ auf Ihre erste Lieferung.",
    code: "HF20START",
    type: "betrag",
    value: 20,
    expiresAt: "2026-12-31",
    isNew: false,
    isPopular: true,
    isFeatured: false,
    isFreeShipping: false,
    isVerified: true,
    usageCount: 9230,
    terms: "Nur für Neukunden. Einmalig einlösbar.",
  },

  // LIEFERANDO
  {
    id: "la001",
    shopId: "lieferando",
    title: "5€ Rabatt ab 15€ Bestellwert",
    description: "Sparen Sie 5€ auf Ihre nächste Lieferando-Bestellung.",
    code: "LIEF5",
    type: "betrag",
    value: 5,
    minOrder: 15,
    expiresAt: "2026-03-30",
    isNew: false,
    isPopular: true,
    isFeatured: false,
    isFreeShipping: false,
    isVerified: true,
    usageCount: 7820,
    terms: "Gültig für alle Restaurants. Mindestbestellwert 15€. Pro Konto einmalig.",
  },

  // DOUGLAS
  {
    id: "do001",
    shopId: "douglas",
    title: "20% auf Parfums",
    description: "Alle Parfums 20% günstiger – über 2.000 Düfte in der Auswahl.",
    code: "DUFT20",
    type: "prozent",
    value: 20,
    minOrder: 30,
    expiresAt: "2026-04-15",
    isNew: false,
    isPopular: true,
    isFeatured: true,
    isFreeShipping: false,
    isVerified: true,
    usageCount: 6120,
    terms: "Gilt für alle Parfums-Artikel. Mindestbestellwert 30€.",
  },
  {
    id: "do002",
    shopId: "douglas",
    title: "Gratis-Probe bei Bestellung ab 25€",
    description: "Erhalten Sie eine Gratis-Parfumprobe ab einem Einkaufswert von 25€.",
    type: "gratis",
    expiresAt: "2026-05-31",
    isNew: true,
    isPopular: false,
    isFeatured: false,
    isFreeShipping: false,
    isVerified: true,
    usageCount: 3450,
    terms: "Solange der Vorrat reicht. Probe nach Wahl an der Kasse auswählen.",
  },

  // DECATHLON
  {
    id: "dec001",
    shopId: "decathlon",
    title: "10% auf alles für Vereinsmitglieder",
    description: "Mitglieder des Decathlon-Clubs erhalten 10% auf das gesamte Sortiment.",
    type: "prozent",
    value: 10,
    expiresAt: "2026-12-31",
    isNew: false,
    isPopular: true,
    isFeatured: false,
    isFreeShipping: false,
    isVerified: true,
    usageCount: 5840,
    terms: "Muss beim Checkout als Decathlon-Clubmitglied eingeloggt sein.",
  },
  {
    id: "dec002",
    shopId: "decathlon",
    title: "Kostenloser Versand auf alle Fahrräder",
    description: "Fahrräder versandkostenfrei – egal wohin in Deutschland.",
    type: "gratis",
    expiresAt: "2026-07-31",
    isNew: true,
    isPopular: false,
    isFeatured: false,
    isFreeShipping: true,
    isVerified: true,
    usageCount: 1230,
    terms: "Nur für Fahrräder. Montageservice gegen Aufpreis erhältlich.",
  },

  // IKEA
  {
    id: "ik001",
    shopId: "ikea",
    title: "10% Familienrabatt für IKEA-Family-Mitglieder",
    description: "Als IKEA-Family-Mitglied sparen Sie 10% auf ausgewählte Produkte.",
    type: "prozent",
    value: 10,
    expiresAt: "2026-12-31",
    isNew: false,
    isPopular: true,
    isFeatured: false,
    isFreeShipping: false,
    isVerified: true,
    usageCount: 12340,
    terms: "IKEA-Family-Karte beim Einkauf vorzeigen oder Online-Account verknüpfen.",
  },
  {
    id: "ik002",
    shopId: "ikea",
    title: "Kostenlose Lieferung bei Küchenbestellungen",
    description: "Bestellen Sie Ihre neue IKEA-Küche und profitieren Sie von kostenloser Lieferung.",
    type: "gratis",
    expiresAt: "2026-05-31",
    isNew: false,
    isPopular: false,
    isFeatured: false,
    isFreeShipping: true,
    isVerified: true,
    usageCount: 2890,
    terms: "Nur für Küchenbestellungen ab 500€ Bestellwert.",
  },

  // AMAZON
  {
    id: "amz001",
    shopId: "amazon",
    title: "3 Monate Prime kostenlos testen",
    description: "Neu bei Amazon Prime? Jetzt 3 Monate kostenlos testen!",
    type: "deal",
    expiresAt: "2026-12-31",
    isNew: false,
    isPopular: true,
    isFeatured: true,
    isFreeShipping: true,
    isVerified: true,
    usageCount: 34560,
    terms: "Nur für Neukunden ohne vorheriges Prime-Abo. Danach 8,99€/Monat.",
  },
  {
    id: "amz002",
    shopId: "amazon",
    title: "15% auf Elektronik mit Prime",
    description: "Prime-Mitglieder sparen 15% auf ausgewählte Elektronikartikel.",
    type: "prozent",
    value: 15,
    expiresAt: "2026-03-27",
    isNew: true,
    isPopular: true,
    isFeatured: true,
    isFreeShipping: false,
    isVerified: true,
    usageCount: 8920,
    terms: "Nur für Prime-Mitglieder. Gültig auf markierte Elektronikartikel.",
  },

  // SPOTIFY
  {
    id: "sp001",
    shopId: "spotify",
    title: "3 Monate Premium für 0,99€",
    description: "Testen Sie Spotify Premium 3 Monate für fast umsonst.",
    type: "deal",
    expiresAt: "2026-04-30",
    isNew: false,
    isPopular: true,
    isFeatured: true,
    isFreeShipping: false,
    isVerified: true,
    usageCount: 22300,
    terms: "Neukundenangebot. Danach 9,99€/Monat. Jederzeit kündbar.",
  },

  // AUTODOC
  {
    id: "ad001",
    shopId: "autodoc",
    title: "10% Rabatt auf Bremsbeläge und -scheiben",
    description: "Sicherheit auf der Straße – jetzt 10% sparen.",
    code: "BREMS10",
    type: "prozent",
    value: 10,
    minOrder: 50,
    expiresAt: "2026-04-30",
    isNew: false,
    isPopular: false,
    isFeatured: false,
    isFreeShipping: false,
    isVerified: true,
    usageCount: 2140,
    terms: "Gilt für alle Bremsbeläge und Bremsscheiben ab 50€.",
  },
  {
    id: "ad002",
    shopId: "autodoc",
    title: "Kostenloser Versand ab 69€",
    description: "Bestellen Sie im Wert von mindestens 69€ und zahlen Sie keine Versandkosten.",
    type: "gratis",
    expiresAt: "2026-12-31",
    isNew: false,
    isPopular: true,
    isFeatured: false,
    isFreeShipping: true,
    isVerified: true,
    usageCount: 5670,
    terms: "Gilt für alle Bestellungen ab 69€.",
  },

  // SNIPES
  {
    id: "sn001",
    shopId: "snipes",
    title: "20% auf alle Nike-Produkte",
    description: "Riesige Nike-Auswahl bei SNIPES – jetzt mit 20% Rabatt.",
    code: "SNIPES20",
    type: "prozent",
    value: 20,
    minOrder: 40,
    expiresAt: "2026-04-15",
    isNew: true,
    isPopular: true,
    isFeatured: true,
    isFreeShipping: false,
    isVerified: true,
    usageCount: 3890,
    terms: "Gilt auf alle Nike-Artikel. Mindestbestellwert 40€.",
  },
  {
    id: "sn002",
    shopId: "snipes",
    title: "Neukunden-Gutschein: 10€ Rabatt",
    description: "Willkommen bei SNIPES! 10€ auf Ihre erste Bestellung.",
    code: "SNEUPRIME10",
    type: "betrag",
    value: 10,
    minOrder: 60,
    expiresAt: "2026-12-31",
    isNew: false,
    isPopular: false,
    isFeatured: false,
    isFreeShipping: false,
    isVerified: true,
    usageCount: 4120,
    terms: "Nur für Neukunden. Einmalig. Mindestbestellwert 60€.",
  },

  // CYBERPORT
  {
    id: "cp001",
    shopId: "cyberport",
    title: "200€ Rabatt auf MacBook Pro",
    description: "Das neue MacBook Pro jetzt 200€ günstiger bei Cyberport.",
    code: "MACPRO200",
    type: "betrag",
    value: 200,
    minOrder: 1500,
    expiresAt: "2026-03-31",
    isNew: true,
    isPopular: true,
    isFeatured: true,
    isFreeShipping: true,
    isVerified: true,
    usageCount: 1240,
    terms: "Gilt auf alle MacBook Pro Modelle. Einmalig einlösbar.",
  },

  // EXPEDIA
  {
    id: "ex001",
    shopId: "expedia",
    title: "Bis zu 30% auf Pauschalreisen sparen",
    description: "Buchen Sie Flug + Hotel zusammen und sparen Sie bis zu 30%.",
    type: "deal",
    expiresAt: "2026-05-31",
    isNew: false,
    isPopular: true,
    isFeatured: false,
    isFreeShipping: false,
    isVerified: true,
    usageCount: 7650,
    terms: "Mindestaufenthalt 3 Nächte. Spare gilt für ausgewählte Destinationen.",
  },

  // AIRBNB
  {
    id: "air001",
    shopId: "airbnb",
    title: "10% Rabatt für neue Gastgeber",
    description: "Erste Buchung über Airbnb? Willkommensrabatt von 10% auf die Umstiegsgebühr.",
    code: "AIRNEU10",
    type: "prozent",
    value: 10,
    expiresAt: "2026-12-31",
    isNew: false,
    isPopular: false,
    isFeatured: false,
    isFreeShipping: false,
    isVerified: true,
    usageCount: 6780,
    terms: "Nur für Erstbuchung. Auf die Servicgebühr von Airbnb angewendet.",
  },
];

// =============================================================================
// SEITENNAVIGATION
// =============================================================================
export const NAV_ITEMS: NavItem[] = [
  { label: "Neu", href: "/neu", icon: "✨" },
  { label: "Beliebt", href: "/beliebt", icon: "🔥" },
  { label: "Gratis-Versand", href: "/gratis", icon: "🚚" },
  { label: "Alle Shops", href: "/shops", icon: "🏪" },
  { label: "Kategorien", href: "/kategorien", icon: "📂" },
];

// =============================================================================
// FOOTER-INHALT
// =============================================================================
export const FOOTER_SECTIONS: FooterSection[] = [
  {
    heading: "Kategorien",
    links: [
      { label: "Mode & Bekleidung", href: "/kategorien/mode" },
      { label: "Elektronik & Technik", href: "/kategorien/elektronik" },
      { label: "Reisen & Hotels", href: "/kategorien/reisen" },
      { label: "Beauty & Gesundheit", href: "/kategorien/beauty" },
      { label: "Sport & Outdoor", href: "/kategorien/sport" },
      { label: "Alle Kategorien", href: "/kategorien" },
    ],
  },
  {
    heading: "Beliebte Shops",
    links: [
      { label: "Zalando Gutscheine", href: "/shops/zalando" },
      { label: "Amazon Gutscheine", href: "/shops/amazon" },
      { label: "MediaMarkt Gutscheine", href: "/shops/mediamarkt" },
      { label: "IKEA Gutscheine", href: "/shops/ikea" },
      { label: "Booking.com Gutscheine", href: "/shops/booking" },
      { label: "Alle Shops", href: "/shops" },
    ],
  },
  {
    heading: "Gutscheine",
    links: [
      { label: "Neue Gutscheine", href: "/neu" },
      { label: "Beliebteste Gutscheine", href: "/beliebt" },
      { label: "Gratis-Versand", href: "/gratis" },
      { label: "Prozent-Rabatte", href: "/kategorien" },
      { label: "Kostenlose Angebote", href: "/gratis" },
    ],
  },
  {
    heading: "Über uns",
    links: [
      { label: "Über DeutschCoupons", href: "/ueber-uns" },
      { label: "Wie es funktioniert", href: "/wie-es-funktioniert" },
      { label: "Gutschein einreichen", href: "/einreichen" },
      { label: "Newsletter", href: "/newsletter" },
      { label: "Kontakt", href: "/kontakt" },
    ],
  },
  {
    heading: "Rechtliches",
    links: [
      { label: "Impressum", href: "/impressum" },
      { label: "Datenschutz", href: "/datenschutz" },
      { label: "Cookie-Einstellungen", href: "/cookies" },
      { label: "AGB", href: "/agb" },
    ],
  },
];

// =============================================================================
// STATISTIKEN FÜR DIE STARTSEITE
// =============================================================================
export const SITE_STATS = {
  totalCoupons: 1842,
  totalShops: 312,
  totalSavings: "4.200.000",
  activeUsers: "580.000",
};

// =============================================================================
// CASINO PROMOS (nur für Campaign-User sichtbar, via Cookie)
// =============================================================================
export interface CasinoPromo {
  id: string;
  casinoName: string;
  logo: string; // /images/coupons/xxx.jpg
  websiteUrl: string;
  bonusCode: string;
  // Bonus overview
  bonusSummary: string; // z.B. "30 FS (Aloha King Elvis!)"
  betPerSpin?: string;
  wr: string; // "x25"
  maxCashout: string; // "No limits" oder "€50"
  // Conditions
  cashableAfterWagering: boolean;
  allowedCategories: string;
  prohibitedCategories: string;
  bonusExpireDays: number;
  exclusiveBonusExpireDays: number;
  maxBetNoDeposit: string;
  noCreditCardRequired: boolean;
  wagingNote: string;
  // Extra deposit bonus fields
  depositRequired?: string; // "€20 deposit"
  maxWin?: string;
}

export const CASINO_PROMOS: CasinoPromo[] = [
  {
    id: "casino-22bit",
    casinoName: "22bit",
    logo: "/images/coupons/22bit.jpg",
    websiteUrl: "https://22bit.com",
    bonusCode: "NEU30",
    bonusSummary: "30 FS (Aloha King Elvis! – BGAMING)",
    betPerSpin: "0,20 EUR",
    wr: "x25",
    maxCashout: "No limits",
    cashableAfterWagering: true,
    allowedCategories: "Popular, Top, New, 3D Slots",
    prohibitedCategories: "Live Casino, Sic-Bo, Other, Baccarat, Poker, Multiplayer games, Board Games, Craps, Table Games, Blackjack, Backgammon, Hold'em, Legion Poker, Scratch cards, Live slots, 1xGames, Roulette, Hunting & Fishing",
    bonusExpireDays: 7,
    exclusiveBonusExpireDays: 7,
    maxBetNoDeposit: "5 EUR",
    noCreditCardRequired: true,
    wagingNote: "The bonus works with wagering from the real balance. If a player wins an amount from no-deposit spins, they will need to wager it x25 using their real balance. After the wagering is completed, the winnings will be added to the balance.",
  },
  {
    id: "casino-betlabel",
    casinoName: "BetLabel",
    logo: "/images/coupons/betlabel.jpg",
    websiteUrl: "https://betlabel.com",
    bonusCode: "GCW30FS",
    bonusSummary: "30 FS (Aloha King Elvis! – BGAMING)",
    betPerSpin: "0,20 EUR",
    wr: "x25",
    maxCashout: "No limits",
    cashableAfterWagering: true,
    allowedCategories: "Popular, Top, New, 3D Slots",
    prohibitedCategories: "Live Casino, Sic-Bo, Other, Baccarat, Poker, Multiplayer games, Board Games, Craps, Table Games, Blackjack, Backgammon, Hold'em, Legion Poker, Scratch cards, Live slots, 1xGames, Roulette, Hunting & Fishing",
    bonusExpireDays: 7,
    exclusiveBonusExpireDays: 7,
    maxBetNoDeposit: "5 EUR",
    noCreditCardRequired: true,
    wagingNote: "The bonus works with wagering from the real balance. If a player wins an amount from no-deposit spins, they will need to wager it x25 using their real balance. After the wagering is completed, the winnings will be added to the balance.",
  },
  {
    id: "casino-22casino",
    casinoName: "22Casino",
    logo: "/images/coupons/22casino.jpg",
    websiteUrl: "https://22casino.com",
    bonusCode: "GCW2026",
    bonusSummary: "30 FS (Aloha King Elvis! – BGAMING)",
    betPerSpin: "0,20 EUR",
    wr: "x25",
    maxCashout: "No limits",
    cashableAfterWagering: true,
    allowedCategories: "Popular, Top, New, 3D Slots",
    prohibitedCategories: "Live Casino, Sic-Bo, Other, Baccarat, Poker, Multiplayer games, Board Games, Craps, Table Games, Blackjack, Backgammon, Hold'em, Legion Poker, Scratch cards, Live slots, 1xGames, Roulette, Hunting & Fishing",
    bonusExpireDays: 7,
    exclusiveBonusExpireDays: 7,
    maxBetNoDeposit: "5 EUR",
    noCreditCardRequired: true,
    wagingNote: "The bonus works with wagering from the real balance. If a player wins an amount from no-deposit spins, they will need to wager it x25 using their real balance. After the wagering is completed, the winnings will be added to the balance.",
  },
  {
    id: "casino-22bet",
    casinoName: "22Bet",
    logo: "/images/coupons/22bet.jpg",
    websiteUrl: "https://22bet.com",
    bonusCode: "SPRING30",
    bonusSummary: "30 FS (Aloha King Elvis! – BGAMING)",
    betPerSpin: "0,20 EUR",
    wr: "x45",
    maxCashout: "No limits",
    cashableAfterWagering: true,
    allowedCategories: "Popular, Top, New, 3D Slots",
    prohibitedCategories: "Live Casino, Sic-Bo, Other, Baccarat, Poker, Multiplayer games, Board Games, Craps, Table Games, Blackjack, Backgammon, Hold'em, Legion Poker, Scratch cards, Live slots, 1xGames, Roulette, Hunting & Fishing",
    bonusExpireDays: 7,
    exclusiveBonusExpireDays: 7,
    maxBetNoDeposit: "5 EUR",
    noCreditCardRequired: true,
    wagingNote: "The bonus works with wagering from the real balance. If a player wins an amount from no-deposit spins, they will need to wager it x25 using their real balance. After the wagering is completed, the winnings will be added to the balance.",
  },
  {
    id: "casino-safecasino",
    casinoName: "Safecasino",
    logo: "/images/coupons/safecasino.jpg",
    websiteUrl: "https://safecasino.com",
    bonusCode: "GCWPROMO30",
    bonusSummary: "30 FS (Aloha King Elvis! – BGAMING)",
    betPerSpin: "0,20 EUR",
    wr: "x45",
    maxCashout: "No limits",
    cashableAfterWagering: true,
    allowedCategories: "Popular, Top, New, 3D Slots",
    prohibitedCategories: "Live Casino, Sic-Bo, Other, Baccarat, Poker, Multiplayer games, Board Games, Craps, Table Games, Blackjack, Backgammon, Hold'em, Legion Poker, Scratch cards, Live slots, 1xGames, Roulette, Hunting & Fishing",
    bonusExpireDays: 7,
    exclusiveBonusExpireDays: 7,
    maxBetNoDeposit: "5 EUR",
    noCreditCardRequired: true,
    wagingNote: "The bonus works with wagering from the real balance. If a player wins an amount from no-deposit spins, they will need to wager it x25 using their real balance. After the wagering is completed, the winnings will be added to the balance.",
  },
  {
    id: "casino-azurslot",
    casinoName: "Azurslot",
    logo: "/images/coupons/azurslot.jpg",
    websiteUrl: "https://azurslot.com",
    bonusCode: "GCW30",
    bonusSummary: "30 FS (Aloha King Elvis! – BGAMING)",
    betPerSpin: "0,20 EUR",
    wr: "x45",
    maxCashout: "No limits",
    cashableAfterWagering: true,
    allowedCategories: "Popular, Top, New, 3D Slots",
    prohibitedCategories: "Live Casino, Sic-Bo, Other, Baccarat, Poker, Multiplayer games, Board Games, Craps, Table Games, Blackjack, Backgammon, Hold'em, Legion Poker, Scratch cards, Live slots, 1xGames, Roulette, Hunting & Fishing",
    bonusExpireDays: 7,
    exclusiveBonusExpireDays: 7,
    maxBetNoDeposit: "5 EUR",
    noCreditCardRequired: true,
    wagingNote: "The bonus works with wagering from the real balance. If a player wins an amount from no-deposit spins, they will need to wager it x25 using their real balance. After the wagering is completed, the winnings will be added to the balance.",
  },
  {
    id: "casino-luckyhills",
    casinoName: "LuckyHills",
    logo: "/images/coupons/luckyhills.jpg",
    websiteUrl: "https://luckyhills.com",
    bonusCode: "10EXTRA",
    bonusSummary: "€10 Bonus auf €20 Einzahlung",
    wr: "x40",
    maxCashout: "€50",
    maxWin: "€50",
    depositRequired: "€20",
    cashableAfterWagering: true,
    allowedCategories: "Popular, Top, New, 3D Slots",
    prohibitedCategories: "Live Casino, Sic-Bo, Other, Baccarat, Poker, Multiplayer games, Board Games, Craps, Table Games, Blackjack, Backgammon, Hold'em, Legion Poker, Scratch cards, Live slots, 1xGames, Roulette, Hunting & Fishing",
    bonusExpireDays: 7,
    exclusiveBonusExpireDays: 7,
    maxBetNoDeposit: "5 EUR",
    noCreditCardRequired: false,
    wagingNote: "Bonus ist nicht an die erste oder zweite Einzahlung gebunden. Max. Gewinn: €50.",
  },
  {
    id: "casino-winspirit",
    casinoName: "WinSpirit",
    logo: "/images/coupons/winspirit.jpg",
    websiteUrl: "https://winspirit.com",
    bonusCode: "WIN10",
    bonusSummary: "€10 Bonus auf €20 Einzahlung",
    wr: "x40",
    maxCashout: "€50",
    maxWin: "€50",
    depositRequired: "€20",
    cashableAfterWagering: true,
    allowedCategories: "Popular, Top, New, 3D Slots",
    prohibitedCategories: "Live Casino, Sic-Bo, Other, Baccarat, Poker, Multiplayer games, Board Games, Craps, Table Games, Blackjack, Backgammon, Hold'em, Legion Poker, Scratch cards, Live slots, 1xGames, Roulette, Hunting & Fishing",
    bonusExpireDays: 7,
    exclusiveBonusExpireDays: 7,
    maxBetNoDeposit: "5 EUR",
    noCreditCardRequired: false,
    wagingNote: "Bonus ist nicht an die erste oder zweite Einzahlung gebunden. Max. Gewinn: €50.",
  },
];

// =============================================================================
// HELFER-FUNKTIONEN
// =============================================================================
export function getShopById(id: string): Shop | undefined {
  return SHOPS.find((s) => s.id === id);
}

export function getShopBySlug(slug: string): Shop | undefined {
  return SHOPS.find((s) => s.slug === slug);
}

export function getCouponById(id: string): Coupon | undefined {
  return COUPONS.find((c) => c.id === id);
}

export function getCouponsByShopId(shopId: string): Coupon[] {
  return COUPONS.filter((c) => c.shopId === shopId);
}

export function getCouponsByCategory(categoryId: string): Coupon[] {
  const shopIds = SHOPS.filter((s) => s.categoryId === categoryId).map((s) => s.id);
  return COUPONS.filter((c) => shopIds.includes(c.shopId));
}

export function getShopsByCategory(categoryId: string): Shop[] {
  return SHOPS.filter((s) => s.categoryId === categoryId);
}

export function getCategoryById(id: string): Category | undefined {
  return CATEGORIES.find((c) => c.id === id);
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return CATEGORIES.find((c) => c.slug === slug);
}

export function getFeaturedCoupons(): Coupon[] {
  return COUPONS.filter((c) => c.isFeatured);
}

export function getNewCoupons(): Coupon[] {
  return COUPONS.filter((c) => c.isNew);
}

export function getPopularCoupons(): Coupon[] {
  return COUPONS.filter((c) => c.isPopular);
}

export function getFreeShippingCoupons(): Coupon[] {
  return COUPONS.filter((c) => c.isFreeShipping);
}

export function getFeaturedShops(): Shop[] {
  return SHOPS.filter((s) => s.featured);
}

export function formatCouponValue(coupon: Coupon): string {
  switch (coupon.type) {
    case "prozent":
      return `${coupon.value}%`;
    case "betrag":
      return `${coupon.value}€`;
    case "gratis":
      return "Gratis";
    case "deal":
      return "Deal";
    default:
      return "Angebot";
  }
}

export function isExpiringSoon(expiresAt: string): boolean {
  const expiry = new Date(expiresAt);
  const now = new Date();
  const diff = expiry.getTime() - now.getTime();
  return diff > 0 && diff < 7 * 24 * 60 * 60 * 1000; // weniger als 7 Tage
}

export function isExpired(expiresAt: string): boolean {
  return new Date(expiresAt) < new Date();
}

export function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString("de-DE", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
}