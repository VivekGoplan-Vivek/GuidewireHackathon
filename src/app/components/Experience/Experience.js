
import Header from "../Header/Header";
import styles from "./experience.module.css";

const EXPERIENCE_DATA = [
  {
    "designation":"Techincal Lead",
    "companyName":"Valeo Health ME",
    "yearActive":"Mar 2023 - Present",
    "companyLogo":"Images/valeologo.png"
  },
  {
    "designation":"SDE-II",
    "companyName":"Valeo Health ME",
    "yearActive":"Mar 2022 - Feb 2023",
    "companyLogo":"Images/valeologo.png"
  },
  {
    "designation":"Front End Developer",
    "companyName":"Myntra Designs Pvt. Ltd",
    "yearActive":"Feb 2018 - Feb 2022",
    "companyLogo":"Images/myntralogo.png"
  },
  {
    "designation":"Front End Developer",
    "companyName":"Go Digit General Insurance Limited",
    "yearActive":"Sep 2017 - Jan 2018",
    "companyLogo":"Images/godigitlogo.png"
  },
  {
    "designation":"Product Engineer",
    "companyName":"Codingmart Technologies Private Limited",
    "yearActive":"May 2017 - Feb 2022",
    "companyLogo":"Images/codingmart_technologies_logo.jpeg"
  },
]

const CompanyInfo = ({companyInfoData}) =>{
  const {designation="",companyName="",yearActive="",companyLogo=""} = companyInfoData || {}
  return(
    <div className={styles.experienceCompanyInfoWrap}>
    <div className={styles.experienceCompanyImgContainer}>
      <img src={companyLogo} className={styles.experienceCompanyLogo}></img>
    </div>

    <div className={styles.experienceCompanyInfoContainer}>
      <div className={styles.experienceDesignation}>{designation}</div>
      <div className={styles.experienceCompanyName}>{companyName}</div>
      <div className={styles.experienceDate}>{yearActive}</div>
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
              {
                EXPERIENCE_DATA.map((data,index)=><CompanyInfo companyInfoData={data} key={index}/>)
              }
            </div>
          
           <div className={styles.experienceTimerWrapper}>
              <div className={styles.experienceTimerContainer}>
                  <div className={styles.experienceTimer}>6 <span className={styles.experienceTimerTxt}>years</span></div>
                  <div className={styles.experienceTimer}>6 <span className={styles.experienceTimerTxt}>months</span></div>
                  <div className={styles.experienceTimer}>6 <span className={styles.experienceTimerTxt}>days</span></div>
              </div>
              <div className={styles.experienceClockContainer}>
                <div className={styles.experienceClock}>
                  <div className={styles.experienceClockTime}>12</div>
                  <div className={styles.experienceClockTimeTxt}>Hrs</div>
                </div>
                <div className={styles.experienceClock}>
                  <div className={styles.experienceClockTime}>12</div>
                  <div className={styles.experienceClockTimeTxt}>Min</div>
                </div>
                <div className={styles.experienceClock}>
                  <div className={styles.experienceClockTime}>1</div>
                  <div className={styles.experienceClockTimeTxt}>Sec</div>
                </div>
              </div>
            </div>
        </div>
    </>
  );
}
