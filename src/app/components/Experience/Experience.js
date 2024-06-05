
'use client';
import { useEffect, useState } from "react";
import Header from "../Header/Header";
import styles from "./experience.module.css";

const EXPERIENCE_DATA = [
  {
    "designation":"Techincal Lead",
    "companyName":"Valeo Health ME",
    "yearActive":"Mar 2023 - Present",
    "companyLogo":"Images/valeologo.png",
    "redirectLink":"https://feelvaleo.com/"
  },
  {
    "designation":"SDE-II",
    "companyName":"Valeo Health ME",
    "yearActive":"Mar 2022 - Feb 2023",
    "companyLogo":"Images/valeologo.png",
    "redirectLink":"https://feelvaleo.com/"
  },
  {
    "designation":"Front End Developer",
    "companyName":"Myntra Designs Pvt. Ltd",
    "yearActive":"Feb 2018 - Feb 2022",
    "companyLogo":"Images/myntralogo.png",
    "redirectLink":"https://www.myntra.com/"
  },
  {
    "designation":"Front End Developer",
    "companyName":"Go Digit General Insurance Limited",
    "yearActive":"Sep 2017 - Jan 2018",
    "companyLogo":"Images/godigitlogo.png",
    "redirectLink":"https://www.godigit.com/"
  },
  {
    "designation":"Product Engineer",
    "companyName":"Codingmart Technologies Private Limited",
    "yearActive":"May 2017 - Feb 2022",
    "companyLogo":"Images/codingmart_technologies_logo.jpeg",
    "redirectLink":"https://codingmart.com/"
  },
]

const CompanyInfo = ({companyInfoData}) =>{
  const {designation="",companyName="",yearActive="",companyLogo="",redirectLink=""} = companyInfoData || {}
  return(
    <div className={styles.experienceCompanyInfoWrap} onClick={()=>window.open(redirectLink, '_blank')}>
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


  const [experienceInfo , setExperienceInfo] = useState([]);

  useEffect(()=>{

    const startDate = '2017-05-02';
    const endDate = new Date();
    const getExp = calculateExperience(startDate ,endDate )
    setExperienceInfo(getExp);

  },[])

  function calculateExperience(startDate, endDate) {
    const start = new Date(startDate);
    const end = new Date(endDate);

    // Calculate the difference in milliseconds
    const differenceMs = end - start;

    // Convert milliseconds to years
    const millisecondsPerYear = 1000 * 60 * 60 * 24 * 365; // Approximation for leap years
    const years = Math.floor(differenceMs / millisecondsPerYear);

    // Calculate the remaining milliseconds after subtracting full years
    const remainingMs = differenceMs - (years * millisecondsPerYear);

    // Convert remaining milliseconds to months
    const millisecondsPerMonth = millisecondsPerYear / 12;
    const months = Math.floor(remainingMs / millisecondsPerMonth);

    // Calculate the remaining milliseconds after subtracting full months
    const remainingMsAfterMonths = remainingMs - (months * millisecondsPerMonth);

    // Convert remaining milliseconds to days
    const millisecondsPerDay = 1000 * 60 * 60 * 24;
    const days = Math.floor(remainingMsAfterMonths / millisecondsPerDay);

    // Return the experience as an object
    return { years, months, days };
}




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
                  <div className={styles.experienceTimer}>{experienceInfo.years}<span className={styles.experienceTimerTxt}>years</span></div>
                  <div className={styles.experienceTimer}>{experienceInfo.months} <span className={styles.experienceTimerTxt}>{experienceInfo.months>1?"months":"month"}</span></div>
                  <div className={styles.experienceTimer}>{experienceInfo.days} <span className={styles.experienceTimerTxt}>{experienceInfo.days>1?"days":"day"}</span></div>
              </div>
              {/* <div className={styles.experienceClockContainer}>
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
              </div> */}
            </div>
        </div>
    </>
  );
}
