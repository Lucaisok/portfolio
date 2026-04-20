import { Code2, Download, Link, LucideIcon, Mail } from "lucide-react";

export interface ContactElement {
    icon: LucideIcon;
    label: string;
    value: string;
    href: string;
    download?: string;
}

export const contacts = {
    email: "lucatomarelli1@gmail.com",
    linkedin: "https://www.linkedin.com/in/luca-tomarelli-038024132/",
    github: "https://github.com/Lucaisok",
    cv: "/Luca_Tomarelli_CV_2026.pdf"
};

export const contactsElements: ContactElement[] = [
    { icon: Mail, label: 'Email', value: contacts.email, href: `mailto:${contacts.email}` },
    { icon: Link, label: 'LinkedIn', value: '/in/luca-tomarelli', href: contacts.linkedin },
    { icon: Code2, label: 'GitHub', value: '/Lucaisok', href: contacts.github },
    { icon: Download, label: 'Download CV', value: 'PDF Resume', href: contacts.cv, download: 'luca-tomarelli-cv.pdf' }
];