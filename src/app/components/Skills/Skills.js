
import Header from "../Header/Header";
import styles from "./skills.module.css";


const SkillInfo = ({data}) => {
    const {skillName="",skillStatus="", skillLogo=""} = data || {}
    return(
        <div className={styles.skillInfoWrapper}>
        <img className={styles.skillLogo} src={skillLogo} />
        <div className={styles.skillSetContent}>
            <div className={styles.skillTxt}>{skillName}</div>
            {/* <div className={styles.skillStatus}>{skillStatus}</div> */}
        </div>
    </div>
    )
}
    

const SKILLS_DATA_WEBSITE = [
    {
        "skillName":"HTML",
        "skillStatus":"Experienced",
        "skillLogo":"Images/html-logo.webp"
    },
    {
        "skillName":"CSS3",
        "skillStatus":"Experienced",
        "skillLogo":"Images/css-logo.webp"
    },
    {
        "skillName":"MEDIA QUERY",
        "skillStatus":"Experienced",
        "skillLogo":"Images/media-query-logo.png"
    },
    {
        "skillName":"BOOTSTRAP",
        "skillStatus":"Experienced",
        "skillLogo":"Images/bootstrap-logo.png"
    },
    {
        "skillName":"JAVASCRIPT",
        "skillStatus":"Experienced",
        "skillLogo":"Images/javascript-logo.webp"
    },
    {
        "skillName":"REACT JS",
        "skillStatus":"Experienced",
        "skillLogo":"Images/react-js-logo.png"
    },
    {
        "skillName":"REDUX",
        "skillStatus":"Experienced",
        "skillLogo":"Images/redux-logo.png"
    },
    {
        "skillName":"TYPESCRIPT",
        "skillStatus":"Experienced",
        "skillLogo":"Images/typescript-logo.png"
    },
    {
        "skillName":"NEXT JS",
        "skillStatus":"Experienced",
        "skillLogo":"Images/next-js-logo.jpeg"
    },
    {
        "skillName":"Webpack",
        "skillStatus":"Experienced",
        "skillLogo":"Images/webpack-logo.png"
    }
]

const SKILLS_DATA_APP =[
    {
        "skillName":"REACT NATIVE",
        "skillStatus":"Experienced",
        "skillLogo":"Images/react-native-logo.jpeg"
    },
]

const SKILLS_DATA_BACKEND =[
    {
        "skillName":"NODE JS",
        "skillStatus":"Experienced",
        "skillLogo":"Images/node-js-logo.png"
    },
    {
        "skillName":"REDIS",
        "skillStatus":"Experienced",
        "skillLogo":"Images/redis-logo.png"
    },
    {
        "skillName":"Mongo Db",
        "skillStatus":"Experienced",
        "skillLogo":"Images/mongo-db-logo.png"
    },
    {
        "skillName":"Mysql",
        "skillStatus":"Experienced",
        "skillLogo":"Images/mysql-logo.png"
    },
]

const SKILLS_DATA_OTHERS =[
    {
        "skillName":"SEO",
        "skillStatus":"Experienced",
        "skillLogo":"Images/seo-analytics.png"
    },
    {
        "skillName":"Analytics",
        "skillStatus":"Experienced",
        "skillLogo":"Images/analytics.jpg"
    },
    {
        "skillName":"Firebase",
        "skillStatus":"Experienced",
        "skillLogo":"Images/firebase.png"
    },
    {
        "skillName":"Ab Test",
        "skillStatus":"Experienced",
        "skillLogo":"Images/abtest.png"
    },
]


export default function Skills() {


  return (
    <>
        <div id="skills"></div>
        <Header subTxt="Debug My" headerTxt="Skills"/>
        <div className={styles.skillsMainWrapper} >
        <div className={styles.skillsWrapper}>
            <div className={styles.skillsHeadTxt}>Frontend Development</div>
            <div className={styles.skillsSubTxt}>Website</div>
            <div className={styles.skillsContainer}>
                {
                    SKILLS_DATA_WEBSITE.map((data,index)=>{
                        return(
                            <SkillInfo data={data} key={index}/>
                        )
                    })
                }
            </div>
            <div className={styles.skillsSubTxt}>App</div>
            <div className={styles.skillsContainer}>
                {
                    SKILLS_DATA_APP.map((data,index)=>{
                        return(
                            <SkillInfo data={data} key={index}/>
                        )
                    })
                }
            </div>
        </div>
        <div className={styles.skillsWrapper}>
            <div className={styles.skillsHeadTxt}>Backend Development</div>
            {/* <div className={styles.skillsSubTxt}>Website</div> */}
            <div className={styles.skillsContainer}>
                {
                    SKILLS_DATA_BACKEND.map((data,index)=>{
                        return(
                            <SkillInfo data={data} key={index}/>
                        )
                    })
                }
            </div>
            {/* <div className={styles.skillsSubTxt}>App</div>
            <div className={styles.skillsContainer}>
                <SkillInfo />
                <SkillInfo />
                <SkillInfo />
            </div> */}
        </div>
        <div className={styles.skillsWrapper}>
            <div className={styles.skillsHeadTxt}>Others</div>
            {/* <div className={styles.skillsSubTxt}>Website</div> */}
            <div className={styles.skillsContainer}>
                {
                    SKILLS_DATA_OTHERS.map((data,index)=>{
                        return(
                            <SkillInfo data={data} key={index}/>
                        )
                    })
                }
            </div>
            {/* <div className={styles.skillsSubTxt}>App</div>
            <div className={styles.skillsContainer}>
                <SkillInfo />
                <SkillInfo />
                <SkillInfo />
            </div> */}
        </div>
        </div>
     

    </>
  );
}
