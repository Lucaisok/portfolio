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
import { useIsMobile } from '@/src/hooks/useIsMobile';

interface ProjectCardProps {
    project: Project;
    index: number;
}

export const ProjectCard = ({ project, index }: ProjectCardProps) => {
    const isMobile = useIsMobile();

    return <motion.div
        key={project.id}
        initial={isMobile ? false : { opacity: 0, y: 50 }}
        animate={isMobile ? { opacity: 1, y: 0 } : undefined}
        whileInView={isMobile ? undefined : { opacity: 1, y: 0 }}
        viewport={isMobile ? undefined : { once: true }}
        transition={isMobile ? { duration: 0 } : { duration: 0.8 }}
        className={styles.card}
    >
        <Link className={styles.grid} href={routes.project(project.slug)}>
            <Cover index={index} image={project.cover} title={project.title} />
            <div className={index % 2 === 1 ? styles.contentReversed : undefined}>
                <Info details={project.details} id={project.id} title={project.title} description={project.shortDescription} year={project.year} />
                <Tags tags={project.tags} />
                <Actions />
            </div>
        </Link>
    </motion.div>;
};