"use client";
import { siteContent } from "@/src/content/global";
import { Send } from "lucide-react";
import { motion } from 'motion/react';
import styles from './Message.module.css';
import { contacts } from "@/src/lib/contacts";

export const Message = () => {
    const content = siteContent.contact;
    return <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.6 }}
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