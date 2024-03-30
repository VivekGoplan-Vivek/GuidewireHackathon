import Header from "../Header/Header";
import styles from "./project.module.css";



const ProjectCard = () =>{

  return(
    <div className={styles.projectCardWrapper}>
      <div className={styles.projectHeaderTxt}>Mobile App: <span className={styles.projectRedirection}>https://feelvaleo.com</span></div>
      <div className={styles.projectCardContainer}>
        <div className={styles.projectCardImgContainer}>
          <img className={styles.projectCardImg} src="" />
          <img className={styles.projectCardImg} src=""/>
          <img className={styles.projectCardImg} src=""/>
        </div>
        <div className={styles.projectCardDesc}>asdlkasd asdlnsad asdl</div>
        <div className={styles.projectTechnologyUsed}>Technology Used: HTML, css</div>
        <div className={styles.projectActionContainer}>
          <div className={styles.projectActionViewDetails}>View Details</div>
          <div className={styles.projectLiveDemo}>Live Demo</div>
        </div>
      </div>
    </div>
  )
}


const CompanyProjectInfo = () =>{

  return(
    <>
        <div className={styles.projectCompanyWrapper}>
          <div className={styles.projectCompanyname}>Valeo Wellbeing Technologies</div>
          <div className={styles.projectViewDetails}>View Details</div>
        </div>
        <div className={styles.projectCardInfo}>
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
    </>
  )
}
    


export default function Project() {


  return (
    <>
        <Header subTxt="Explore My" headerTxt="Projects"/>
        <CompanyProjectInfo />
        <CompanyProjectInfo />
    </>
  );
}
