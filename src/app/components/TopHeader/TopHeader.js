
import styles from "./topheader.module.css";



export default function TopHeader() {


  return (
    <div className={styles.topHeaderWrapper}>
        <div className={styles.topHeaderTxt}>Vivek Gopalan</div>
        <ul className={styles.listOfContent}>
            <li className={styles.listTxt}>About</li>
            <li className={styles.listTxt}>Experience</li>
            <li className={styles.listTxt}>Skills</li>
            <li className={styles.listTxt}>Projects</li>
            <li className={styles.listTxt}>Kudos</li>
            <li className={styles.listTxt}>Contact</li>
        </ul>
    </div>
  );
}
