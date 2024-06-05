
import styles from "./topheader.module.css";



export default function TopHeader() {


  return (
    <div className={styles.topHeaderWrapper}>
        <div className={styles.topHeaderTxt}>
            <img src="Images/vivekgopalan.jpg" className={styles.topHeaderProfilePic} alt="profile-pic"></img>
            <div >
              <div className={styles.topHeaderName}>Vivek Gopalan</div>
              <div className={styles.topHeaderDesignation}>Frontend Developer</div>
              <ul className={styles.topHeaderActivityMob}>
              <li > <a href="https://www.linkedin.com/in/vivek-g-29206bb4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank"><img src="Images/linkedinlogo.webp" className={styles.topHeaderLinkedinLogo} alt="profile-pic"></img></a></li>
              <li> <a href="https://github.com/VivekGoplan-Vivek" target="_blank"><img src="Images/githublogo.png" className={styles.topHeaderGithubLogo} alt="profile-pic"></img>
                </a></li>
                <li> <a href="https://github.com/VivekGoplan-Vivek" target="_blank"><img src="Images/cvicon.jpg" className={styles.topHeaderGithubLogo} alt="profile-pic"></img>
                </a></li>
            </ul>
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
            <li > <a href="https://www.linkedin.com/in/vivek-g-29206bb4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank"><img src="Images/linkedinlogo.webp" className={styles.topHeaderLinkedinLogo} alt="profile-pic"></img></a></li>
            <li> <a href="https://github.com/VivekGoplan-Vivek" target="_blank"><img src="Images/githublogo.png" className={styles.topHeaderGithubLogo} alt="profile-pic"></img>
              </a></li>
              <li> <a href="https://github.com/VivekGoplan-Vivek" target="_blank"><img src="Images/cvicon.jpg" className={styles.topHeaderGithubLogo} alt="profile-pic"></img>
              </a></li>
          </ul>
        </div>
    </div>
  );
}
