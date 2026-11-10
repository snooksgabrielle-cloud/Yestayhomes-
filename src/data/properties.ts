export interface Property {
  id: string; // e.g. "880475", "640448", "110520"
  slug: string;
  title: string;
  path?: string;
  image?: string;
  neighborhood?: string;
  area?: string;
  areaSlug: string; // e.g. "kolonaki", "akropoli", "glyfada"
  suburbRegion: 'city-center' | 'south-suburbs' | 'north-suburbs';
  neighborhoodName: string;
  city: string;
  street: string;
  zip: string;
  price: number;
  bedrooms: number;
  baths: number;
  sizeSqM: number;
  floor: string;
  energyClass: string;
  images: string[];
  featured: boolean;
  amenities: string[];
  description: string;
}

export interface AreaInfo {
  slug: string;
  name: string;
  suburbRegion: 'city-center' | 'south-suburbs' | 'north-suburbs';
  regionName: string;
  tagline: string;
  description: string;
  image: string;
  propertyCount: number;
  highlights: string[];
}

export const AREA_DIRECTORY: Record<string, AreaInfo> = {
  // City Center
  'city-center': {
    slug: 'city-center',
    name: 'Athens City Center',
    suburbRegion: 'city-center',
    regionName: 'Central Athens',
    tagline: 'Historic charm meets cosmopolitan European capital living',
    description: 'The cultural, artistic, and historical nucleus of Athens. From prestigious Kolonaki to the ancient shadows of the Parthenon in Akropoli, living here puts world-class museums, culinary excellence, and vibrant cafes right at your doorstep.',
    image: 'https://images.unsplash.com/photo-1555993539-1732b379375e?auto=format&fit=crop&w=1200&q=80',
    propertyCount: 55,
    highlights: ['Acropolis & Plaka Walking Distance', 'Syntagma Financial Quarter', 'High-end Kolonaki Boutiques', 'Direct Metro Line access to Airport']
  },
  'akropoli': {
    slug: 'akropoli',
    name: 'Akropoli',
    suburbRegion: 'city-center',
    regionName: 'Central Athens',
    tagline: 'Live facing the monumental cradle of Western Civilization',
    description: 'One of the most historic and picturesque residential zones in the world. Pedestrian stone streets, shaded pine avenues beneath the Acropolis Museum, and immediate access to Philopappos Hill.',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80',
    propertyCount: 18,
    highlights: ['Parthenon View Terraces', 'Acropolis Metro Station', 'Dionysiou Areopagitou Pedestrian Walkway', 'Quiet heritage preservation enclave']
  },
  'kolonaki': {
    slug: 'kolonaki',
    name: 'Kolonaki',
    suburbRegion: 'city-center',
    regionName: 'Central Athens',
    tagline: 'Aristocratic boutiques, art galleries, and upscale bistros',
    description: 'Situated on the southern slope of Lycabettus Hill, Kolonaki has long been the premier address for diplomats, executives, artists, and prominent professionals.',
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80',
    propertyCount: 22,
    highlights: ['Lycabettus Hill Funicular', 'Haute Couture shopping', 'Fine dining and espresso bars', 'Embassy and Consulate district']
  },
  'mets': {
    slug: 'mets',
    name: 'Mets',
    suburbRegion: 'city-center',
    regionName: 'Central Athens',
    tagline: 'Montmartre of Athens with classical neoclassical mansions',
    description: 'A romantic bohemian quarter across from the Panathenaic Stadium. Green alleys, quiet residential streets, and charming 19th-century architecture.',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
    propertyCount: 8,
    highlights: ['Panathenaic Marble Stadium (Kallimarmaro)', 'Green Ardittos Hill', 'Historic neoclassical preservation', 'Tranquil ambiance minutes from center']
  },
  'pagrati': {
    slug: 'pagrati',
    name: 'Pagrati',
    suburbRegion: 'city-center',
    regionName: 'Central Athens',
    tagline: 'Artistic energy, lively plazas, and creative community',
    description: 'A vibrant neighborhood beloved by writers, architects, and international creatives. Filled with specialty coffee shops, open-air cinemas, and Varnava Square.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    propertyCount: 14,
    highlights: ['Varnava & Proskopon Squares', 'Goulandris Modern Art Museum', 'Pagrati Grove Gardens', 'Exceptional culinary scene']
  },
  'plateia-mavili': {
    slug: 'plateia-mavili',
    name: 'Plateia Mavili',
    suburbRegion: 'city-center',
    regionName: 'Central Athens',
    tagline: 'Sophisticated metropolitan hub favored by media and medical leaders',
    description: 'Centered around legendary Mavili Square and Mount Lycabettus, offering immediate proximity to the American Embassy, Athens Concert Hall, and major hospitals.',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
    propertyCount: 9,
    highlights: ['Megaro Mousikis (Athens Concert Hall)', 'US Embassy Security Zone', 'Lycabettus hiking trails', '24/7 square life']
  },
  'hilton': {
    slug: 'hilton',
    name: 'Hilton / Ilisia',
    suburbRegion: 'city-center',
    regionName: 'Central Athens',
    tagline: 'Cosmopolitan corporate and diplomatic boulevard',
    description: 'Bordering the redeveloped Conrad luxury corridor and the National Gallery of Art, this area represents sleek modernist architecture and effortless mobility.',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
    propertyCount: 11,
    highlights: ['National Gallery of Greece', 'Evangelismos Metro interchange', 'Luxury 5-star hotel row', 'Walking distance to Kolonaki']
  },

  // South Suburbs (Riviera)
  'south-suburbs': {
    slug: 'south-suburbs',
    name: 'South Suburbs (Athenian Riviera)',
    suburbRegion: 'south-suburbs',
    regionName: 'Athenian Riviera',
    tagline: 'Sun-drenched Mediterranean coastal living and resort lifestyle',
    description: 'Extending from the modern cultural hub of Palaio Faliro through luxury Glyfada to pine-fringed Vouliagmeni. Coastal tram lines, marinas, sandy beaches, and sea-view penthouses.',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
    propertyCount: 90,
    highlights: ['Blue Flag Mediterranean Beaches', 'Flisvos & Glyfada Marinas', 'The Ellinikon Mega Project', 'Coast Tramway & Seaside Dining']
  },
  'elliniko': {
    slug: 'elliniko',
    name: 'Elliniko',
    suburbRegion: 'south-suburbs',
    regionName: 'Athenian Riviera',
    tagline: 'The future of European luxury urban coastal innovation',
    description: 'Home to Europe’s largest urban coastal regeneration project, featuring smart city infrastructure, grand coastal parks, championship golf, and modern residential towers.',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
    propertyCount: 16,
    highlights: ['The Ellinikon Metropolitan Park', 'Luxury Marina Tower Enclave', 'Direct coastal highway & metro connection', 'High capital appreciation']
  },
  'voula': {
    slug: 'voula',
    name: 'Voula',
    suburbRegion: 'south-suburbs',
    regionName: 'Athenian Riviera',
    tagline: 'Quiet coastal elegance, green avenues, and pristine family atmosphere',
    description: 'One of the most sought-after seaside residential havens. Wide palm-lined streets, contemporary architectural residences, and relaxed coastal clubs.',
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80',
    propertyCount: 14,
    highlights: ['Voula Beach clubs', 'Quiet residential zoning', 'International family community', 'Close to Vouliagmeni Peninsula']
  },
  'nea-smyrni': {
    slug: 'nea-smyrni',
    name: 'Nea Smyrni',
    suburbRegion: 'south-suburbs',
    regionName: 'Athenian Riviera',
    tagline: 'Bustling pedestrian square and leafy central park life',
    description: 'Famous for having Greece’s largest pedestrianized central square, filled with fountains, outdoor dining, and an expansive 50,000 m² pine grove park.',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80',
    propertyCount: 12,
    highlights: ['Nea Smyrni Grove Park', 'Immense pedestrian dining square', 'Direct Tram to Syntagma and Beach', 'Family-friendly parks']
  },
  'palaio-faliro': {
    slug: 'palaio-faliro',
    name: 'Palaio Faliro',
    suburbRegion: 'south-suburbs',
    regionName: 'Athenian Riviera',
    tagline: 'Seaside promenade, Flisvos Marina, and Stavros Niarchos Cultural Center',
    description: 'Where Athens meets the Saronic Gulf. Features the world-renowned Stavros Niarchos Foundation Cultural Center (SNFCC), National Opera, and luxury superyacht marina.',
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80',
    propertyCount: 15,
    highlights: ['Flisvos Superyacht Marina', 'SNFCC National Opera & Canal Park', 'Seaside coastal boardwalk', 'Direct tram and bus lines']
  },
  'glyfada': {
    slug: 'glyfada',
    name: 'Glyfada',
    suburbRegion: 'south-suburbs',
    regionName: 'Athenian Riviera',
    tagline: 'The glamorous capital of the Athenian Riviera',
    description: 'The pulse of southern coastal luxury. World-class designer shopping on Metaxa Avenue, coastal cocktail lounges, 18-hole championship golf course, and beachfront living.',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
    propertyCount: 28,
    highlights: ['Metaxa Avenue Designer Boulevard', 'Glyfada Golf Club of Athens', 'Asteras Seafront', 'Cosmopolitan nightlife & dining']
  },
  'alimos': {
    slug: 'alimos',
    name: 'Alimos',
    suburbRegion: 'south-suburbs',
    regionName: 'Athenian Riviera',
    tagline: 'Sailing hub with Europe’s largest mega-marina',
    description: 'Ideal for maritime enthusiasts and executives who appreciate open sea horizons. Features the historic Kalamaki Marina and landscaped public seaside parks.',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
    propertyCount: 10,
    highlights: ['Alimos Sailing Marina (1,000+ berths)', 'Seaside sports clubs', 'Proximity to Ellinikon development', 'Fast coastal transit']
  },
  'vouliagmeni': {
    slug: 'vouliagmeni',
    name: 'Vouliagmeni',
    suburbRegion: 'south-suburbs',
    regionName: 'Athenian Riviera',
    tagline: 'The crown jewel of luxury Mediterranean resort living',
    description: 'An idyllic pine-covered peninsula famed for thermal Lake Vouliagmeni, the Four Seasons Astir Palace, Michelin-starred seaside gastronomy, and crystal bays.',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
    propertyCount: 9,
    highlights: ['Astir Beach & Four Seasons Enclave', 'Thermal Lake Vouliagmeni', 'Protected pine forest peninsula', 'Unrivaled privacy & prestige']
  },

  // North Suburbs
  'north-suburbs': {
    slug: 'north-suburbs',
    name: 'North Suburbs',
    suburbRegion: 'north-suburbs',
    regionName: 'Northern Business & Residential',
    tagline: 'Lush greenery, multinational corporate headquarters, and prestigious schools',
    description: 'The leafy, cooler highland districts of Athens. Home to multinational headquarters on Kifisias Avenue, Olympic Stadium sports complexes, and private international colleges.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    propertyCount: 90,
    highlights: ['Multinational Corporate Tech Hub', 'Cooler climate & pine greenery', 'International schools (ISA, St. Catherine’s, ACS)', 'Attiki Odos expressway connectivity']
  },
  'marousi': {
    slug: 'marousi',
    name: 'Marousi',
    suburbRegion: 'north-suburbs',
    regionName: 'Northern Business District',
    tagline: 'The Wall Street & Silicon Valley of Athens',
    description: 'Greece’s premier corporate corridor along Kifisias Avenue. Headquarters of multinational technology, telecom, and pharmaceutical firms, alongside premier shopping malls (The Mall Athens, Golden Hall).',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
    propertyCount: 24,
    highlights: ['Kifisias Avenue Corporate Hub', 'Golden Hall & The Mall Athens', 'Olympic Sports Complex (OAKA)', 'Neratziotissa Metro & Suburban Rail interchange']
  },
  'nea-erythraia': {
    slug: 'nea-erythraia',
    name: 'Nea Erythraia',
    suburbRegion: 'north-suburbs',
    regionName: 'Northern Business & Residential',
    tagline: 'Charming village vibe, pines, and boutique culinary squares',
    description: 'A verdant northern suburb with stone-paved pedestrian alleys, upscale local delis, gourmet bistros, and peaceful low-density residential estates.',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
    propertyCount: 8,
    highlights: ['Pine forest microclimate', 'Boutique dining precinct', 'Private villas & garden apartments', 'Close to Mount Penteli trails']
  },
  'pefki': {
    slug: 'pefki',
    name: 'Pefki',
    suburbRegion: 'north-suburbs',
    regionName: 'Northern Business & Residential',
    tagline: 'Literally "The Pines" — a serene, garden-filled residential sanctuary',
    description: 'True to its Greek name, Pefki is draped in mature pine groves. A serene family sanctuary tucked conveniently between Marousi and Kifisia.',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80',
    propertyCount: 9,
    highlights: ['Shaded pine parks', 'Low-rise architecture', 'Minutes from Marousi business parks', 'Quiet residential roads']
  },
  'vrilissia': {
    slug: 'vrilissia',
    name: 'Vrilissia',
    suburbRegion: 'north-suburbs',
    regionName: 'Northern Business & Residential',
    tagline: 'Modern, well-planned suburb with generous sidewalks and bike paths',
    description: 'A model green suburb organized around Analipseos Square, characterized by modern low-rise buildings, underground parking, and excellent neighborhood commerce.',
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80',
    propertyCount: 11,
    highlights: ['Analipseos Central Plaza', 'Attiki Odos quick access', 'Extensive bike & jog routes', 'High-standard modern construction']
  },
  'kifisia': {
    slug: 'kifisia',
    name: 'Kifisia',
    suburbRegion: 'north-suburbs',
    regionName: 'Northern Business & Residential',
    tagline: 'Historic aristocratic summer retreat with grand 19th-century manors',
    description: 'The traditional northern aristocracy enclave. Carriage rides, Kefalari Park, historic summer mansions, lush plane trees, and luxury designer boutiques.',
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80',
    propertyCount: 20,
    highlights: ['Kefalari Park & Plaza', 'Historic luxury villas', 'Kifisia Flower Festival', 'Premier private shopping district']
  },
  'chalandri': {
    slug: 'chalandri',
    name: 'Chalandri',
    suburbRegion: 'north-suburbs',
    regionName: 'Northern Business & Residential',
    tagline: 'Vibrant pedestrian center, buzzing gastronomy, and cultural scene',
    description: 'One of Athens’ most lively suburban centers. Extensive pedestrian-only streets, renowned independent cafes, bars, and effortless metro access.',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
    propertyCount: 15,
    highlights: ['Pedestrian shopping network', 'Vibrant nightlife & brunch culture', 'Chalandri & Agia Paraskevi Metro stations', 'Diverse residential options']
  },
  'agia-paraskevi': {
    slug: 'agia-paraskevi',
    name: 'Agia Paraskevi',
    suburbRegion: 'north-suburbs',
    regionName: 'Northern Business & Residential',
    tagline: 'Lush foothill living at the base of Mount Hymettus',
    description: 'Sprawled across the base of Mount Hymettus. Home to Deree (The American College of Greece), national research centers, and pine-scented residential avenues.',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
    propertyCount: 13,
    highlights: ['Mount Hymettus hiking & trails', 'The American College of Greece (Deree)', 'Fast route to Athens Airport', 'Fresh mountain breeze']
  },
  'neo-psychiko': {
    slug: 'neo-psychiko',
    name: 'Neo Psychiko',
    suburbRegion: 'north-suburbs',
    regionName: 'Northern Business & Residential',
    tagline: 'Diplomatic quarter with manicured garden enclaves',
    description: 'Bordering the elite embassy district of Old Psychiko. Low-density garden homes, upscale cafes on Dimokratias Avenue, and high security.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    propertyCount: 12,
    highlights: ['Embassy district security', 'Dimokratias Avenue bistros', 'Close to Athens City Center & Kifisias', 'Lush residential greenery']
  },
  'holargos': {
    slug: 'holargos',
    name: 'Holargos',
    suburbRegion: 'north-suburbs',
    regionName: 'Northern Business & Residential',
    tagline: 'Historic birthplace of Pericles with tranquil parks and metro ease',
    description: 'Named after the birthplace of Pericles, Holargos is a clean, tranquil, and highly connected suburb with direct blue-line metro to Syntagma and the Airport.',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80',
    propertyCount: 10,
    highlights: ['Holargos Blue Metro Station', 'Direct 15-min to Syntagma', 'Quiet tree-lined residential streets', 'High family livability index']
  }
};

