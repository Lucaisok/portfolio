import { motion } from 'motion/react';
import styles from './Gallery.module.css';
import { useIsMobile } from '@/src/hooks/useIsMobile';

interface GalleryProps {
    title: string;
    images: string[];
}

export const Gallery = ({ images, title }: GalleryProps) => {
    const isMobile = useIsMobile();

    return <motion.div
        initial={isMobile ? false : { opacity: 0, y: 30 }}
        animate={isMobile ? { opacity: 1, y: 0 } : undefined}
        whileInView={isMobile ? undefined : { opacity: 1, y: 0 }}
        viewport={isMobile ? undefined : { once: true }}
        transition={isMobile ? { duration: 0 } : { duration: 0.6, delay: 0.2 }}
        className={styles.gallery}
    >
        {images.slice(0, 2).map((image, index) => (
            <div
                key={index}
                className={`${styles.item} ${index === 0 ? styles.itemOffset : ''}`}
            >
                <img
                    src={image}
                    alt={`${title} screenshot ${index + 2}`}
                    className={styles.image}
                />
                <div className={styles.overlay} />
            </div>
        ))}
    </motion.div>;
};