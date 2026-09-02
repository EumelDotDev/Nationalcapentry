export interface ServiceData {
  slug: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  image: string; // Used for Hero background and Cards
  capabilities: string[];
  projects: {
    name: string;
    description: string;
    image: string; // Used in details pages
  }[];
}

export const servicesData: ServiceData[] = [
  {
    slug: 'commercial',
    title: 'Commercial Installation',
    shortDescription: 'Extensive experience in commercial and architectural installation.',
    longDescription: 'NCI has extensive experience in commercial and architectural installation, with experienced long term employees who are dedicated to getting the job done in a professional manner with the highest possible quality. Our commercial cabinetry focuses on durability without compromising aesthetic excellence.',
    image: '/images/services/service_commercial_hero.jpg',
    capabilities: [
      'Retail display fixtures and shelving',
      'Corporate office kitchenettes & breakrooms',
      'Medical and laboratory sterile casework',
      'High-durability reception desks',
    ],
    projects: [
      {
        name: 'Medical Laboratory Setup',
        description: 'Seamless, sterile casework for a major research facility.',
        image: '/images/services/service_commercial_lab.jpg'
      },
      {
        name: 'Flagship Retail Store',
        description: 'Custom point-of-sale desks and integrated merchandise displays.',
        image: '/images/services/service_commercial_retail.jpg'
      },
      {
        name: 'Tech Headquarters',
        description: 'Modular breakout areas and integrated tech cabinetry.',
        image: '/images/services/service_commercial_tech.jpg'
      }
    ]
  },
  {
    slug: 'millwork',
    title: 'Custom Millwork',
    shortDescription: 'Intricate architectural woodwork, both decorative and structural.',
    longDescription: 'NCI has highly trained Carpenters that can manufacture and install intricate architectural woodwork, both decorative and structural. Our finishing carpentry ensures the absolute highest standard of craftsmanship for your interior environments, ensuring every corner and joint is perfectly aligned.',
    image: '/images/services/service_trim_hero.jpg',
    capabilities: [
      'Custom crown molding and baseboard installation',
      'Door and window casing',
      'Architectural staircases and railings',
      'Exterior premium wood siding finishing',
    ],
    projects: [
      {
        name: 'Luxury Staircase Railings',
        description: 'Precision installation of floating stairs and oak handrails.',
        image: '/images/services/service_trim_railings.jpg'
      },
      {
        name: 'Exterior Architectural Siding',
        description: 'Seamless integration of cedar siding on a modern home.',
        image: '/images/services/service_trim_siding.jpg'
      },
      {
        name: 'Acoustic Auditorium Trim',
        description: 'Complex angled trim and acoustic paneling for a concert hall.',
        image: '/images/services/service_trim_acoustic.jpg'
      }
    ]
  },
  {
    slug: 'residential',
    title: 'Residential Woodworking',
    shortDescription: 'Custom on-site manufacture and installation for luxury residential.',
    longDescription: 'With a combination of knowledgeable carpenters and top quality equipment, NCI can install prebuilt millwork and case goods, or manufacture and install the product to the customer’s exact specifications on site in almost any condition. Our bespoke paneling services create dramatic architectural focal points.',
    image: '/images/services/service_paneling_hero.jpg',
    capabilities: [
      'Acoustic wood slat walls',
      'Curved and organic wood paneling',
      'Custom coffered ceilings',
      'Integrated hidden doors and lighting',
    ],
    projects: [
      {
        name: 'Executive Office Suite',
        description: 'Acoustic slat paneling with integrated recessed lighting.',
        image: '/images/services/paneling-executive.png'
      },
      {
        name: 'Grand Hotel Lobby',
        description: 'Massive curved walnut paneling sweeping across the lobby.',
        image: '/images/services/paneling-lobby.png'
      },
      {
        name: 'Heritage Dining Room',
        description: 'Intricate coffered wood ceiling with period-accurate detailing.',
        image: '/images/services/paneling-ceiling.png'
      }
    ]
  }
];
