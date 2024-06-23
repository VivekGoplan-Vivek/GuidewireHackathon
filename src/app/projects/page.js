import styles from "./page.module.css";
import {ProjectCardData} from "./projectData";

export default function Projects() {

    console.log("ProjectCardData",ProjectCardData)
  return (
    <>
        <div className={styles.projectPageHeader}>
                Explore My Projects
        </div>

        <div className={styles.projectPageWrapper}>
            {
                ProjectCardData.map((data,index)=>{

                    return(
                        <div className={styles.projectPageCardWrap}>
                            <div className={styles.projectPageCompanyName}>{data.companyName}</div>
                            {
                                data.workData.map((data,index)=>{
                                    return(
                                        <>
                                            <div className={styles.projectPageCardTitle}>{data.title}</div>
                                            <div dangerouslySetInnerHTML={{__html:data.content}} className={styles.projectPageCardContent}></div>
                                        </>
                                    )
                                })
                            }
                           
                        </div>
                    )
                })
            }
               
        </div>
    </>
  );
}
