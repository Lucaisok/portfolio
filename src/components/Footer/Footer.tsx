"use client";
import { motion } from 'motion/react';
import { siteContent } from '@/src/content/global';
import styles from './Footer.module.css';
import { BERLIN_FORECAST_URL, useBerlinWeather } from '@/src/hooks/useBerlinWeather';

export const Footer = () => {
    const content = siteContent.footer;
    const berlinWeather = useBerlinWeather();

    return (
        <motion.footer
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={styles.footer}
        >
            <div className={styles.container}>
                <p className={styles.copy}>
                    {`${content.year} ${siteContent.name}. ${content.developed} `}
                    <a href={BERLIN_FORECAST_URL} target="_blank" rel="noreferrer" className={styles.link}>
                        {berlinWeather}
                    </a>{' '}
                    {content.berlin}
                </p>
            </div>
        </motion.footer>
    );
};