export const PROPERTIES_DATA: Property[] = [
  // Specific requested IDs
  {
    id: '880475',
    slug: 'penthouse-kolonaki-view-880475',
    title: 'Executive Panoramic Penthouse in Kolonaki',
    areaSlug: 'kolonaki',
    suburbRegion: 'city-center',
    neighborhoodName: 'Kolonaki',
    city: 'Athens',
    street: 'Patriarchou Ioakeim 32',
    zip: '106 75',
    price: 2450,
    bedrooms: 2,
    baths: 2,
    sizeSqM: 110,
    floor: '5th Floor Penthouse',
    energyClass: 'A+',
    images: [
      '/sites/default/files/styles/property_list/public/residence/1058/1-2.jpg?itok=ztrNXoKB',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80'
    ],
    featured: true,
    amenities: ['Lycabettus & Acropolis Views', 'Private Roof Terrace', 'High-Speed Fiber (500Mbps)', 'Autonomous Heat Pump', 'Bi-weekly Maid Service', 'Wine Cellar', 'All Utility Bills Paid'],
    description: 'A masterclass in modern Greek luxury situated in the epicenter of Kolonaki. Boasting custom walnut millwork, marble bathrooms, dual terraces with direct Acropolis sightlines, and 24/7 building concierge.'
  },
  {
    id: '640448',
    slug: 'coastal-suite-glyfada-640448',
    title: 'Athenian Riviera Coastal Suite in Glyfada',
    areaSlug: 'glyfada',
    suburbRegion: 'south-suburbs',
    neighborhoodName: 'Glyfada',
    city: 'Athens',
    street: 'Poseidonos Ave & Metaxa',
    zip: '166 74',
    price: 2600,
    bedrooms: 3,
    baths: 2,
    sizeSqM: 135,
    floor: '3rd Floor',
    energyClass: 'A',
    images: [
      '/sites/default/files/styles/property_list/public/residence/1061/1.jpg?itok=UsYtgvAl',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1000&q=80'
    ],
    featured: true,
    amenities: ['300m to Asteras Beach', 'Underground Parking', 'Large Covered Veranda', 'Smart HVAC', 'Dedicated Executive Desk', 'Fiber Internet (300Mbps)', 'Zero Utility Surcharges'],
    description: 'Experience refined Mediterranean living. Just a stroll from Glyfada’s shopping promenade and beaches, featuring light-washed open interiors and high-specification kitchen appliances.'
  },
  {
    id: '660442',
    slug: 'business-suite-marousi-660442',
    title: 'Corporate Executive Suite in Marousi Hub',
    areaSlug: 'marousi',
    suburbRegion: 'north-suburbs',
    neighborhoodName: 'Marousi',
    city: 'Athens',
    street: 'Kifisias Ave 64',
    zip: '151 24',
    price: 1590,
    bedrooms: 2,
    baths: 1,
    sizeSqM: 92,
    floor: '2nd Floor',
    energyClass: 'A+',
    images: [
      '/sites/default/files/styles/property_list/public/residence/1053/1.jpg?itok=DZvPUlPW',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1000&q=80'
    ],
    featured: true,
    amenities: ['Walk to Golden Hall & OAKA', 'Dual 4K Monitor Workstation', 'High-Speed Fiber (500Mbps)', 'Reserved Garage Parking', 'Autonomous Heating', 'Bi-weekly Housekeeping'],
    description: 'Designed specifically for multinational executives and consultants. Direct accessibility to Attiki Odos, corporate headquarters, and Neratziotissa metro.'
  },
  {
    id: '320413',
    slug: 'acropolis-heritage-loft-320413',
    title: 'Heritage Acropolis View Loft in Akropoli',
    areaSlug: 'akropoli',
    suburbRegion: 'city-center',
    neighborhoodName: 'Akropoli',
    city: 'Athens',
    street: 'Makrygianni 18',
    zip: '117 42',
    price: 1850,
    bedrooms: 2,
    baths: 1.5,
    sizeSqM: 90,
    floor: '4th Floor',
    energyClass: 'B+',
    images: [
      '/sites/default/files/styles/property_list/public/residence/1060/1.jpg?itok=UxtVXNL1',
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1000&q=80'
    ],
    featured: true,
    amenities: ['Direct Acropolis Sightline', 'Stone Fireplace', 'Parquet Floors', 'Walk to Museum & Metro', 'Nespresso Coffee Bar', 'Ultra-fast Wi-Fi'],
    description: 'Step into classic Athenian grandeur. A stone’s throw from the Acropolis Museum on a peaceful pedestrian street, equipped with all modern conveniences.'
  },

  // Additional Real Properties from Upstream
  {
    id: '110520',
    slug: 'apartment-akropoli-110520',
    title: 'Modern Furnished Apartment in Akropoli',
    areaSlug: 'akropoli',
    suburbRegion: 'city-center',
    neighborhoodName: 'Akropoli',
    city: 'Athens',
    street: 'Rovertou Galli 25',
    zip: '117 42',
    price: 1580,
    bedrooms: 2,
    baths: 1,
    sizeSqM: 85,
    floor: '3rd Floor',
    energyClass: 'A',
    images: ['/sites/default/files/styles/property_list/public/residence/1060/1.jpg?itok=UxtVXNL1'],
    featured: false,
    amenities: ['Balcony', 'Fiber WiFi', 'Work Desk', 'Modern Kitchen', 'Bi-weekly Cleaning', 'All Utilities Included'],
    description: 'Turnkey executive 2-bedroom home in premier central Athens location.'
  },
  {
    id: '330519',
    slug: 'apartment-kolonaki-330519',
    title: 'Designer Residence in Kolonaki High Quarter',
    areaSlug: 'kolonaki',
    suburbRegion: 'city-center',
    neighborhoodName: 'Kolonaki',
    city: 'Athens',
    street: 'Sina 22',
    zip: '106 75',
    price: 2390,
    bedrooms: 2,
    baths: 1.5,
    sizeSqM: 102,
    floor: '4th Floor',
    energyClass: 'A',
    images: ['/sites/default/files/styles/property_list/public/residence/1058/1-2.jpg?itok=ztrNXoKB'],
    featured: false,
    amenities: ['Elevator', 'Designer Furniture', 'Concierge', 'Wine Cooler', 'All Utilities Included'],
    description: 'Sophisticated living in Athens’ premier fashion and diplomatic quarter.'
  },
  {
    id: '860518',
    slug: 'grand-akropoli-860518',
    title: 'Spacious Grand Apartment in Akropoli',
    areaSlug: 'akropoli',
    suburbRegion: 'city-center',
    neighborhoodName: 'Akropoli',
    city: 'Athens',
    street: 'Kallisperi 7-9',
    zip: '117 42',
    price: 1850,
    bedrooms: 3,
    baths: 2,
    sizeSqM: 125,
    floor: '3rd Floor',
    energyClass: 'B+',
    images: ['/sites/default/files/styles/property_list/public/residence/1057/1.jpg?itok=mabgAa-b'],
    featured: false,
    amenities: ['3 Full Bedrooms', 'Dual Bathrooms', 'Veranda', 'Full Laundry', 'Elevator'],
    description: 'Generous 3-bedroom sanctuary ideal for corporate relocations and families.'
  },
  {
    id: '150508',
    slug: 'minimal-kolonaki-150508',
    title: 'Boutique Minimal Loft in Kolonaki',
    areaSlug: 'kolonaki',
    suburbRegion: 'city-center',
    neighborhoodName: 'Kolonaki',
    city: 'Athens',
    street: 'Skoufa 41',
    zip: '106 76',
    price: 1470,
    bedrooms: 1,
    baths: 1,
    sizeSqM: 58,
    floor: '2nd Floor',
    energyClass: 'A',
    images: ['/sites/default/files/styles/property_list/public/residence/1045/1-2.jpg?itok=pXlbs8Co'],
    featured: false,
    amenities: ['Ergonomic Workspace', 'King Bed', 'Rain Shower', 'Walk to Syntagma', 'Quiet Street'],
    description: 'Chic urban pied-à-terre offering maximum comfort and functionality for solo professionals.'
  },
  {
    id: '340513',
    slug: 'apartment-glyfada-340513',
    title: 'Riviera Luxury Apartment in Glyfada',
    areaSlug: 'glyfada',
    suburbRegion: 'south-suburbs',
    neighborhoodName: 'Glyfada',
    city: 'Athens',
    street: 'Laodikis 34',
    zip: '165 61',
    price: 2480,
    bedrooms: 3,
    baths: 2,
    sizeSqM: 130,
    floor: '4th Floor',
    energyClass: 'A+',
    images: ['/sites/default/files/styles/property_list/public/residence/1061/1.jpg?itok=UsYtgvAl'],
    featured: false,
    amenities: ['Coast Proximity (400m)', 'Large Terrace', 'Garage Parking', 'Underfloor Heat', 'All Bills Paid'],
    description: 'Bask in the Athens Riviera lifestyle within walking distance of the coast.'
  },
  {
    id: '920164',
    slug: 'apartment-glyfada-920164',
    title: 'Seaside Modern Retreat in Glyfada Center',
    areaSlug: 'glyfada',
    suburbRegion: 'south-suburbs',
    neighborhoodName: 'Glyfada',
    city: 'Athens',
    street: 'Kyprou 92',
    zip: '166 74',
    price: 1850,
    bedrooms: 2,
    baths: 1,
    sizeSqM: 88,
    floor: '2nd Floor',
    energyClass: 'A',
    images: ['/sites/default/files/styles/property_list/public/residence/1055/1.jpg?itok=WM37EddR'],
    featured: false,
    amenities: ['Balcony', 'Walk to Marina', 'Equipped Chef Kitchen', 'Fiber WiFi', 'Bi-weekly Maid'],
    description: 'Light-filled residence near luxury seaside shops and dining.'
  },
  {
    id: '270511',
    slug: 'floor-apartment-glyfada-270511',
    title: 'Floor-Through Penthouse in Glyfada Golf',
    areaSlug: 'glyfada',
    suburbRegion: 'south-suburbs',
    neighborhoodName: 'Glyfada',
    city: 'Athens',
    street: 'Konstantinou Karamanli 27',
    zip: '166 74',
    price: 2650,
    bedrooms: 3,
    baths: 2,
    sizeSqM: 145,
    floor: 'Whole 3rd Floor',
    energyClass: 'A+',
    images: ['/sites/default/files/styles/property_list/public/residence/1050/1.jpg?itok=LJE4eyxr'],
    featured: false,
    amenities: ['Private Key Elevator', 'Golf Views', 'Fireplace', 'Two Parking Spots', 'Solar Water Heating'],
    description: 'Expansive entire-floor residence overlooking the greenery of Glyfada Golf club.'
  },
  {
    id: '410515',
    slug: 'apartment-agia-paraskevi-410515',
    title: 'Tranquil Residence in Agia Paraskevi',
    areaSlug: 'agia-paraskevi',
    suburbRegion: 'north-suburbs',
    neighborhoodName: 'Agia Paraskevi',
    city: 'Athens',
    street: 'Agiou Ioannou 41',
    zip: '153 42',
    price: 1550,
    bedrooms: 2,
    baths: 1,
    sizeSqM: 90,
    floor: '1st Floor',
    energyClass: 'A',
    images: ['/sites/default/files/styles/property_list/public/residence/1059/1.jpg?itok=b9PSog5r'],
    featured: false,
    amenities: ['Pine Forest Proximity', 'Quiet Street', 'Airport Ring Road Access', 'Modern Heating'],
    description: 'Nestled beneath Mount Hymettus, offering clean air, lush greenery, and effortless connectivity.'
  },
  {
    id: '250516',
    slug: 'apartment-neo-psychiko-250516',
    title: 'Diplomatic District Residence in Neo Psychiko',
    areaSlug: 'neo-psychiko',
    suburbRegion: 'north-suburbs',
    neighborhoodName: 'Neo Psychiko',
    city: 'Athens',
    street: '25th Martiou 16',
    zip: '154 51',
    price: 1380,
    bedrooms: 2,
    baths: 1,
    sizeSqM: 78,
    floor: '2nd Floor',
    energyClass: 'B+',
    images: ['/sites/default/files/styles/property_list/public/residence/1056/1.jpg?itok=c7odvpCI'],
    featured: false,
    amenities: ['Embassy Zone Security', 'Close to Metro', 'Renovated Bath & Kitchen', 'Furnished with Style'],
    description: 'Chic residence in Athens’ traditional diplomatic district. Quiet and highly accessible.'
  },
  {
    id: '480332',
    slug: 'floor-apartment-chalandri-480332',
    title: 'Garden Floor Apartment in Chalandri Center',
    areaSlug: 'chalandri',
    suburbRegion: 'north-suburbs',
    neighborhoodName: 'Chalandri',
    city: 'Athens',
    street: 'Platonos 48',
    zip: '152 33',
    price: 1550,
    bedrooms: 2,
    baths: 1,
    sizeSqM: 95,
    floor: 'Ground & Garden',
    energyClass: 'A',
    images: ['/sites/default/files/styles/property_list/public/residence/1054/1-2.jpg?itok=3sZjSzwi'],
    featured: false,
    amenities: ['Private Garden Patio', 'Walk to Chalandri Market', 'Pet Friendly', 'Modern Autonomous Heat'],
    description: 'Charming garden residence in vibrant Chalandri with renowned culinary and pedestrian squares.'
  },
  {
    id: '720317',
    slug: 'floor-apartment-marousi-720317',
    title: 'Corporate Residence in Marousi Business Hub',
    areaSlug: 'marousi',
    suburbRegion: 'north-suburbs',
    neighborhoodName: 'Marousi',
    city: 'Athens',
    street: 'Kifisias 72',
    zip: '151 24',
    price: 1540,
    bedrooms: 2,
    baths: 1,
    sizeSqM: 92,
    floor: '2nd Floor',
    energyClass: 'A+',
    images: ['/sites/default/files/styles/property_list/public/residence/1053/1.jpg?itok=DZvPUlPW'],
    featured: false,
    amenities: ['Kifisias Proximity', 'Workstation with Dual Monitors', 'High-Speed Fiber (500Mbps)', 'Underground Parking'],
    description: 'Tailored specifically for business travelers, consultants, and IT specialists.'
  },
  // Suburb-specific units for Voula, Vouliagmeni, Kifisia, Mets, Pagrati
  {
    id: '550101',
    slug: 'vouliagmeni-pine-retreat-550101',
    title: 'Luxury Peninsula Villa Suite in Vouliagmeni',
    areaSlug: 'vouliagmeni',
    suburbRegion: 'south-suburbs',
    neighborhoodName: 'Vouliagmeni',
    city: 'Athens',
    street: 'Apollonos 14',
    zip: '166 71',
    price: 3200,
    bedrooms: 3,
    baths: 2.5,
    sizeSqM: 160,
    floor: 'Villa Ground & First',
    energyClass: 'A+',
    images: ['https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80'],
    featured: true,
    amenities: ['Walking Distance to Astir Beach', 'Private Garden & Plunge Pool', 'Pine Forest Surroundings', 'Daily Concierge', 'Secure Gated Grounds'],
    description: 'Exclusive resort-style residence positioned on the prestigious Vouliagmeni peninsula.'
  },
  {
    id: '550102',
    slug: 'voula-coastal-residence-550102',
    title: 'Contemporary Sea-Breeze Apartment in Voula',
    areaSlug: 'voula',
    suburbRegion: 'south-suburbs',
    neighborhoodName: 'Voula',
    city: 'Athens',
    street: 'Vasileos Pavlou 55',
    zip: '166 73',
    price: 2200,
    bedrooms: 2,
    baths: 2,
    sizeSqM: 110,
    floor: '2nd Floor',
    energyClass: 'A',
    images: ['https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1000&q=80'],
    featured: false,
    amenities: ['Beachside (350m)', 'Large Wrap-around Balcony', 'Energy Class A', 'Underfloor Heating', 'Covered Parking'],
    description: 'Sun-drenched seaside comfort in premier Voula with green avenues and quiet residential privacy.'
  },
  {
    id: '550103',
    slug: 'kifisia-manor-suite-550103',
    title: 'Aristocratic Garden Residence in Kifisia',
    areaSlug: 'kifisia',
    suburbRegion: 'north-suburbs',
    neighborhoodName: 'Kifisia',
    city: 'Athens',
    street: 'Kolokotroni 12',
    zip: '145 62',
    price: 2500,
    bedrooms: 3,
    baths: 2,
    sizeSqM: 140,
    floor: '1st Floor',
    energyClass: 'A',
    images: ['https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1000&q=80'],
    featured: false,
    amenities: ['Kefalari Park Proximity', 'Fireplace', 'Hardwood Parquet Floors', 'Private Storage', 'Bi-weekly Cleaning'],
    description: 'Classic elegance and high ceilings surrounded by plane trees and historic Kifisia estates.'
  },
  {
    id: '550104',
    slug: 'mets-bohemian-terrace-550104',
    title: 'Bohemian Terrace Home in Mets',
    areaSlug: 'mets',
    suburbRegion: 'city-center',
    neighborhoodName: 'Mets',
    city: 'Athens',
    street: 'Markou Mousourou 21',
    zip: '116 36',
    price: 1650,
    bedrooms: 2,
    baths: 1,
    sizeSqM: 80,
    floor: '2nd Floor',
    energyClass: 'B+',
    images: ['https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1000&q=80'],
    featured: false,
    amenities: ['Terrace facing Ardittos Hill', 'High Ceilings', 'Walk to Panathenaic Stadium', 'Fast WiFi', 'Artistic Decor'],
    description: 'Charming and peaceful residence in Mets, the artistic quarter of central Athens.'
  },
  {
    id: '550105',
    slug: 'pagrati-modern-loft-550105',
    title: 'Contemporary Studio Loft in Pagrati Square',
    areaSlug: 'pagrati',
    suburbRegion: 'city-center',
    neighborhoodName: 'Pagrati',
    city: 'Athens',
    street: 'Archelaou 19',
    zip: '116 35',
    price: 1250,
    bedrooms: 1,
    baths: 1,
    sizeSqM: 52,
    floor: '3rd Floor',
    energyClass: 'A',
    images: ['https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80'],
    featured: false,
    amenities: ['Steps from Archelaou Cafes', 'Smart TV & Soundbar', 'Ergonomic Desk', 'Rain Shower', 'All Utilities Included'],
    description: 'Perfect for digital nomads and young professionals living in Athens’ liveliest creative quarter.'
  }
];

