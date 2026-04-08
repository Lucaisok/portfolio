"use client";
import { contactsElements } from '@/src/lib/contacts';
import { motion } from 'motion/react';
import { ContactsCard } from './ContactsCard';
import styles from './ContactsSection.module.css';

export const ContactsSection = () => {
    return <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className={styles.grid}
    >
        {contactsElements.map((contact, index) => {
            return <ContactsCard contact={contact} index={index} key={contact.label} />;
        })}
    </motion.div>;
};