import Link from 'next/link';
import type { ReactNode } from 'react';
import styles from './Button.module.css';

type ButtonVariant = 'primary' | 'secondary';

type ButtonProps = {
    href: string;
    variant?: ButtonVariant;
    children: ReactNode;
    className?: string;
};

const variantClasses: Record<ButtonVariant, string> = {
    primary: styles.primary,
    secondary: styles.secondary,
};

export const Button = ({
    href,
    variant = 'primary',
    children,
    className = '',
}: ButtonProps) => {
    const classes = `${styles.button} ${variantClasses[variant]} ${className}`.trim();

    return (
        <Link href={href} className={classes}>
            {children}
        </Link>
    );
};
