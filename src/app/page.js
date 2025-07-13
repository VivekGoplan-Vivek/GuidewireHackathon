import Header from "./components/Header/Header";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <Header
        logoSrc="/Images/guidewire.svg"
        title="JARVIS AI SEARCH"
      />
      <div className={styles.homePageWrapper}>
        <div className={styles.subtitle}>
          AI-powered status tracker – enter your Main Feature ID
        </div>
        <div className={styles.centerBox}>
          <label className={styles.label} htmlFor="masterId">Enter Main Feature Id</label>
          <div className={styles.inputRow}>
            <input
              id="masterId"
              className={styles.input}
              defaultValue="DIS-234"
              type="text"
            />
            <button className={styles.button}>View Status</button>
          </div>
        </div>
      </div>
    </>
  );
}
