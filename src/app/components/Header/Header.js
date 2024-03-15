import styles from './header.module.css';

export default function Header({subTxt="Sub Txt", headerTxt="Header Txt"}) {
    return (
        <div className={styles.headerInfoWrapper}>
              <div className={styles.headerSubTxt}>{subTxt}</div>
              <div className={styles.headerTxt}>{headerTxt}</div>
        </div>
 
    );
  }