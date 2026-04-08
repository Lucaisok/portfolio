import { Description } from "@/src/components/About/Description/Description";
import { SkillsSection } from "@/src/components/About/Skills/SkillsSection";
import styles from './page.module.css';

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