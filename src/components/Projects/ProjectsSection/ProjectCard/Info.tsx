import { siteContent } from '@/src/content/global';
import styles from './Info.module.css';

interface InfoProps {
    year: string;
    id: number;
    title: string,
    description: string;
}

export const Info = ({ year, id, title, description }: InfoProps) => {
    const content = siteContent.projects;

    return (
        <>
            <div className={styles.meta}>{year} {content.projectNumber}{id}</div>
            <h3 className={styles.title}>
                {title}
            </h3>
            <p className={styles.description}>
                {description}
            </p></>
    );
};