export const COMPANY_DETAILS = {
  name: 'YESTAY Homes',
  tagline: 'Your Executive Stay in Athens',
  phone: '+30 210 3486 606',
  email: 'info@yestayhomes.com',
  address: '111, Iera Odos Str. & 7, Ag. Annis Str., Votanikos, 11855 Athens, Greece',
  workingHours: 'Mon - Fri: 09:00 - 18:00 (EET)',
  awards: [
    {
      name: 'Luxury Lifestyle Awards',
      desc: 'Winner - Best Luxury Serviced Apartments in Athens',
      image: '/sites/default/files/luxury_lifestyle_awards.svg'
    },
    {
      name: 'Tourism Awards 2024',
      desc: 'Silver Winner - Executive Long-Term Hospitality',
      image: '/sites/default/files/tourism_awards_2024_silver.svg'
    },
    {
      name: 'Hotel of the Year 2025',
      desc: 'Gold Award - Best Digital Nomad Stays & Serviced Residences',
      image: '/sites/default/files/hotel_of_the_year_2025_gold_best_digital_nomad.svg'
    }
  ]
};

export const YESTAY_PROPERTIES: Property[] = PROPERTIES_DATA.map((p) => ({
  ...p,
  image: p.images[0],
  neighborhood: p.neighborhoodName,
  area:
    p.suburbRegion === 'city-center'
      ? 'Athens City Center'
      : p.suburbRegion === 'south-suburbs'
      ? 'South Suburbs (Riviera)'
      : 'North Suburbs',
  path: p.path || `/property/${p.id}`,
}));

