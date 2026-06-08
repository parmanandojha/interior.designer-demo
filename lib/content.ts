export type Project = {
  slug: string;
  idx: string;
  tag: "Residential" | "Commercial" | "Developer";
  title: string;
  year: string;
  place: string;
  area: string;
  client: string;
  cover: string;
  summary: string;
  body: string[];
  services: string[];
  gallery: string[];
};

export const projects: Project[] = [
  {
    slug: "lincoln-park-greystone",
    idx: "01",
    tag: "Residential",
    title: "Lincoln Park Greystone",
    year: "2025",
    place: "Lincoln Park, Chicago",
    area: "3,200 sqft",
    client: "Private residence",
    cover: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=2400&q=85",
    summary: "A turn-of-the-century greystone reworked so a two-bedroom lives like a three — without touching the façade.",
    body: [
      "The brief was deceptively simple: keep the soul of the original greystone, but make it work for a young family that actually lives in every room. We started with the plan, not the finishes — relocating the kitchen to the garden level and opening the parlour floor so light runs the full depth of the house.",
      "Material choices were restrained on purpose: white oak, lime plaster, unlacquered brass that will patina over the years. The result reads calm and inevitable, like it could not have been arranged any other way."
    ],
    services: ["Full interior design", "Spatial planning", "Custom millwork", "Lighting design", "Furniture & styling"],
    gallery: [
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1400&q=85",
      "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=1400&q=85",
      "https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?w=1400&q=85",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1400&q=85"
    ]
  },
  {
    slug: "cafe-sable",
    idx: "02",
    tag: "Commercial",
    title: "Café Sable",
    year: "2025",
    place: "West Loop, Chicago",
    area: "2,200 sqft",
    client: "Café Sable",
    cover: "https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=2400&q=85",
    summary: "A neighbourhood café designed for dwell time — foot traffic up 38% and a room people photograph without being asked.",
    body: [
      "Hospitality is a numbers business, so we designed for them: a counter that pulls people in off the street, banquettes that turn tables faster at lunch and slower at night, and a material palette that survives a thousand coffees a day.",
      "The lighting does the heavy lifting — warm enough to linger at 4pm, flattering enough that every table becomes a post."
    ],
    services: ["Concept & brand environment", "Customer journey", "Joinery & counters", "Lighting design", "Material specification"],
    gallery: [
      "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1400&q=85",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=1400&q=85",
      "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=1400&q=85",
      "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?w=1400&q=85"
    ]
  },
  {
    slug: "fulton-market-model-unit",
    idx: "03",
    tag: "Developer",
    title: "Fulton Market Model Unit",
    year: "2024",
    place: "Fulton Market, Chicago",
    area: "1,800 sqft",
    client: "Related Midwest",
    cover: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=2400&q=85",
    summary: "A model unit built to sell the floor before launch — three units, three sell-outs.",
    body: [
      "Model units are sales tools, not homes — but they only work if they feel like one. We staged a complete life: the right art, the right books, the smell of a place someone already loves.",
      "The spec package was designed to be repeatable across the tower, so the developer could deliver the same standard at scale without re-pricing every floor."
    ],
    services: ["Model unit strategy", "Repeatable spec package", "Furniture & art", "On-site oversight"],
    gallery: [
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1400&q=85",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1400&q=85",
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=1400&q=85",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1400&q=85"
    ]
  },
  {
    slug: "lake-geneva-lake-house",
    idx: "04",
    tag: "Residential",
    title: "Lake Geneva Lake House",
    year: "2024",
    place: "Lake Geneva, WI",
    area: "6,800 sqft",
    client: "Private residence",
    cover: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=2400&q=85",
    summary: "A weekend house on the water, built around the view and the way a family gathers.",
    body: [
      "Every decision deferred to the lake. Sightlines were planned from the front door through to the water, glazing was maximised, and the interior palette was kept quiet so the landscape stays the loudest thing in the room.",
      "Durable, lake-ready materials throughout — this is a house meant to be used in wet swimsuits and muddy boots, not protected from its own family."
    ],
    services: ["Full interior design", "Architectural collaboration", "Custom millwork", "Furniture & styling"],
    gallery: [
      "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?w=1400&q=85",
      "https://images.unsplash.com/photo-1618220179428-22790b461013?w=1400&q=85",
      "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=1400&q=85",
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1400&q=85"
    ]
  },
  {
    slug: "meridian-office",
    idx: "05",
    tag: "Commercial",
    title: "Meridian Office",
    year: "2024",
    place: "The Loop, Chicago",
    area: "8,000 sqft",
    client: "Meridian Partners",
    cover: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=2400&q=85",
    summary: "A workplace that earns its square footage — designed for focus, gathering, and the occasional client they want to impress.",
    body: [
      "We treated the office as a hospitality problem. The best spaces in the plan went to the people, not the perimeter offices — a long communal table, quiet rooms with real acoustics, and a front of house that reads more lounge than lobby.",
      "Materials were chosen to age gracefully under hard daily use, with brass and oak warming the otherwise crisp shell."
    ],
    services: ["Workplace strategy", "Spatial planning", "Joinery", "Lighting & acoustics"],
    gallery: [
      "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1400&q=85",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=1400&q=85",
      "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=1400&q=85",
      "https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?w=1400&q=85"
    ]
  },
  {
    slug: "lakeshore-drive-penthouse",
    idx: "06",
    tag: "Residential",
    title: "Lakeshore Drive Penthouse",
    year: "2023",
    place: "Streeterville, Chicago",
    area: "6,400 sqft",
    client: "Private residence",
    cover: "https://images.unsplash.com/photo-1618220179428-22790b461013?w=2400&q=85",
    summary: "A full-floor penthouse where the city and the lake do the decorating — our job was to get out of the way, beautifully.",
    body: [
      "With a 270-degree view, restraint was the whole strategy. We kept the palette to warm neutrals and let the windows carry the drama, layering texture and bespoke furniture so the rooms feel intimate despite the scale.",
      "Lighting was engineered to never compete with the skyline at night — the apartment dims into the view rather than fighting it."
    ],
    services: ["Full interior design", "Custom furniture", "Lighting design", "Art curation"],
    gallery: [
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1400&q=85",
      "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=1400&q=85",
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1400&q=85",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1400&q=85"
    ]
  }
];

