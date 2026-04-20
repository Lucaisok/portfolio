"use client";
import { motion } from 'motion/react';
import { siteContent } from '@/src/content/global';
import styles from './Footer.module.css';
import { BERLIN_FORECAST_URL, useBerlinWeather } from '@/src/hooks/useBerlinWeather';
import { useIsMobile } from '@/src/hooks/useIsMobile';

export const Footer = () => {
    const content = siteContent.footer;
    const berlinWeather = useBerlinWeather();
    const isMobile = useIsMobile();

    return (
        <motion.footer
            initial={isMobile ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={isMobile ? { duration: 0 } : { duration: 0.6, delay: 0.1 }}
            className={styles.footer}
        >
            <div className={styles.container}>
                <p className={styles.copy}>
                    <span className={styles.fullLine}>{`${content.year} ${siteContent.name}. `}</span>
                    <span className={styles.developed}>
                        {`${content.developed} `}
                        <a href={BERLIN_FORECAST_URL} target="_blank" rel="noreferrer" className={styles.link}>
                            {berlinWeather}
                        </a>{' '}
                        {content.berlin}
                    </span>
                </p>
            </div>
        </motion.footer>
    );
};
