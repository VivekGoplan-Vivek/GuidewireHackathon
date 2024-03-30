import Header from "../Header/Header";
import styles from "./kudos.module.css";

export default function Kudos() {
    

    return(
       <div>
            <Header subTxt="See My" headerTxt="Kudos" />
            <div className={styles.kudosComapnyname}>Myntra Designs PVT Ltd</div>
            <div className={styles.kudosImgWrapper}>
                <div className={styles.kudosImgContainer}>
                    <img src="" alt="kudos-image" />
                </div>
                <div className={styles.kudosImgContainer}>
                    <img src="" alt="kudos-image" />
                </div>
                <div className={styles.kudosImgContainer}>
                    <img src="" alt="kudos-image" />
                </div>
                <div className={styles.kudosImgContainer}>
                    <img src="" alt="kudos-image" />
                </div>
                <div className={styles.kudosImgContainer}>
                    <img src="" alt="kudos-image" />
                </div>
            </div>
        
       </div>
    )
}
