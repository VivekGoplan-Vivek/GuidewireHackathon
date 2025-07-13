import styles from './header.module.css';

export default function Header({ logoSrc, title }) {
    return (
        <div className={styles.headerBar}>
            <img src={logoSrc} alt="Guidewire Logo" className={styles.logo} />
            <span className={styles.title}>{title}</span>
        </div>
    );
}