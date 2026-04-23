"use client";
import { motion } from 'motion/react';
import styles from './Description.module.css';
import { siteContent } from '@/src/content/global';
import { useIsMobile } from '@/src/hooks/useIsMobile';

export const Description = () => {
    const content = siteContent.about;
    const isMobile = useIsMobile();

    return <motion.div
        initial={isMobile ? false : { opacity: 0, y: 30 }}
        animate={isMobile ? { opacity: 1, y: 0 } : undefined}
        whileInView={isMobile ? undefined : { opacity: 1, y: 0 }}
        viewport={isMobile ? undefined : { once: true }}
        transition={isMobile ? { duration: 0 } : { duration: 0.6 }}
        className={styles.container}
    >
        <div className={styles.badge}>{content.badge}</div>
        <h2 className={styles.title}>
            {content.title}
            <br />
            <span className={styles.titleMuted}>{content.titleMuted}</span>
        </h2>
        <p className={styles.paragraphFirst}>
            {content.paragraphFirst}
        </p>
        <p className={styles.paragraphFirst}>
            {content.paragraph}
        </p>
    </motion.div>;
};