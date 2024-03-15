
import Header from "../Header/Header";
import styles from "./skills.module.css";


const SkillInfo = () => (
    <div className={styles.skillInfoWrapper}>
        <img className={styles.skillLogo} />
        <div className={styles.skillSetContent}>
            <div className={styles.skillTxt}>HTML</div>
            <div className={styles.skillStatus}>Experienced</div>
        </div>
    </div>
)


export default function Skills() {


  return (
    <>
        <Header subTxt="Debug My" headerTxt="Skills"/>
        <div className={styles.skillsMainWrapper}>
        <div className={styles.skillsWrapper}>
            <div className={styles.skillsHeadTxt}>Frontend Development</div>
            <div className={styles.skillsSubTxt}>Website</div>
            <div className={styles.skillsContainer}>
                <SkillInfo />
                <SkillInfo />
                <SkillInfo />
            </div>
            <div className={styles.skillsSubTxt}>App</div>
            <div className={styles.skillsContainer}>
                <SkillInfo />
                <SkillInfo />
                <SkillInfo />
            </div>
        </div>
        <div className={styles.skillsWrapper}>
            <div className={styles.skillsHeadTxt}>Frontend Development</div>
            <div className={styles.skillsSubTxt}>Website</div>
            <div className={styles.skillsContainer}>
                <SkillInfo />
                <SkillInfo />
                <SkillInfo />
                <SkillInfo />
                <SkillInfo />
                <SkillInfo />
                <SkillInfo />
                <SkillInfo />
                <SkillInfo />
                <SkillInfo />
                <SkillInfo />
            </div>
            <div className={styles.skillsSubTxt}>App</div>
            <div className={styles.skillsContainer}>
                <SkillInfo />
                <SkillInfo />
                <SkillInfo />
            </div>
        </div>
        </div>
     

    </>
  );
}
