"use client";
import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from "react";
import styles from './Header.module.css';
import { siteContent } from '@/src/content/global';
import { navLinks, routes } from '@/src/lib/routes';
import { useIsMobile } from '@/src/hooks/useIsMobile';

export const Header = () => {
    const content = siteContent;
    const isMobile = useIsMobile();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.nav
            initial={isMobile ? false : { y: -100 }}
            animate={{ y: 0 }}
            transition={isMobile ? { duration: 0 } : { duration: 0.6 }}
            className={`${styles.nav} ${isScrolled ? styles.navScrolled : ''}`}
        >
            <div className={styles.container}>
                <div className={styles.inner}>
                    <Link href={routes.home} className={styles.logo}>
                        {content.name}
                    </Link>
                    <div className={styles.desktopNav}>
                        {navLinks.map((link) => (
                            <Link key={link.href} href={link.href} className={styles.navLink}>
                                {link.label}
                            </Link>
                        ))}
                    </div>
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className={styles.mobileMenuButton}
                    >
                        {isMobileMenuOpen
                            ? <X className={styles.icon} />
                            : <Menu className={styles.icon} />
                        }
                    </button>
                </div>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={isMobile ? false : { opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className={styles.mobileNav}
                    >
                        <div className={styles.mobileLinks}>
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={styles.navLink}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </div>
        </motion.nav>
    );
};