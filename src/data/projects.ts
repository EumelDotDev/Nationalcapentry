export interface Project {
  id: string;
  slug: string;
  title: string;
  category: string;
  client: string;
  location: string;
  scope: string;
  duration: string;
  overview: string;
  challenge: string;
  solution: string;
  thumbnail: string;
  heroImage: string;
  beforeImage: string;
  afterImage: string;
  gallery: string[];
}

export const projectsData: Project[] = [
  {
    id: "01",
    slug: "the-luminary-hotel",
    title: "The Luminary Hotel",
    category: "Commercial Millwork",
    client: "Marriott Autograph Collection",
    location: "Downtown Core",
    scope: "Lobby, Bar, and Guest Room Case Goods",
    duration: "14 Weeks",
    overview: "A comprehensive millwork package for a luxury boutique hotel, demanding highly precise, custom-curved oak paneling and durable yet elegant bar fixtures.",
    challenge: "The lobby featured an undulating ceiling design that required the wall paneling to follow complex radii. Additionally, the installation schedule was extremely tight due to a fixed grand opening date.",
    solution: "We engineered custom bending plywood substrates in our shop and pre-finished all veneers to minimize on-site work. Our installation team worked staggered shifts to safely coordinate with other trades, ensuring a flawless handover three days ahead of schedule.",
    thumbnail: "/images/projects/luminary_hero_1788325837950.jpg",
    heroImage: "/images/projects/luminary_hero_1788325837950.jpg", // Hotel Lobby
    beforeImage: "/images/projects/luminary_before_1788299957396.jpg", // Raw construction
    afterImage: "/images/projects/luminary_after_1788299992067.jpg", // Finished hotel room
    gallery: [
      "/images/projects/luminary_gallery_1_1788326721024.jpg",
      "/images/projects/luminary_gallery_2_1788326815623.jpg",
      "/images/projects/luminary_gallery_3_1788327436933.jpg"
    ]
  },
  {
    id: "02",
    slug: "westend-penthouse",
    title: "Westend Penthouse",
    category: "Residential Case Goods",
    client: "Private Client",
    location: "Vancouver, BC",
    scope: "Kitchen, Wardrobes, & Custom Media Unit",
    duration: "8 Weeks",
    overview: "A complete millwork overhaul for a luxury penthouse, focusing on seamless, handle-less cabinetry and integrated high-end appliances.",
    challenge: "Condominium regulations restricted elevator usage and working hours. The design called for massive floor-to-ceiling walnut panels that could not fit through standard entryways.",
    solution: "We designed a proprietary interlocking cleat system that allowed us to split the massive panels into modular sections. Once assembled on-site, the seams were completely invisible, preserving the monolithic design intent.",
    thumbnail: "/images/projects/westend_hero_1788339405053.jpg",
    heroImage: "/images/projects/westend_hero_1788339405053.jpg",
    beforeImage: "/images/projects/westend_before_1788300017199.jpg", // Framing/woodworking
    afterImage: "/images/projects/westend_after_1788300046045.jpg", // Finished modern kitchen
    gallery: [
      "/images/projects/westend_gallery_1_1788339639031.jpg",
      "/images/projects/westend_gallery_2_1788339860216.jpg",
      "/images/projects/westend_gallery_3_1788340021809.jpg"
    ]
  },
  {
    id: "03",
    slug: "tech-hq-atrium",
    title: "Tech HQ Atrium",
    category: "Architectural Millwork",
    client: "Global Tech Firm",
    location: "Toronto, ON",
    scope: "Stadium Seating & Feature Wall",
    duration: "12 Weeks",
    overview: "A striking, multi-level architectural feature in the central atrium of a corporate headquarters, designed for all-hands meetings and casual collaboration.",
    challenge: "The stadium seating required structural integrity to support hundreds of people while maintaining the refined finish of A-grade white oak.",
    solution: "We collaborated closely with structural engineers to clad a hidden steel armature with precisely milled oak treads and risers. Integrated LED channels were milled directly into the nosing for a seamless lighting effect.",
    thumbnail: "/images/projects/tech_hero_1788340774075.jpg",
    heroImage: "/images/projects/tech_hero_1788340774075.jpg", // Atrium/Office
    beforeImage: "/images/projects/tech_before_1788300075294.jpg", // Construction beams
    afterImage: "/images/projects/tech_after_1788300105003.jpg", // Finished office
    gallery: [
      "/images/projects/tech_gallery_1_1788340968866.jpg",
      "/images/projects/tech_gallery_2_1788341327271.jpg",
      "/images/projects/tech_gallery_3_1788342718498.jpg"
    ]
  },
  {
    id: "04",
    slug: "heritage-restaurant",
    title: "Heritage Restaurant",
    category: "Commercial Installation",
    client: "Culinary Group",
    location: "Montreal, QC",
    scope: "Full Dining Room & Bar Refit",
    duration: "6 Weeks",
    overview: "Restoration and modernization of a historic dining space, balancing modern functional requirements with heritage preservation.",
    challenge: "Working within a 100-year-old building meant no walls were plumb or square. The new millwork had to perfectly scribe to highly irregular stone walls.",
    solution: "We utilized 3D laser scanning to capture the exact contours of the stone walls. Our CNC machines then cut the scribe panels to perfectly match the irregular surfaces before they even arrived on site.",
    thumbnail: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=2000&auto=format&fit=crop", // Restaurant
    beforeImage: "/images/projects/heritage_before_1788300129800.jpg", // Raw space
    afterImage: "/images/projects/heritage_after_1788300162406.jpg", // Finished restaurant
    gallery: [
      "/images/projects/heritage_gallery_1_1788300192327.jpg",
      "/images/projects/heritage_gallery_2_1788300203981.jpg",
      "/images/projects/heritage_gallery_3_1788300214188.jpg"
    ]
  }
];
