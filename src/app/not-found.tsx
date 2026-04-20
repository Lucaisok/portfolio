import type { Metadata } from 'next';
import { Terminal } from 'lucide-react';
import { Button } from '@/src/components/Button/Button';
import { HeroAccentCanvas } from '@/src/components/Home/Hero/HeroAccentCanvas';
import { routes } from '@/src/lib/routes';
import styles from './not-found.module.css';
import { siteContent } from '../content/global';

export const metadata: Metadata = {
    title: '404',
    description: 'The page you are looking for does not exist in this portfolio.',
};

export default function NotFound() {
    const content = siteContent.notFound;

    return (
        <main className={styles.main}>
            <div className={styles.gridBackground} />
            <div className={styles.gradientOverlay} />
            <div className={styles.visualDesktop}>
                <HeroAccentCanvas />
            </div>
            <section className={`site-container ${styles.section}`}>
                <div className={styles.content}>
                    <div className={styles.badgeRow}>
                        <Terminal className={styles.badgeIcon} />
                        <span className={styles.badgeText}>{content.badge}</span>
                    </div>
                    <h1 className={styles.title}>
                        {content.title}
                        <br />
                        <span className={styles.titleMuted}>{content.titleMuted}</span>
                    </h1>
                    <p className={styles.description}>
                        {content.description}
                    </p>
                    <div className={styles.actions}>
                        <Button href={routes.home} variant="primary">
                            {content.backHomeButton}
                        </Button>
                        <Button href={routes.about} variant="secondary">
                            {content.aboutMeButton}
                        </Button>
                    </div>
                </div>
                <div className={styles.visualMobile}>
                    <HeroAccentCanvas />
                </div>
            </section>
        </main>
    );
}