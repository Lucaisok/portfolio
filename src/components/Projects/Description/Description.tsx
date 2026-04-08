"use client";
import { siteContent } from '@/src/content/global';
import { motion } from 'motion/react';
import styles from './Description.module.css';

export const Description = () => {
    const content = siteContent.projects;

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
        </h2>
    </motion.div>;
};