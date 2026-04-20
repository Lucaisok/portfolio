"use client";
import { motion } from 'motion/react';
import { ExternalLink, ArrowUpRight, Code2 } from 'lucide-react';
import { Gallery } from '../Gallery/Gallery';
import styles from './Description.module.css';
import { siteContent } from '@/src/content/global';

interface DescriptionProps {
    title: string;
    description: string;
    images?: string[];
    url?: string;
    codeUrl?: string;
}

export const Description = ({ description, url, codeUrl, title, images }: DescriptionProps) => {
    const content = siteContent.project.description;

    return <div className={styles.container}>
        <div className={styles.grid}>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={styles.content}
            >
                <div className={styles.meta}>{content.badge}</div>
                <div className={styles.description}>
                    {description.split('\n\n').map((paragraph, index) => (
                        <p key={index} className={styles.paragraph}>{paragraph}</p>
                    ))}
                </div>

                <div className={styles.actions}>
                    <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${styles.button} ${styles.buttonPrimary}`}
                    >
                        <ExternalLink className={styles.iconLarge} />
                        <span className={styles.buttonLabel}>{content.liveDemo}</span>
                        <ArrowUpRight className={styles.iconArrow} />
                    </a>
                    <a
                        href={codeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${styles.button} ${styles.buttonSecondary}`}
                    >
                        <Code2 className={styles.iconLarge} />
                        <span className={styles.buttonLabel}>{content.viewCode}</span>
                        <ArrowUpRight className={styles.iconArrow} />
                    </a>
                </div>
            </motion.div>
            <Gallery title={title} images={images} />
        </div>
    </div>;
};