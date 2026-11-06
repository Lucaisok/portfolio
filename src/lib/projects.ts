export interface Highlight {
    value: string;
    label: string;
}

export interface PipelineStep {
    title: string;
    detail: string;
}

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
    // When set, the project page shows these instead of the side images and the wide image.
    highlights?: Highlight[];
    pipeline?: PipelineStep[];
}

export const projects: Project[] = [
    {
        id: 6,
        slug: 'open-art',
        title: 'OpenArt',
        shortDescription: 'OpenArt is a web app for artists that collects residencies, grants and commissions from public institutional sources, tells each artist plainly whether they qualify and why, and helps them prepare the application.',
        description: `OpenArt is my capstone project for the AI Engineering programme at SPICED Academy / neue fische: a full-stack data science product built around one research question: can NLP automatically identify eligibility requirements in art open calls?

    Open calls are scattered across hundreds of institutions, in many languages, and each one states its eligibility rules in its own dense wording. A data pipeline finds calls on curated public sources, extracts their structured fields, deduplicates them and translates them to English. Each call's requirements are then split into sentences and tagged with the rules they state (residence, nationality, age, discipline, career stage, education and more) by a multi-label classifier trained on about 700 hand-annotated sentences.

    The modelling follows a measured path: a TF-IDF + Logistic Regression baseline, a Linear SVM, and finally frozen bge-base sentence embeddings with Logistic Regression, evaluated with grouped, stratified cross-validation over 10 seeds (macro-F1 0.70). An LLM was measured as a yardstick rather than used as a replacement: on held-out calls the full pipeline wrongly turned away no artists, against 14 for the LLM alone.

    The final decision stays deterministic and auditable. Plain Python rules compare the tagged requirements with the artist's profile and return Eligible, Not eligible or Check, each with the quoted sentence that decided it. Semantic search ranks calls by how close they are to the artist's practice, a RAG knowledge base built from the artist's CV, statement and portfolio pre-fills the profile, and an application agent drafts each written item. Every draft stays "not reviewed" until the artist confirms it, and the app never submits anything on their behalf.

    The project was built with Python, scikit-learn, fastembed (ONNX), FastAPI, PostgreSQL with pgvector, Next.js and TypeScript, and is deployed with Docker Compose behind nginx.`,
        details: 'Capstone Project • AI App',
        tags: ['Python', 'NLP', 'RAG', 'FastAPI'],
        year: '2026',
        url: 'https://open-art.lucadev.org/',
        cover: '/projects/open-art/cover.png',
        heroImage: '/projects/open-art/openart-hero.png',
        wideImage: '/projects/open-art/openart-wide.png',
        images: ['/projects/open-art/openart-verdict.png', '/projects/open-art/openart-studio.png'],
        codeUrl: 'https://github.com/Lucaisok/open_art',
        highlights: [
            { value: '0 vs 14', label: 'artists wrongly turned away on held-out calls: the full pipeline against an LLM alone' },
            { value: '0.70', label: 'macro-F1 of the shipped eligibility classifier across 11 classes, mean of 10 seeds' },
            { value: '49% → 27%', label: 'share of missed requirements after moving to a multi-label model' },
            { value: '~700', label: 'hand-annotated requirement sentences, labelled with a written taxonomy' }
        ],
        pipeline: [
            { title: 'Data pipeline', detail: 'Finds calls on curated public sources, extracts their fields, deduplicates them and translates them to English.' },
            { title: 'Eligibility NLP', detail: 'bge-base embeddings and logistic regression tag every requirement sentence with the rules it states.' },
            { title: 'Rule engine', detail: 'Plain Python rules return Eligible, Not eligible or Check, each with the sentence that decided it.' },
            { title: 'Matching & RAG', detail: 'Local ONNX embeddings rank calls by fit and turn the artist\'s documents into a knowledge base.' },
            { title: 'Drafting agent', detail: 'An OpenAI agent drafts each answer. Nothing is final until the artist reviews it.' }
        ]
    },
    {
        id: 5,
        slug: 'docs-diver',
        title: 'Docs Diver',
        shortDescription: 'Docs Diver is an AI-powered document intelligence workspace that lets users upload PDFs, ask questions in natural language, and receive citation-grounded answers generated through semantic search and Retrieval-Augmented Generation (RAG).',
        description: `Docs Diver is a full-stack AI application built to explore the practical challenges of modern Retrieval-Augmented Generation (RAG) systems.

    The platform allows users to upload PDF documents, automatically extract and structure their contents, generate vector embeddings, and store them in a PostgreSQL database using pgvector. Users can then query their documents through a conversational interface, receiving answers grounded in the source material rather than relying solely on the language model’s internal knowledge.

    To improve retrieval quality, the application implements structure-aware document chunking, semantic similarity search, a token-budgeted chunk selection policy, and citation tracking. Answers are streamed to the user and their citations are persisted alongside them. Retrieved sources can be inspected through a dedicated source preview interface, including PDF page previews and chunk-level context.

    Beyond answering questions, Docs Diver focuses heavily on transparency and observability. The system records retrieval metadata, similarity scores, latency information, token usage estimates, and chunk-selection data, allowing developers to inspect and evaluate retrieval performance through a dedicated evaluation interface.

    The project was built with Next.js, TypeScript, PostgreSQL, Prisma, pgvector, OpenAI APIs, the Vercel AI SDK, and React PDF, and serves as a practical exploration of AI product engineering, semantic search systems, and production-oriented LLM workflows.`,
        details: 'Solo Project • AI App',
        tags: ['Next.js', 'RAG', 'pgvector', 'OpenAI API'],
        year: '2026',
        url: 'https://docs-diver.lucadev.org/',
        cover: '/projects/docs-diver/docs0.png',
        heroImage: '/projects/docs-diver/docs-hero.png',
        wideImage: '/projects/docs-diver/docs2.png',
        images: ['/projects/docs-diver/docs4.png', '/projects/docs-diver/docs6.png'],
        codeUrl: 'https://github.com/Lucaisok/docs_diver',
        highlights: [
            { value: '3 filters', label: 'a similarity threshold, a token budget and a chunk limit decide what reaches the model' },
            { value: 'Every request', label: 'logged with model, latency, token estimates and per-chunk similarity scores' },
            { value: 'Persisted', label: 'citations stay attached to each answer after a refresh, down to the chunk and PDF page' },
            { value: 'Structure-aware', label: 'chunking that follows headings, sections, paragraphs and sentences' }
        ],
        pipeline: [
            { title: 'Ingest', detail: 'PDFs are parsed, cleaned and split into chunks along their own structure.' },
            { title: 'Embed & index', detail: 'Each chunk is embedded with OpenAI and stored in PostgreSQL with pgvector.' },
            { title: 'Retrieve', detail: 'Similarity search, then a selection policy keeps only what fits the token budget.' },
            { title: 'Answer', detail: 'Answers stream in through the Vercel AI SDK, with structured citations saved alongside.' },
            { title: 'Observe', detail: 'Latency, tokens and similarity scores are recorded for the evaluation workspace.' }
        ]
    },
    {
        id: 1,
        slug: 'sonnen-app',
        title: 'Sonnen App',
        shortDescription: `Mobile application that enables users to monitor and manage their home energy system, providing real-time insights into solar production, battery status, and energy consumption.`,
        description: `The Sonnen App is a mobile application designed to give users full visibility and control over their home energy ecosystem, including solar panels, battery storage, and connected devices such as EV chargers.

The app provides real-time and historical data on energy production and consumption, allowing users to better understand and optimize their energy usage. Through an intuitive interface, users can track energy flows, monitor battery levels, and adjust system settings such as backup reserves to ensure reliability during outages.

In addition to data visualization, the app integrates with Sonnen’s broader energy platform, enabling access to energy contracts and participation in a distributed energy network. The goal is to empower users to increase energy independence, reduce costs, and actively contribute to a more sustainable energy system.

From a development perspective, the application focuses on performance, usability, and scalability, supporting tens of thousands of active users while integrating with complex backend and IoT systems.

As the first in-house mobile developer at sonnen, I developed and shipped the app in TypeScript and React Native, ran technical interviews and helped grow the front-end team to more than 15 engineers, and worked with the IoT and backend teams in a cross-functional task force on a new generation of EV chargers.`,
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
        details: "Company Project • Mobile App",
        highlights: [
            { value: 'Tens of thousands', label: 'active users on the production app' },
            { value: '15+', label: 'engineers in the front-end team I helped grow as the first in-house mobile developer' },
            { value: 'IoT', label: 'cross-functional task force with the IoT and backend teams on a new generation of EV chargers' },
            { value: 'Real time', label: 'solar production, battery status and consumption, live and over time' }
        ],
        pipeline: [
            { title: 'Connected devices', detail: 'Solar panels, battery storage and EV chargers report their state to sonnen\'s platform.' },
            { title: 'GraphQL API', detail: 'The app reads live and historical energy data from sonnen\'s backend.' },
            { title: 'React Native app', detail: 'One TypeScript codebase for the production mobile app.' },
            { title: 'Energy insights', detail: 'Energy flows, battery level and production against consumption, at a glance.' },
            { title: 'Control', detail: 'Users adjust settings such as the backup reserve and reach their energy contract.' }
        ]
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
        url: "https://apps.apple.com/de/app/noloni/id1573238345",
        highlights: [
            { value: 'iOS & Android', label: 'one React Native codebase for both platforms' },
            { value: 'Full stack', label: 'a Node.js backend on Linux for users, sessions and real-time calls' },
            { value: '2 web tools', label: 'a management dashboard with usage metrics and a customer care tool' },
            { value: 'End to end', label: 'ownership from UI and features to backend integration and deployment' }
        ],
        pipeline: [
            { title: 'Mobile app', detail: 'React Native and TypeScript screens to create, join and manage video calls.' },
            { title: 'Node.js API', detail: 'Services for user management and session handling.' },
            { title: 'Real-time calls', detail: 'The communication workflows behind each call, from start to hang-up.' },
            { title: 'Linux deployment', detail: 'The backend runs in Docker on a Linux server.' },
            { title: 'Web tools', detail: 'React dashboards for usage metrics and for the support team.' }
        ]
    },
    {
        id: 3,
        slug: 'smart-it',
        title: 'Smart it',
        shortDescription: 'A redesigned corporate website for a cleaning and facility management company, focused on local SEO, lead generation, and clear service positioning',
        description: `SmartIT is a corporate website developed for a cleaning and facility management company operating in the Milan area. The project involved a complete redesign with a strong emphasis on local SEO, service clarity, and conversion optimization.

The website is structured around dedicated service pages targeting specific keywords and geographic areas, improving search engine visibility and attracting high-intent traffic. Technical SEO improvements, including canonical management, sitemap optimization, and performance enhancements, were implemented to support long-term ranking growth.

The interface is designed to communicate professionalism and trust, with clear calls to action, optimized content hierarchy, and a responsive layout. The result is a fast, scalable platform aimed at generating leads and strengthening the company’s online presence in a competitive local market.`,
        cover: '/projects/smartit/smartit-card.jpg',
        heroImage: '/projects/smartit/smartit-hero.png',
        images: [
            '/projects/smartit/hero.png',
            '/projects/smartit/cover1.jpg',
        ],
        wideImage: '/projects/smartit/smartit-wide.png',
        tags: ['Next.js', 'Typescript', 'Linux'],
        year: '2026',
        url: 'https://smartit-srl.com/',
        codeUrl: 'https://github.com/Lucaisok/smartit_v2',
        details: "Freelance Project • Website",
        highlights: [
            { value: 'Full redesign', label: 'of the corporate site for a cleaning and facility management company' },
            { value: 'Local SEO', label: 'service pages targeting specific keywords and areas around Milan' },
            { value: 'Technical SEO', label: 'canonical management, sitemap optimisation and performance work' },
            { value: 'Lead generation', label: 'clear calls to action and a content hierarchy built to convert' }
        ],
        pipeline: [
            { title: 'Redesign', detail: 'A new structure and interface that communicates professionalism and trust.' },
            { title: 'Service pages', detail: 'One page per service, each aimed at its own search intent.' },
            { title: 'Area targeting', detail: 'Content written for the towns and districts the company serves.' },
            { title: 'Technical SEO', detail: 'Canonicals, sitemap and performance tuned for long-term ranking.' },
            { title: 'Conversion', detail: 'Calls to action and a clear hierarchy that turn visits into leads.' }
        ]
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
        heroImage: '/projects/houseofrome/house-hero.png',
        wideImage: '/projects/houseofrome/house-wide.png',
        images: [
            '/projects/houseofrome/house3.png',
            '/projects/houseofrome/house5.png',
        ],
        tags: ['Next.js', 'Typescript', 'Linux'],
        year: '2026',
        url: 'https://houseofrome.org/',
        codeUrl: 'https://github.com/Lucaisok/house-of-rome',
        details: "Freelance Project • Website",
        highlights: [
            { value: 'Multilingual', label: 'routing and content for an international audience' },
            { value: 'SEO-first', label: 'structured metadata and a dedicated, optimised page for every apartment' },
            { value: 'Live availability', label: 'an external booking system integrated without slowing the site down' },
            { value: 'Mobile-first', label: 'performance, accessibility and usability tuned for guests on their phones' }
        ],
        pipeline: [
            { title: 'Apartment pages', detail: 'Each apartment gets its own page, built for search and for booking.' },
            { title: 'Multilingual routing', detail: 'Every page is served in each language, at its own URL.' },
            { title: 'Structured metadata', detail: 'Search engines read each listing\'s details directly from the page.' },
            { title: 'Booking integration', detail: 'Availability comes from the external booking system in real time.' },
            { title: 'Deployment', detail: 'A Next.js build served from a Linux server.' }
        ]
    }
];