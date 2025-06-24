import styles from "./styles.module.css";
import GIF from "@site/static/img/GIF.gif";

export default function About3() {
  return (
    <div className={`${styles.about} ${styles.aboutViewport}`} id="about">
      <div className={styles.aboutInfo}>
        <div className={styles.aboutGrid}>
          <div className={styles.aboutText}>
            <h1 className={styles.aboutHeader}>Header 1</h1>
            <p className={styles.aboutPara} role="paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
              in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur.
            </p>
          </div>
          <img className={styles.aboutGif} alt="About Graphic 1" src={GIF}></img>
        </div>
      </div>
    </div>
  );
}
