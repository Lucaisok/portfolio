export interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    tags: string[];
    year: string;
    details: string;
    url?: string;
    codeUrl?: string;
}

export const projects: Project[] = [
    {
        id: 1,
        title: 'Sonnen App',
        description: 'A high-performance e-commerce solution with real-time inventory, secure payments, and advanced analytics. Built to handle thousands of concurrent users.',
        image: '/projects/sonnen/cover.png',
        tags: ['React Native', 'Typescript', 'GraphQL'],
        year: '2023-2025',
        url: 'https://play.google.com/store/apps/details?id=com.sonnen_mobile&pli=1',
        details: "Company Project • Mobile App"
    },
    {
        id: 2,
        title: 'House of Rome',
        description: 'Enterprise-grade analytics platform for social media management. Features real-time data processing, automation workflows, and team collaboration tools.',
        image: '/projects/houseofrome/cover.png',
        tags: ['Next.js', 'Typescript', 'Linux'],
        year: '2026',
        url: 'https://houseofrome.org/',
        codeUrl: 'https://github.com/Lucaisok/house-of-rome',
        details: "Solo Project • Website"
    },
    {
        id: 3,
        title: 'Smart it',
        description: 'Cross-platform mobile application with offline-first architecture. Tracks workouts, nutrition, and progress with cloud sync and social features.',
        image: '/projects/smartit/cover.png',
        tags: ['Next.js', 'Typescript', 'Linux'],
        year: '2026',
        url: 'https://smartit-srl.com/',
        codeUrl: 'https://github.com/Lucaisok/smartit_v2',
        details: "Solo Project • Website"
    },
    {
        id: 4,
        title: 'Noloni',
        description: 'Cross-platform mobile application with offline-first architecture. Tracks workouts, nutrition, and progress with cloud sync and social features.',
        image: '/projects/noloni/cover1.png',
        tags: ['React Native', 'Node.js', 'Typescript', 'Docker'],
        year: '2021-2022',
        details: "Company Project • Mobile App",
        url: "https://apps.apple.com/de/app/noloni/id1573238345"
    }
];