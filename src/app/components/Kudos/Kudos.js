'use client';
import { useState } from "react";
import Header from "../Header/Header";
import styles from "./kudos.module.css";


const ViewKudosModal = ({isViewKudosImg=null,onClose={}}) => {

    return (
        // <div className={styles.viewKudosModalWrapper}>
        //     <div className={styles.viewKudosModalWrapperClose} onClick={()=>onClose()}>X</div>
        //     <img className={styles.viewKudosModalWrapperImage} src={isViewKudosImg} alt="kudos-image" />
        // </div>
    
        <div className={styles.modalOverlay} onClick={()=>onClose()}>
        <div className={styles.modal}>
             <img className={styles.viewKudosModalWrapperImage} src={isViewKudosImg} alt="kudos-image" />
            <div className={styles.modalCloseIcon}>Close</div>
        </div>
    </div>
    )
}

export default function Kudos() {

    const [isViewKudosImg, setIsViewKudosImg]  = useState(false)
    

    return(
       <div id="kudos">
            <Header subTxt="See My" headerTxt="Kudos" />
            <div className={styles.kudosComapnyname}>Myntra Designs PVT Ltd</div>
            <div className={styles.kudosImgWrapper}>
                <div className={styles.kudosImgContainer} onClick={()=>setIsViewKudosImg("Images/kudos/IMG_20240606_234250.jpg")}>
                    <img className={styles.kudosImg} src="Images/kudos/IMG_20240606_234250.jpg" alt="kudos-image" />
                    <div className={styles.viewKudosWrapper}>View Kudos</div>
                </div>
                <div className={styles.kudosImgContainer} onClick={()=>setIsViewKudosImg("Images/kudos/IMG_20240606_233445.jpg")}>
                    <img className={styles.kudosImg} src="Images/kudos/IMG_20240606_233445.jpg" alt="kudos-image" />
                    <div className={styles.viewKudosWrapper}>View Kudos</div>
                </div>
                <div className={styles.kudosImgContainer} onClick={()=>setIsViewKudosImg("Images/kudos/IMG_20240606_234058.jpg")}>
                    <img className={styles.kudosImg} src="Images/kudos/IMG_20240606_234058.jpg" alt="kudos-image" />
                    <div className={styles.viewKudosWrapper}>View Kudos</div>
                </div>
                <div className={styles.kudosImgContainer} onClick={()=>setIsViewKudosImg("Images/kudos/IMG_20240606_233714.jpg")}>
                    <img className={styles.kudosImg} src="Images/kudos/IMG_20240606_233714.jpg" alt="kudos-image" />
                    <div className={styles.viewKudosWrapper}>View Kudos</div>
                </div>
                <div className={styles.kudosImgContainer} onClick={()=>setIsViewKudosImg("Images/kudos/IMG_20240606_234455.jpg")}>
                    <img className={styles.kudosImg} src="Images/kudos/IMG_20240606_234455.jpg" alt="kudos-image" />
                    <div className={styles.viewKudosWrapper}>View Kudos</div>
                </div>
            </div>

            {isViewKudosImg && <ViewKudosModal isViewKudosImg={isViewKudosImg} onClose={()=>setIsViewKudosImg(null)}/>}
        
       </div>
    )
}
