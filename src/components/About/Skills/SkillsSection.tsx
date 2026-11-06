"use client";
import { Box, BrainCircuit, Code2, Database, LucideIcon } from "lucide-react";
import { SkillsCard } from "./SkillsCard";
import styles from './SkillsSection.module.css';

export interface Skill {
    icon: LucideIcon;
    title: string;
    items: string[];
}

const skills: Skill[] = [
    {
        icon: BrainCircuit,
        title: 'AI & Machine Learning',
        items: ['RAG & LLM APIs', 'AI Agents & LangGraph', 'Embeddings & Semantic Search', 'scikit-learn & TensorFlow']
    },
    {
        icon: Code2,
        title: 'Frontend & Mobile',
        items: ['TypeScript', 'React & Next.js', 'React Native', 'iOS & Android']
    },
    {
        icon: Database,
        title: 'Backend & Data',
        items: ['Python & FastAPI', 'Node.js & Express', 'PostgreSQL & pgvector', 'REST & GraphQL']
    },
    {
        icon: Box,
        title: 'DevOps & Tools',
        items: ['Docker & nginx', 'GitHub Actions', 'Fastlane', 'Linux & Git']
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