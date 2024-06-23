"use client";
import Header from "../Header/Header";
import styles from "./project.module.css";
import {ProjectCardData} from "./projectCardData";







const ProjectCard = ({cardData={}}) =>{

  console.log("cardData",cardData)

  return(
    <div className={styles.projectCardWrapper}>
      <div className={styles.projectHeaderTxt}>{cardData.platformName}: <span className={styles.projectRedirection}>{cardData.platformUrl}</span></div>
      <div className={styles.projectCardContainer}>
        <div className={styles.projectCardImgContainer}>
          <img className={styles.projectCardImg} src="" />
          <img className={styles.projectCardImg} src=""/>
          <img className={styles.projectCardImg} src=""/>
        </div>
        <div className={styles.projectCardDesc}>{cardData.description}</div>
        <div className={styles.projectTechnologyUsed} dangerouslySetInnerHTML={{ __html:cardData.techStack}}></div>
        <div className={styles.projectActionContainer}>
          <div className={styles.projectActionViewDetails}>View Details</div>
          <div className={styles.projectLiveDemo}>Live Demo</div>
        </div>
      </div>
    </div>
  )
}


const CompanyProjectInfo = () =>{

  console.log("ProjectCardData",ProjectCardData)

  return(
    <>

        {
          ProjectCardData.map((data,index)=>{
            return(
              <>
                <div className={styles.projectCompanyWrapper}>
                <div className={styles.projectCompanyname}>{data.companyName}</div>
                  <div className={styles.projectViewDetails}>View Details</div>
                </div>
                <div className={styles.projectCardInfo}>
                  {
                    data["projectData"].map((pData,index)=> <ProjectCard cardData={pData} key={index}/>)
                  }
                </div>
              </>
            )
          })
        }
       
    </>
  )
}
    


export default function Project() {


  return (
    <>
        <Header subTxt="Explore My" headerTxt="Projects"/>
        <CompanyProjectInfo />
        {/* <CompanyProjectInfo /> */}
    </>
  );
}