export type Article = {
  slug: string;
  tag: string;
  date: string;
  read: string;
  title: string;
  img: string;
  excerpt: string;
  body: string[];
};

export const articles: Article[] = [
  {
    slug: "light-at-5pm-in-january",
    tag: "Journal",
    date: "May 2026",
    read: "4 min read",
    title: "How light changes a room at 5pm in January",
    img: "https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?w=2000&q=85",
    excerpt: "Chicago winters are the truest test of a room. Here is how we design for the hour when the sun is already gone.",
    body: [
      "There is a moment around 5pm in a Chicago January when the daylight is simply finished. Most interiors are designed for the photograph — bright, even, midday. We design for this hour instead, because it is the one your family actually lives in.",
      "The trick is layers. A single overhead source flattens a room and makes it feel like an office. We build three to five layers of light at different heights — table lamps, sconces, a low glow under joinery — each on its own dimmer, so the room can change character as the evening goes on.",
      "Warmth matters as much as placement. We specify 2700K and lower, and we test every fixture on site after dark, because a room that photographs beautifully at noon can feel clinical at night. The goal is simple: a place you want to be when it is cold and dark outside."
    ]
  },
  {
    slug: "why-we-specify-white-oak-and-lime-plaster",
    tag: "Notes",
    date: "Apr 2026",
    read: "3 min read",
    title: "Why we still specify white oak and lime plaster",
    img: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=2000&q=85",
    excerpt: "Trends come and go. We keep returning to a short list of materials that get better with age, not worse.",
    body: [
      "Most finishes peak the day they are installed and decline from there. We are interested in the opposite — materials that earn their keep over a decade.",
      "White oak takes a knock and a spill and simply looks more lived-in for it. Lime plaster moves with light across the day in a way paint never will. Unlacquered brass darkens into something nobody could fake.",
      "Restraint is the through-line. A short, honest material palette ages into a coherent whole, while a long list of trend-led finishes tends to date together, all at once."
    ]
  },
  {
    slug: "behind-a-lincoln-park-greystone",
    tag: "Studio",
    date: "Mar 2026",
    read: "5 min read",
    title: "Behind a Lincoln Park greystone, room by room",
    img: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=2000&q=85",
    excerpt: "A walk through one of our favourite recent projects — and the decisions that made a two-bed live like a three.",
    body: [
      "When the family found us, the greystone had good bones and a bad plan. Three small rooms on the parlour floor, a kitchen tucked in the dark, and a façade we were not allowed to touch.",
      "We moved the kitchen down to the garden level and opened the parlour floor end to end. Suddenly light ran the full depth of the house and the 'missing' third bedroom appeared simply by using the existing volume better.",
      "The finishes came last, on purpose. Once the plan was right, the material choices almost made themselves — and the house finally feels inevitable."
    ]
  }
];
