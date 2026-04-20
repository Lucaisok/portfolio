"use client";
import { motion } from 'motion/react';
import styles from './Cover.module.css';

interface CoverProps {
    image: string;
    title: string;
}

export const Cover = ({ image, title }: CoverProps) => {
    return <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className={styles.container}
    >
        <div className={styles.frame}>
            <img
                src={image}
                alt={title}
                className={styles.image}
            />
            <div className={styles.overlay} />
        </div>
    </motion.div>;
};