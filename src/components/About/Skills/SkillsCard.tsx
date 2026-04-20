"use client";
import { Skill } from "./SkillsSection";
import { motion } from 'motion/react';
import styles from './SkillsCard.module.css';
import { useIsMobile } from '@/src/hooks/useIsMobile';

interface SkillsCardProps {
    skill: Skill;
    index: number;
}

export const SkillsCard = ({ skill, index }: SkillsCardProps) => {
    const Icon = skill.icon;
    const isMobile = useIsMobile();

    return (
        <motion.div
            initial={isMobile ? false : { opacity: 0, y: 30 }}
            animate={isMobile ? { opacity: 1, y: 0 } : undefined}
            whileInView={isMobile ? undefined : { opacity: 1, y: 0 }}
            viewport={isMobile ? undefined : { once: true }}
            transition={isMobile ? { duration: 0 } : { duration: 0.6, delay: index * 0.1 }}
            className={styles.card}
        >
            <Icon className={styles.icon} />
            <h3 className={styles.title}>{skill.title}</h3>
            <ul className={styles.list}>
                {skill.items.map((item) => (
                    <li key={item} className={styles.listItem}>
                        <span className={styles.bullet} />
                        {item}
                    </li>
                ))}
            </ul>
        </motion.div>
    );
};