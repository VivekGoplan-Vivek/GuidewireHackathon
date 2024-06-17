import Header from "../Header/Header";
import styles from "./kudos.module.css";

export default function Kudos() {
    

    return(
       <div>
            <Header subTxt="See My" headerTxt="Kudos" />
            <div className={styles.kudosComapnyname}>Myntra Designs PVT Ltd</div>
            <div className={styles.kudosImgWrapper}>
                <div className={styles.kudosImgContainer}>
                    <img className={styles.kudosImg} src="Images/kudos/IMG_20240606_234250.jpg" alt="kudos-image" />
                    <div className={styles.viewKudosWrapper}>View Kudos</div>
                </div>
                <div className={styles.kudosImgContainer}>
                    <img className={styles.kudosImg} src="Images/kudos/IMG_20240606_233445.jpg" alt="kudos-image" />
                    <div className={styles.viewKudosWrapper}>View Kudos</div>
                </div>
                <div className={styles.kudosImgContainer}>
                    <img className={styles.kudosImg} src="Images/kudos/IMG_20240606_234058.jpg" alt="kudos-image" />
                    <div className={styles.viewKudosWrapper}>View Kudos</div>
                </div>
                <div className={styles.kudosImgContainer}>
                    <img className={styles.kudosImg} src="Images/kudos/IMG_20240606_233714.jpg" alt="kudos-image" />
                    <div className={styles.viewKudosWrapper}>View Kudos</div>
                </div>
                <div className={styles.kudosImgContainer}>
                    <img className={styles.kudosImg} src="Images/kudos/IMG_20240606_234455.jpg" alt="kudos-image" />
                    <div className={styles.viewKudosWrapper}>View Kudos</div>
                </div>
            </div>
        
       </div>
    )
}
