
import Header from "../Header/Header";
import styles from "./about.module.css";


const ABOUT_INFO = "A Frontend developer with over 4.7 years of hands on experience in frontend development with strong problem solving skills along with having a good knowledge for responsive design and strong ability to create intuitive interfaces using latest technologies with best practices and have good knowledge to optimize the webpage performance and knowledge of tools to simplify and speedup the development process."

export default function About() {


  return (
    <>
        <Header subTxt="Get To Know More" headerTxt="About Me" />
        <div className={styles.aboutDesc}>{ABOUT_INFO}</div>

    </>
  );
}
