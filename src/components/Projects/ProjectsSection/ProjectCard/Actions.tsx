import { siteContent } from '@/src/content/global';
import { ArrowUpRight, Code2, ExternalLink } from 'lucide-react';
import styles from './Actions.module.css';

interface ActionProps {
    url?: string;
    codeUrl?: string;
}

export const Actions = ({ url, codeUrl }: ActionProps) => {
    const content = siteContent.projects;

    if (!url && !codeUrl) return;

    return <div className={styles.actions}>
        <a
            href={url}
            className={styles.link}
        >
            <ExternalLink className={styles.icon} />
            <span>{content.liveDemo}</span>
            <ArrowUpRight className={styles.arrow} />
        </a>
        {!!codeUrl && <a
            href={codeUrl}
            className={styles.link}
        >
            <Code2 className={styles.icon} />
            <span>{content.viewCode}</span>
            <ArrowUpRight className={styles.arrow} />
        </a>}
    </div>;
};