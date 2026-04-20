"use client";
import { motion } from 'motion/react';
import styles from './ImageSection.module.css';
import { useIsMobile } from '@/src/hooks/useIsMobile';

interface ImageSectionProps {
    image: string;
    title: string;
}

export const ImageSection = ({ image, title }: ImageSectionProps) => {
    const isMobile = useIsMobile();

    return <motion.div
        initial={isMobile ? false : { opacity: 0 }}
        animate={isMobile ? { opacity: 1 } : undefined}
        whileInView={isMobile ? undefined : { opacity: 1 }}
        viewport={isMobile ? undefined : { once: true }}
        transition={isMobile ? { duration: 0 } : { duration: 0.8 }}
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