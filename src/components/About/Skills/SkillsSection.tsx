"use client";
import { Box, Code2, Database, LucideIcon, Smartphone } from "lucide-react";
import { SkillsCard } from "./SkillsCard";
import styles from './SkillsSection.module.css';

export interface Skill {
    icon: LucideIcon;
    title: string;
    items: string[];
}

const skills: Skill[] = [
    {
        icon: Code2,
        title: 'Frontend Development',
        items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS']
    },
    {
        icon: Smartphone,
        title: 'Mobile Development',
        items: ['React Native', 'iOS', 'Android', 'Cross-platform']
    },
    {
        icon: Database,
        title: 'Backend Development',
        items: ['Node.js', 'Python', 'REST APIs', 'GraphQL']
    },
    {
        icon: Box,
        title: 'DevOps & Tools',
        items: ['Git', 'Linux', 'Docker', 'CI/CD']
    }
];

export const SkillsSection = () => {
    return (
        <div className={styles.grid}>
            {skills.map((skill, index) => {
                return <SkillsCard skill={skill} index={index} key={skill.title} />;
            })}
        </div>
    );
};