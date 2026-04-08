import styles from './Cover.module.css';

interface CoverProps {
    index: number;
    image: string;
    title: string;
}

export const Cover = ({ image, index, title }: CoverProps) => {
    return <div className={index % 2 === 1 ? styles.orderDesktop : undefined}>
        <div className={styles.frame}>
            <img
                src={image}
                alt={title}
                className={styles.image}
            />
            <div className={styles.overlay} />
        </div>
    </div>;
};