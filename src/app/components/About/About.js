
import Header from "../Header/Header";
import styles from "./about.module.css";


const ABOUT_INFO = `A Frontend developer with over <span style=text-decoration:underline;font-weight:500;>7+ years </span> of hands on experience in developing <b style=font-weight:500;>responsive websites</b> and <span style=text-decoration:underline;font-weight:500;>2+ years </span> specializing in <b style=font-weight:500;>React Native mobile app </b> development. Known for strong problem solving skills and creating intuitive user interfaces using the latest technologies and best practices.Skilled in optimizing performance for both web and mobile platforms.Focused on delivering superior user experiences through responsive design, optimized coding practices, and on-time project completion`


export default function About() {


  return (
    <>
        <Header subTxt="Get To Know More" headerTxt="About Me" />
        <div className={styles.aboutDesc} dangerouslySetInnerHTML={{__html:ABOUT_INFO}}></div>

    </>
  );
}
