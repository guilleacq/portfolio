export const projects = [
  {
    id: 1,
    slug: 'cicama-habit-tracker',
    title: 'CICAMA Habit Tracker',
    status: 'In Development', // In Development, Complete
    role: 'Lead Developer & Architect',
    company: 'FLUXER',
    period: '2024 - Present',
    type: 'Mobile App',
    description:
      'Cross-platform mobile application designed to help users build and maintain healthy habits through personalized tracking and smart reminders.',
    tags: ['React Native', 'JavaScript', 'Mobile', 'Algorithms', 'Full Stack'],
    links: [
      { label: 'GitHub', url: 'https://github.com' },
      { label: 'Live Demo', url: 'https://example.com' }
    ],
    overview: `
      Cross-platform mobile application designed to help users build and maintain healthy habits through personalized tracking and smart reminders. 
      The project focuses on user experience and behavioral psychology to ensure long-term engagement.
      
      We implemented a robust offline-first architecture to ensure users can track their habits even without an internet connection, syncing data seamlessly when they come back online.
    `,
    highlights: [
      'Architected the entire application from scratch using React Native',
      'Implemented custom habit-tracking algorithms for personalized user engagement',
      'Designed scalable state management for offline-first functionality',
      'Integrated push notifications and local reminders'
    ],
    images: [
      'https://via.placeholder.com/800x600?text=Project+Image+1',
      'https://via.placeholder.com/800x600?text=Project+Image+2',
      'https://via.placeholder.com/800x600?text=Project+Image+3'
    ]
  },
  {
    id: 2,
    slug: 'vr-games-experiences',
    title: 'VR Games & Experiences',
    status: 'Complete',
    role: 'Unity Game Developer',
    company: 'Kreitech',
    period: '2021 - 2023',
    type: 'Game Development',
    description:
      'High-performance videogames and immersive virtual reality experiences for Meta Quest 2, developed in an agile team environment.',
    tags: ['Unity 3D', 'C#', 'VR', 'Meta Quest', 'Agile', 'Git'],
    links: [
      { label: 'Website', url: 'https://kreitech.io' }
    ],
    overview: `
      High-performance videogames and immersive virtual reality experiences for Meta Quest 2, developed in an agile team environment.
      The focus was on creating intuitive interactions and maintaining high frame rates for a comfortable VR experience.
    `,
    highlights: [
      'Engineered performant gameplay mechanics in C# for VR environments',
      'Collaborated with cross-functional teams translating client feedback into features',
      'Managed Git workflows ensuring code integrity across multiple branches'
    ],
    images: [
      'https://via.placeholder.com/800x600?text=VR+Image+1',
      'https://via.placeholder.com/800x600?text=VR+Image+2'
    ]
  },
  {
    id: 3,
    slug: 'artist-ecommerce-platform',
    title: 'Artist E-Commerce Platform',
    status: 'Live',
    role: 'Full Stack Developer',
    company: 'FLUXER',
    period: '2024',
    type: 'Web Development',
    description:
      'Custom e-commerce solution for an independent artist, establishing their first direct-to-consumer sales channel with integrated payment processing.',
    tags: ['WordPress', 'E-Commerce', 'Web Design', 'SEO', 'Full Stack'],
    links: [],
    overview: `
      Custom e-commerce solution for an independent artist, establishing their first direct-to-consumer sales channel with integrated payment processing.
    `,
    highlights: [
      'Designed and deployed complete e-commerce infrastructure',
      'Integrated payment processing and inventory management',
      'Implemented SEO best practices resulting in organic traffic growth'
    ],
    images: []
  },
  {
    id: 4,
    slug: 'smb-digital-presence',
    title: 'SMB Digital Presence',
    status: 'Ongoing',
    role: 'Web Consultant',
    company: 'FLUXER',
    period: '2024 - Present',
    type: 'Web Development',
    description:
      'Consulting and development services for local businesses (Ginza, FRADEC) to establish and improve their digital presence through modern, responsive websites.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Consulting', 'Responsive Design'],
    links: [],
    overview: `
      Consulting and development services for local businesses (Ginza, FRADEC) to establish and improve their digital presence through modern, responsive websites.
    `,
    highlights: [
      'Delivered responsive landing pages improving brand visibility',
      'Consulted on digital strategy and web presence optimization',
      'Built with modern HTML/CSS/JS ensuring cross-browser compatibility'
    ],
    images: []
  }
];
