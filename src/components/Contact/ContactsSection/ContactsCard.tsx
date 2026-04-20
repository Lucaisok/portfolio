"use client";
import { ContactElement } from '@/src/lib/contacts';
import { motion } from 'motion/react';
import styles from './ContactsCard.module.css';
import { useIsMobile } from '@/src/hooks/useIsMobile';

interface ContactsCardProps {
    contact: ContactElement,
    index: number;
}

export const ContactsCard = ({ contact, index }: ContactsCardProps) => {
    const Icon = contact.icon;
    const isExternalLink = !contact.download && contact.href.startsWith('http');
    const isMobile = useIsMobile();

    return <motion.a
        key={contact.label}
        href={contact.href}
        target={isExternalLink ? '_blank' : undefined}
        rel={isExternalLink ? 'noopener noreferrer' : undefined}
        download={contact.download}
        initial={isMobile ? false : { opacity: 0, y: 20 }}
        animate={isMobile ? { opacity: 1, y: 0 } : undefined}
        whileInView={isMobile ? undefined : { opacity: 1, y: 0 }}
        viewport={isMobile ? undefined : { once: true }}
        transition={isMobile ? { duration: 0 } : { duration: 0.4, delay: 0.3 + index * 0.1 }}
        className={styles.card}
    >
        <Icon className={styles.icon} />
        <div className={styles.label}>{contact.label}</div>
        <div className={styles.value}>{contact.value}</div>
    </motion.a>;
};