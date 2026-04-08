import styles from './Tags.module.css';

interface TagsProps {
    tags: string[];
}

export const Tags = ({ tags }: TagsProps) => {
    return <div className={styles.tags}>
        {tags.map((tag) => (
            <span
                key={tag}
                className={styles.tag}
            >
                {tag}
            </span>
        ))}
    </div>;
};