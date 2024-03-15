
import Header from "../Header/Header";
import styles from "./experience.module.css";
import Image from 'next/image'


const CompanyInfo = () =>{
  return(
    <div className={styles.experienceCompanyInfoWrap}>
    <div className={styles.experienceCompanyImgContainer}></div>

    <div className={styles.experienceCompanyInfoContainer}>
      <div className={styles.experienceDesignation}>Techincal Lead</div>
      <div className={styles.experienceCompanyName}>Valeo Health ME</div>
      <div className={styles.experienceDate}>Mar 2022 - Present</div>
    </div>
    </div>
  )
}

export default function Experience() {


  return (
    <>
        <Header headerTxt="Experience" subTxt="Travel My" />
        <div className={styles.experienceWrapper}>
            <div>
            <CompanyInfo />
              <CompanyInfo />
              <CompanyInfo />
            </div>
          
            <div className={styles.experienceTimerContainer}>
                <div className={styles.experienceTimer}>6 <span>years</span></div>
                <div className={styles.experienceTimer}>6 <span>months</span></div>
                <div className={styles.experienceTimer}>6 <span>days</span></div>
            </div>
        </div>
    </>
  );
}
