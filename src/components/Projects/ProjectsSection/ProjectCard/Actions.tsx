import { siteContent } from '@/src/content/global';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import styles from './Actions.module.css';

interface ActionProps {
    url?: string;
    codeUrl?: string;
}

export const Actions = ({ url, codeUrl }: ActionProps) => {
    const content = siteContent.projects;

    if (!url && !codeUrl) return;

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