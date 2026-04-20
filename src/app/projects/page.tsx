import type { Metadata } from 'next';
import { Description } from '@/src/components/Projects/Description/Description';
import { ProjectsSection } from '@/src/components/Projects/ProjectsSection/ProjectsSection';
import styles from './page.module.css';

export const metadata: Metadata = {
    title: 'Projects',
    description:
        "Browse selected projects by Luca Tomarelli, including web platforms and mobile applications.",
};

export const Projects = () => {
    return <section id="projects" className={styles.section}>
        <div className="site-container">
            <Description />
            <ProjectsSection />
        </div>
    </section>;
};

export default Projects;