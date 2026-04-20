"use client";
import { motion } from 'motion/react';
import styles from './Hero.module.css';

interface HeroProps {
    year: string;
    title: string;
    details: string;
    tags: string[];
    shortDescription: string;
}

export const Hero = ({ year, title, details, tags, shortDescription }: HeroProps) => {

    return <div className={styles.container}>
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
        >
            <div className={styles.content}>
                <div className={styles.meta}>
                    {year} • {details}
                </div>
                <h1 className={styles.title}>
                    {title}
                </h1>
                <p className={styles.description}>
                    {shortDescription}
                </p>
                <div className={styles.tags}>
                    {tags.map((tag) => (
                        <span
                            key={tag}
                            className={styles.tag}
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    </div>;
};