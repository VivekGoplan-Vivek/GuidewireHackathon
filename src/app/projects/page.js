'use client';
import styles from "./page.module.css";
import {ProjectCardData} from "./projectData";

export default function Projects() {

    console.log("ProjectCardData",ProjectCardData)
  return (
    <>
        <div className={styles.projectPageHeader}>
                <div>Explore My Projects</div>
                <div className={styles.projectPageCompanyList}>
                    <div onClick={()=> document.getElementById('projectCard_0').scrollIntoView({
                behavior: 'smooth',
                 inline: "start",
                 block: "start",
            })}>Valeo Health ME</div> | 
                    <div onClick={()=> document.getElementById('projectCard_1').scrollIntoView({
                behavior: 'smooth',
                 inline: "start",
            })}>Myntra Designs Pvt. Ltd</div> |
                    <div onClick={()=> document.getElementById('projectCard_2').scrollIntoView({
                behavior: 'smooth',
                inline: "nearest",
                block: "start",
            })}>Go Digit General Insurance Limited</div>
                </div>
        </div>

        <div className={styles.projectPageWrapper}>
            {
                ProjectCardData.map((data,index)=>{

                    return(
                        <>
                        <div id={`projectCard_` + index}></div>
                        <div className={styles.projectPageCardWrap}  key={index}>
                            <div className={styles.projectPageCompanyName}>{data.companyName}</div>
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
                           
                        </div>
                        </>
                    )
                })
            }
               
        </div>
    </>
  );
}
