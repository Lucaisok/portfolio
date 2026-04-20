"use client";
import { contactsElements } from '@/src/lib/contacts';
import { motion } from 'motion/react';
import { ContactsCard } from './ContactsCard';
import styles from './ContactsSection.module.css';
import { useIsMobile } from '@/src/hooks/useIsMobile';

export const ContactsSection = () => {
    const isMobile = useIsMobile();

    return <motion.div
        initial={isMobile ? false : { opacity: 0, y: 30 }}
        animate={isMobile ? { opacity: 1, y: 0 } : undefined}
        whileInView={isMobile ? undefined : { opacity: 1, y: 0 }}
        viewport={isMobile ? undefined : { once: true }}
        transition={isMobile ? { duration: 0 } : { duration: 0.6, delay: 0.2 }}
        className={styles.grid}
    >
        {contactsElements.map((contact, index) => {
            return <ContactsCard contact={contact} index={index} key={contact.label} />;
        })}
    </motion.div>;
};