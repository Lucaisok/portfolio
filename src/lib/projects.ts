export interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    tags: string[];
    year: string;
    url: string;
    codeUrl: string;
}

export const projects: Project[] = [
    {
        id: 1,
        title: 'E-Commerce Platform',
        description: 'A high-performance e-commerce solution with real-time inventory, secure payments, and advanced analytics. Built to handle thousands of concurrent users.',
        image: 'https://images.unsplash.com/photo-1760548425425-e42e77fa38f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBkZXNpZ24lMjBjb2Rpbmd8ZW58MXx8fHwxNzc1MTE0NDgyfDA&ixlib=rb-4.1.0&q=80&w=1080',
        tags: ['React', 'Next.js', 'Node.js', 'PostgreSQL'],
        year: '2025',
        url: 'https://example.com/e-commerce',
        codeUrl: 'https://github.com/example/e-commerce',
    },
    {
        id: 2,
        title: 'Social Dashboard',
        description: 'Enterprise-grade analytics platform for social media management. Features real-time data processing, automation workflows, and team collaboration tools.',
        image: 'https://images.unsplash.com/photo-1688733720228-4f7a18681c4f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNwb25zaXZlJTIwd2Vic2l0ZSUyMGRlc2lnbnxlbnwxfHx8fDE3NzUxMTg0NTF8MA&ixlib=rb-4.1.0&q=80&w=1080',
        tags: ['React', 'Python', 'Flask', 'MongoDB'],
        year: '2025',
        url: 'https://example.com/social-dashboard',
        codeUrl: 'https://github.com/example/social-dashboard',
    },
    {
        id: 3,
        title: 'Fitness Tracker App',
        description: 'Cross-platform mobile application with offline-first architecture. Tracks workouts, nutrition, and progress with cloud sync and social features.',
        image: 'https://images.unsplash.com/photo-1633250391894-397930e3f5f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXZlbG9wbWVudHxlbnwxfHx8fDE3NzUxMzM1MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
        tags: ['React Native', 'Node.js', 'GraphQL'],
        year: '2026',
        url: 'https://example.com/fitness-tracker',
        codeUrl: 'https://github.com/example/fitness-tracker',
    }
];