export const COMPANY_INFO = {
  ...COMPANY_DETAILS,
  website: 'https://yestayhomes.com',
  locations: [
    { name: 'Athens City Center', count: 55, path: '/rentals/city-center', desc: 'Akropoli, Kolonaki, Mets, Pagrati, Hilton' },
    { name: 'South Suburbs (Athenian Riviera)', count: 90, path: '/rentals/south-suburbs', desc: 'Glyfada, Vouliagmeni, Voula, Alimos' },
    { name: 'North Suburbs', count: 90, path: '/rentals/north-suburbs', desc: 'Marousi, Chalandri, Psychiko, Kifisia' }
  ],
  popularPaths: [
    { label: 'Homepage', path: '/' },
    { label: 'Rentals Directory', path: '/rentals' },
    { label: 'Athens City Center', path: '/rentals/city-center' },
    { label: 'Kolonaki Suites', path: '/rentals/kolonaki' },
    { label: 'Akropoli View', path: '/rentals/akropoli' },
    { label: 'South Suburbs (Riviera)', path: '/rentals/south-suburbs' },
    { label: 'Glyfada Luxury', path: '/rentals/glyfada' },
    { label: 'North Suburbs', path: '/rentals/north-suburbs' },
    { label: 'Marousi Corporate', path: '/rentals/marousi' },
    { label: 'About Us', path: '/about' },
    { label: 'Car Leasing', path: '/services/car-leasing' },
    { label: 'Services & Support', path: '/services/support' },
    { label: 'Property Owners', path: '/property-owners' },
    { label: 'Contact', path: '/contact' }
  ]
};

