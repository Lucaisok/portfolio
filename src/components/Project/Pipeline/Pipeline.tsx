"use client";
import { motion } from 'motion/react';
import type { PipelineStep } from '@/src/lib/projects';
import { siteContent } from '@/src/content/global';
import { useIsMobile } from '@/src/hooks/useIsMobile';
import styles from './Pipeline.module.css';

interface PipelineProps {
    steps: PipelineStep[];
}

export const Pipeline = ({ steps }: PipelineProps) => {
    const isMobile = useIsMobile();

    return <section className={styles.container}>
        <div className={styles.meta}>{siteContent.project.pipeline.badge}</div>
        <ol className={styles.steps}>
            {steps.map((step, index) => (
                <motion.li
                    key={step.title}
                    initial={isMobile ? false : { opacity: 0, y: 30 }}
                    animate={isMobile ? { opacity: 1, y: 0 } : undefined}
                    whileInView={isMobile ? undefined : { opacity: 1, y: 0 }}
                    viewport={isMobile ? undefined : { once: true }}
                    transition={isMobile ? { duration: 0 } : { duration: 0.6, delay: index * 0.1 }}
                    className={styles.step}
                >
                    <span className={styles.marker}>
                        <span className={styles.number}>{String(index + 1).padStart(2, '0')}</span>
                    </span>
                    <h3 className={styles.title}>{step.title}</h3>
                    <p className={styles.detail}>{step.detail}</p>
                </motion.li>
            ))}
        </ol>
    </section>;
};
