"use client";
import { projects } from '@/src/lib/projects';
import NotFound from '../../not-found';
import { Hero } from '@/src/components/Project/Hero/Hero';
import { Cover } from '@/src/components/Project/Cover/Cover';
import { Description } from '@/src/components/Project/Description/Description';
import { ImageSection } from '@/src/components/Project/ImageSection/ImageSection';
import { ContactSection } from '@/src/components/Project/ContactSection/ContactSection';
import styles from './page.module.css';

interface ProjectPageProps {
    params: Promise<{ slug: string; }>;
}

export const ProjectPage = async ({ params }: ProjectPageProps) => {
    const { slug } = await Promise.resolve(params);
    const project = projects.find((project) => slug === project.slug);

    if (!project) return NotFound();

    return <div className={styles.page}>
        <Hero year={project.year} tags={project.tags} title={project.title} details={project.details} shortDescription={project.shortDescription} />
        <Cover image={project.heroImage} title={project.title} />
        <Description description={project.description} url={project.url} codeUrl={project.codeUrl} title={project.title} images={project.images} />
        <ImageSection image={project.wideImage} title={project.title} />
        <ContactSection />
    </div>;
};

export default ProjectPage;