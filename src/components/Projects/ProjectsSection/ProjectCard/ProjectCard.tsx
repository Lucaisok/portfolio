"use client";
import { motion } from 'motion/react';
import { Project } from '@/src/lib/projects';
import { Tags } from './Tags';
import { Info } from './Info';
import { Cover } from './Cover';
import { Actions } from './Actions';
import styles from './ProjectCard.module.css';
import Link from 'next/link';
import { routes } from '@/src/lib/routes';

interface ProjectCardProps {
    project: Project;
    index: number;
}

export const ProjectCard = ({ project, index }: ProjectCardProps) => {
    return <motion.div
        key={project.id}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className={styles.card}
    >
        <Link className={styles.grid} href={routes.project(project.slug)}>
            <Cover index={index} image={project.image} title={project.title} />
            <div className={index % 2 === 1 ? styles.contentReversed : undefined}>
                <Info details={project.details} id={project.id} title={project.title} description={project.shortDescription} year={project.year} />
                <Tags tags={project.tags} />
                <Actions url={project.url} codeUrl={project.codeUrl} />
            </div>
        </Link>
    </motion.div>;
};