"use client";
import { motion } from 'motion/react';
import { routes } from "@/src/lib/routes";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import styles from './ContactSection.module.css';
import { siteContent } from '@/src/content/global';
import { useIsMobile } from '@/src/hooks/useIsMobile';

export const ContactSection = () => {
    const content = siteContent.project.contact;
    const isMobile = useIsMobile();

    return <div className={styles.section}>
        <div className={styles.container}>
            <motion.div
                initial={isMobile ? false : { opacity: 0, y: 30 }}
                animate={isMobile ? { opacity: 1, y: 0 } : undefined}
                whileInView={isMobile ? undefined : { opacity: 1, y: 0 }}
                viewport={isMobile ? undefined : { once: true }}
                transition={isMobile ? { duration: 0 } : { duration: 0.6 }}
                className={styles.content}
            >
                <h2 className={styles.title}>
                    {content.title}
                </h2>
                <p className={styles.description}>
                    {content.description}
                </p>
                <div className={styles.actions}>
                    <Link
                        href={routes.contact}
                        className={`${styles.button} ${styles.buttonPrimary}`}
                    >
                        <span className={styles.label}>{content.getInTouch}</span>
                        <ArrowUpRight className={styles.icon} />
                    </Link>
                    <Link
                        href={routes.projects}
                        className={`${styles.button} ${styles.buttonSecondary}`}
                    >
                        <span className={styles.label}>{content.viewMore}</span>
                        <ArrowUpRight className={styles.icon} />
                    </Link>
                </div>
            </motion.div>
        </div>
    </div>;
};