import { motion } from 'motion/react';
import styles from './Gallery.module.css';

interface GalleryProps {
    title: string;
    images?: string[];
}

export const Gallery = ({ images, title }: GalleryProps) => {
    if (!images || images.length < 4) return;

    return <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className={styles.gallery}
    >
        {images.slice(1, 3).map((image, index) => (
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