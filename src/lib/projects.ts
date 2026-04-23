export interface Project {
    id: number;
    slug: string;
    title: string;
    shortDescription: string;
    description: string;
    cover: string;
    tags: string[];
    year: string;
    details: string;
    heroImage: string;
    wideImage: string;
    images: string[];
    url: string;
    codeUrl?: string;
}

export const projects: Project[] = [
    {
        id: 1,
        slug: 'sonnen-app',
        title: 'Sonnen App',
        shortDescription: `Mobile application that enables users to monitor and manage their home energy system, providing real-time insights into solar production, battery status, and energy consumption.`,
        description: `The Sonnen App is a mobile application designed to give users full visibility and control over their home energy ecosystem, including solar panels, battery storage, and connected devices such as EV chargers.

The app provides real-time and historical data on energy production and consumption, allowing users to better understand and optimize their energy usage. Through an intuitive interface, users can track energy flows, monitor battery levels, and adjust system settings such as backup reserves to ensure reliability during outages.  ￼

In addition to data visualization, the app integrates with Sonnen’s broader energy platform, enabling access to energy contracts and participation in a distributed energy network. The goal is to empower users to increase energy independence, reduce costs, and actively contribute to a more sustainable energy system.  ￼

From a development perspective, the application focuses on performance, usability, and scalability, supporting tens of thousands of active users while integrating with complex backend and IoT systems.`,
        cover: '/projects/sonnen/cover1.jpg',
        heroImage: '/projects/sonnen/hero1.png',
        wideImage: '/projects/sonnen/sonnen-wide.png',
        images: [
            '/projects/sonnen/sonnen1.png',
            '/projects/sonnen/sonnen2.png',
        ],
        tags: ['React Native', 'Typescript', 'GraphQL'],
        year: '2023-2025',
        url: 'https://play.google.com/store/apps/details?id=com.sonnen_mobile&pli=1',
        details: "Company Project • Mobile App"
    },
    {
        id: 4,
        slug: 'noloni',
        title: 'Noloni',
        shortDescription: 'Cross-platform mobile video conferencing application with a full-stack architecture, enabling real-time communication and user management across iOS and Android.',
        description: `Noloni is a cross-platform video conferencing application developed for iOS and Android, built with React Native and supported by a Node.js backend.

The platform enables users to create and join video calls, manage sessions, and interact through a responsive mobile interface. On the backend side, it includes API services for user management, session handling, and real-time communication workflows, deployed on a Linux-based environment.

In addition to the mobile application, the project included the development of complementary web tools, such as an internal dashboard for monitoring usage metrics and a customer support interface for managing user interactions.

Working in a startup environment, the project required full-stack ownership across the entire development lifecycle — from feature implementation and UI development to backend integration and deployment — with a strong focus on delivering a functional and scalable product.`,
        cover: '/projects/noloni/cover2.webp',
        heroImage: '/projects/noloni/noloni-hero.png',
        wideImage: '/projects/noloni/noloni-wide.png',
        images: [
            '/projects/noloni/noloni3.png',
            '/projects/noloni/noloni2.png',
        ],
        tags: ['React Native', 'Node.js', 'Typescript', 'Docker'],
        year: '2021-2022',
        details: "Company Project • Mobile App",
        url: "https://apps.apple.com/de/app/noloni/id1573238345"
    },
    {
        id: 2,
        slug: 'house-of-rome',
        title: 'House of Rome',
        shortDescription: 'A multilingual booking website for a Rome-based hospitality business, featuring apartment listings, availability integration, and a seamless user experience optimized for SEO and conversions.',
        description: `House of Rome is a modern, performance-focused website developed for a short-term rental business in Rome. The platform showcases multiple apartments with dedicated pages, optimized for both search engines and user experience.

Built with a strong focus on SEO, the site implements structured metadata, multilingual routing, and optimized content architecture to improve visibility across international audiences. It integrates external booking systems for real-time availability while maintaining a fast and responsive frontend.

Particular attention was given to performance, accessibility, and mobile usability, ensuring a smooth browsing experience for users discovering and booking accommodations. The result is a scalable and SEO-ready digital presence tailored for the hospitality market.`,
        cover: '/projects/houseofrome/cover1.png',
        heroImage: '/projects/houseofrome/cover.png',
        wideImage: '/projects/houseofrome/house-wide.png',
        images: [
            '/projects/houseofrome/house3.png',
            '/projects/houseofrome/house5.png',
        ],
        tags: ['Next.js', 'Typescript', 'Linux'],
        year: '2026',
        url: 'https://houseofrome.org/',
        codeUrl: 'https://github.com/Lucaisok/house-of-rome',
        details: "Solo Project • Website"
    },
    {
        id: 3,
        slug: 'smart-it',
        title: 'Smart it',
        shortDescription: 'A redesigned corporate website for a cleaning and facility management company, focused on local SEO, lead generation, and clear service positioning',
        description: `SmartIT is a corporate website developed for a cleaning and facility management company operating in the Milan area. The project involved a complete redesign with a strong emphasis on local SEO, service clarity, and conversion optimization.

The website is structured around dedicated service pages targeting specific keywords and geographic areas, improving search engine visibility and attracting high-intent traffic. Technical SEO improvements, including canonical management, sitemap optimization, and performance enhancements, were implemented to support long-term ranking growth.

The interface is designed to communicate professionalism and trust, with clear calls to action, optimized content hierarchy, and a responsive layout. The result is a fast, scalable platform aimed at generating leads and strengthening the company’s online presence in a competitive local market.`,
        cover: '/projects/smartit/cover1.jpg',
        heroImage: '/projects/smartit/cover.jpg',
        images: [
            '/projects/smartit/hero.png',
            '/projects/smartit/cover1.jpg',
        ],
        wideImage: '/projects/smartit/smartit-wide.png',
        tags: ['Next.js', 'Typescript', 'Linux'],
        year: '2026',
        url: 'https://smartit-srl.com/',
        codeUrl: 'https://github.com/Lucaisok/smartit_v2',
        details: "Solo Project • Website"
    }
];