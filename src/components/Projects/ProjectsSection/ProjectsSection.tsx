import { projects } from '@/src/lib/projects';
import { ProjectCard } from './ProjectCard/ProjectCard';
import styles from './ProjectsSection.module.css';

export const ProjectsSection = () => {
    return <div className={styles.section}>
        {projects.map((project, index) => (
            <ProjectCard project={project} index={index} key={project.id} />
        ))}
    </div>;
};