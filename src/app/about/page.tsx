import type { Metadata } from 'next';
import { Description } from "@/src/components/About/Description/Description";
import { SkillsSection } from "@/src/components/About/Skills/SkillsSection";
import styles from './page.module.css';

export const metadata: Metadata = {
    title: 'About',
    description:
        'Learn about Luca Tomarelli, full stack and applied AI engineer with 5 years of experience shipping web, mobile and AI products.',
};

const About = () => {
    return (
        <section id="about" className={styles.section}>
            <div className="site-container">
                <Description />
                <SkillsSection />
            </div>
        </section>
    );
};

export default About;