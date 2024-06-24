'use client';
import Header from "../Header/Header";
import styles from "./project.module.css";
import {ProjectCardData} from "./projectCardData";

export default function Projects() {

    console.log("ProjectCardData",ProjectCardData)
  return (
    <>
        <div id="projects"></div>
       <Header subTxt="Explore My" headerTxt="Projects"/>

        <div className={styles.projectPageWrapper} >
            {
                ProjectCardData.map((data,index)=>{

                    return(
                        <section className={styles.projectPageCardWrap} id={`projectCard_` + index}>
                            <div className={styles.projectPageCompanyWrap}>
                                <div className={styles.projectPageCompanyName}>{data.companyName}</div>
                                <div className={styles.projectPageViewDetails} onClick={()=>window.location.href = data.redirectionUrl}>View Details</div>
                            </div>
                            
                            {
                                data.workData.map((data,index)=>{
                                    return(
                                        <>
                                            <div className={styles.projectPageCardTitle} dangerouslySetInnerHTML={{__html:data.title}}></div>
                                            <div dangerouslySetInnerHTML={{__html:data.content}} className={styles.projectPageCardContent}></div>
                                        </>
                                    )
                                })
                            }
                           
                        </section>
                    )
                })
            }
               
        </div>
    </>
  );
}
