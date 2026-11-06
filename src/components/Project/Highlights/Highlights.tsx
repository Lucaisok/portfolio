"use client";
import { motion } from 'motion/react';
import type { Highlight } from '@/src/lib/projects';
import { siteContent } from '@/src/content/global';
import { useIsMobile } from '@/src/hooks/useIsMobile';
import styles from './Highlights.module.css';

interface HighlightsProps {
    highlights: Highlight[];
}

export const Highlights = ({ highlights }: HighlightsProps) => {
    const isMobile = useIsMobile();

    return <motion.aside
        initial={isMobile ? false : { opacity: 0, y: 30 }}
        animate={isMobile ? { opacity: 1, y: 0 } : undefined}
        whileInView={isMobile ? undefined : { opacity: 1, y: 0 }}
        viewport={isMobile ? undefined : { once: true }}
        transition={isMobile ? { duration: 0 } : { duration: 0.6, delay: 0.2 }}
        className={styles.highlights}
    >
        <div className={styles.meta}>{siteContent.project.description.highlights}</div>
        <dl className={styles.list}>
            {highlights.map((highlight) => (
                <div key={highlight.value} className={styles.item}>
                    <dt className={styles.value}>{highlight.value}</dt>
                    <dd className={styles.label}>{highlight.label}</dd>
                </div>
            ))}
        </dl>
    </motion.aside>;
};
