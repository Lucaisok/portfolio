import { Code2, Link, LucideIcon, Mail, MessageCircle } from "lucide-react";

export interface ContactElement {
    icon: LucideIcon;
    label: string;
    value: string;
    href: string;
}

export const contacts = {
    email: "lucatomarelli1@gmail.com",
    linkedin: "https://www.linkedin.com/in/luca-tomarelli-038024132/",
    github: "https://github.com/Lucaisok",
    twitter: "https://twitter.com/Lucaisok"
};

export const contactsElements: ContactElement[] = [
    { icon: Mail, label: 'Email', value: contacts.email, href: `mailto:${contacts.email}` },
    { icon: Link, label: 'LinkedIn', value: '/in/Lucaisok', href: contacts.linkedin },
    { icon: Code2, label: 'GitHub', value: '/Lucaisok', href: contacts.github },
    { icon: MessageCircle, label: 'Twitter', value: '@Lucaisok', href: contacts.twitter }
];