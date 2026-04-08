import { Description } from '@/src/components/Projects/Description/Description';
import { ProjectsSection } from '@/src/components/Projects/ProjectsSection/ProjectsSection';
import styles from './page.module.css';

export const Projects = () => {
    return <section id="projects" className={styles.section}>
        <div className="site-container">
            <Description />
            <ProjectsSection />
        </div>
    </section>;
};

export default Projects;