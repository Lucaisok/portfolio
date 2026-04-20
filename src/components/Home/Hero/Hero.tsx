"use client";
import { motion } from 'motion/react';
import { Terminal } from 'lucide-react';
import { routes } from '@/src/lib/routes';
import { Button } from '@/src/components/Button/Button';
import { siteContent } from '@/src/content/global';
import { HeroAccentCanvas } from './HeroAccentCanvas';
import styles from './Hero.module.css';
import { useIsMobile } from '@/src/hooks/useIsMobile';

export const Hero = () => {
    const content = siteContent.home;
    const isMobile = useIsMobile();

    return (
        <section className={styles.section}>
            <div className={styles.gridBackground} />
            <div className={styles.gradientOverlay} />
            <div className={styles.visualDesktop}>
                <HeroAccentCanvas />
            </div>
            <div className={styles.container}>
                <div className={styles.content}>
                    <motion.div
                        initial={isMobile ? false : { opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={isMobile ? { duration: 0 } : { duration: 0.6 }}
                        className={styles.badgeRow}
                    >
                        <Terminal className={styles.badgeIcon} />
                        <span className={styles.badgeText}>{content.fullStackDeveloper}</span>
                    </motion.div>
                    <motion.h1
                        initial={isMobile ? false : { opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={isMobile ? { duration: 0 } : { duration: 0.6, delay: 0.1 }}
                        className={styles.title}
                    >
                        {content.title}
                        <br />
                        <span className={styles.titleMuted}>{content.subTitle}</span>
                    </motion.h1>
                    <motion.p
                        initial={isMobile ? false : { opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={isMobile ? { duration: 0 } : { duration: 0.6, delay: 0.2 }}
                        className={styles.description}
                    >
                        {content.description}
                    </motion.p>
                    <motion.div
                        initial={isMobile ? false : { opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={isMobile ? { duration: 0 } : { duration: 0.6, delay: 0.25 }}
                        className={styles.visualMobile}
                    >
                        <HeroAccentCanvas />
                    </motion.div>
                    <motion.div
                        initial={isMobile ? false : { opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={isMobile ? { duration: 0 } : { duration: 0.6, delay: 0.3 }}
                        className={styles.actions}
                    >
                        <Button href={routes.projects} variant="primary">
                            {siteContent.viewProjects}
                        </Button>
                        <Button href={routes.contact} variant="secondary">
                            {siteContent.getInTouch}
                        </Button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};