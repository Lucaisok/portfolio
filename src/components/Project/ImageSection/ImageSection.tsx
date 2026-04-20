"use client";
import { motion } from 'motion/react';
import styles from './ImageSection.module.css';

interface ImageSectionProps {
    image: string;
    title: string;
}

export const ImageSection = ({ image, title }: ImageSectionProps) => {
    return <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className={styles.container}
    >
        <div className={styles.frame}>
            <img
                src={image}
                alt={`${title} screenshot`}
                className={styles.image}
            />
            <div className={styles.overlay} />
        </div>
    </motion.div>;
};