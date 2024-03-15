
import styles from "./myinfo.module.css";

export default function MyInfo() {
    

    return(
        <div className={styles.myInfoWrapper}>
            <div className={styles.myInfoProfile}>
                <img src="Images/vivekgopalan.jpg" className={styles.myInfoProfilePic} alt="profile-pic"></img>
            </div>
            <div className={styles.myInfoContainer}>
                <div className={styles.myInfoHello}>Hello, I'm</div>
                <div className={styles.myInfoName}>Vivek Gopalan</div>
                <div className={styles.myInfoPosition}>Frontend Developer</div>
                <div className={styles.myInfoCvContanier}>
                    <div className={styles.myInfoDownloadCv}>Download CV</div>
                    <div className={styles.myInfoContact}>Contact Info</div>
                </div>
                <div className={styles.myInfoContactInfo}>
                    <a href=""><img src="Images/linkedinlogo.webp" alt="linkedin" height={30} width={30}/></a>
                    <a href=""><img src="Images/githublogo.png" alt="github" height={30} width={30}/></a>
                </div>
            </div>
        </div>
    )
}
