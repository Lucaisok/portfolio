export const routes = {
    home: `/`,
    about: `/about`,
    projects: `/projects`,
    contact: `/contact`
} as const;

export const navLinks = [
    { label: 'About', href: routes.about },
    { label: 'Projects', href: routes.projects },
    { label: 'Contact', href: routes.contact }
] as const;