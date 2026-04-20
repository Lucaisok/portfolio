"use client";
import { siteContent } from "@/src/content/global";
import { Send } from "lucide-react";
import { motion } from 'motion/react';
import styles from './Message.module.css';
import { contacts } from "@/src/lib/contacts";
import { useIsMobile } from '@/src/hooks/useIsMobile';

export const Message = () => {
    const content = siteContent.contact;
    const isMobile = useIsMobile();

    return <motion.div
        initial={isMobile ? false : { opacity: 0, y: 30 }}
        animate={isMobile ? { opacity: 1, y: 0 } : undefined}
        whileInView={isMobile ? undefined : { opacity: 1, y: 0 }}
        viewport={isMobile ? undefined : { once: true }}
        transition={isMobile ? { duration: 0 } : { duration: 0.6, delay: 0.6 }}
        className={styles.container}
    >
        <a
            href={`mailto:${contacts.email}`}
            className={styles.link}
        >
            <Send className={styles.icon} />
            <span>{content.button}</span>
        </a>
    </motion.div>;
};