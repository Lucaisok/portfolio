import { siteContent } from '@/src/content/global';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import styles from './Actions.module.css';

export const Actions = () => {
    const content = siteContent.projects;

    return <div className={styles.actions}>
        <div
            className={styles.link}
        >
            <ExternalLink className={styles.icon} />
            <span>{content.viewProject}</span>
            <ArrowUpRight className={styles.arrow} />
        </div>
    </div>;
};