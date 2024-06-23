
import TopHeader from "./components/TopHeader/TopHeader";
import MyInfo from "./components/MyInfo/MyInfo";
import Experience from "./components/Experience/Experience";
import Skills from "./components/Skills/Skills";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Project from "./components/Projects/Project";
import Kudos from "./components/Kudos/Kudos";

import styles from "./page.module.css";

export default function Home() {
  return (
    <>
    
    <TopHeader />
    <div className={styles.homePageWrapper}>
      {/* <MyInfo /> */}
        <About />
        <Experience />
        <Skills />
        {/* <Project /> */}
      <Kudos />
      <Contact /> 
    </div>
    </>
  );
}
