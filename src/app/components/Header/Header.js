import styles from './header.module.css';

export default function Header({ logoSrc, title, subtitle }) {
    return (
        <div className={styles.headerBar}>
            <img src={logoSrc} alt="Guidewire Logo" className={styles.logo} />
            <div className={styles.headerTextGroup}>
                <span className={styles.title}>{title}</span>
                {subtitle && <div className={styles.subtitle}>{subtitle}</div>}
            </div>
        </div>
    );
}