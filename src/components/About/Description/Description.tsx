"use client";
import { motion } from 'motion/react';
import styles from './Description.module.css';
import { siteContent } from '@/src/content/global';

export const Description = () => {
    const content = siteContent.about;

    return <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className={styles.container}
    >
        <div className={styles.badge}>{content.badge}</div>
        <h2 className={styles.title}>
            {content.title}
            <br />
            <span className={styles.titleMuted}>{content.titleMuted}</span>
        </h2>
        <p className={styles.paragraphFirst}>
            {content.paragraph}
        </p>
        <p className={styles.paragraphFirst}>
            {content.paragraph}
        </p>
    </motion.div>;
};