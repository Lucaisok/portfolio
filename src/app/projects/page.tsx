import type { Metadata } from 'next';
import { Description } from '@/src/components/Projects/Description/Description';
import { ProjectsSection } from '@/src/components/Projects/ProjectsSection/ProjectsSection';
import styles from './page.module.css';

export const metadata: Metadata = {
    title: 'Projects',
    description:
        "Browse selected projects by Luca Tomarelli, including AI applications, web platforms and mobile apps.",
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