"use client";
import { ContactElement } from '@/src/lib/contacts';
import { motion } from 'motion/react';
import styles from './ContactsCard.module.css';

interface ContactsCardProps {
    contact: ContactElement,
    index: number;
}

export const ContactsCard = ({ contact, index }: ContactsCardProps) => {
    const Icon = contact.icon;

    return <motion.a
        key={contact.label}
        href={contact.href}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
        className={styles.card}
    >
        <Icon className={styles.icon} />
        <div className={styles.label}>{contact.label}</div>
        <div className={styles.value}>{contact.value}</div>
    </motion.a>;
};