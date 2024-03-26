
import styles from "./topheader.module.css";



export default function TopHeader() {


  return (
    <div className={styles.topHeaderWrapper}>
        <div className={styles.topHeaderTxt}>
            <img src="Images/vivekgopalan.jpg" className={styles.topHeaderProfilePic} alt="profile-pic"></img>
            <div >
              <div className={styles.topHeaderName}>Vivek Gopalan</div>
              <div className={styles.topHeaderDesignation}>Frontend Developer</div>
            </div>
        </div>
        <div className={styles.topHeaderProfileInfo}>
          <ul className={styles.listOfContent}>
              <li className={styles.listTxt}>About</li>
              <li className={styles.listTxt}>Experience</li>
              <li className={styles.listTxt}>Skills</li>
              <li className={styles.listTxt}>Projects</li>
              <li className={styles.listTxt}>Kudos</li>
              <li className={styles.listTxt}>Contact</li>
          </ul>
          <ul className={styles.topHeaderActivity}>
            <li><img src="Images/linkedinlogo.webp" className={styles.topHeaderLinkedinLogo} alt="profile-pic"></img></li>
            <li><img src="Images/githublogo.png" className={styles.topHeaderGithubLogo} alt="profile-pic"></img></li>
            <li><div className={styles.topHeaderDownloadCvTxt}>Download CV</div></li>
          </ul>
        </div>
     
    </div>
  );
}
