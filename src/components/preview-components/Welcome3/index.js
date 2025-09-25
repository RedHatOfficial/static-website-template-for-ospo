import styles from "./styles.module.css";
import welcomeLogo from "@site/static/img/logo-text.png";
import welcomeLogoSmall from "@site/static/img/logo-text.png";

export default function Welcome3() {
  return (
    <div className={`${styles.welcome} ${styles.viewport}`}>
      <div className={styles.welcomeInfo}>
        <h1 className={styles.welcomeH1}>Welcome 3</h1>
        <img className={styles.welcomeLogo} width="75%" src={welcomeLogo}></img>
        <img className={styles.welcomeLogoSmall} width="100%" src={welcomeLogoSmall}></img>
        <div className={styles.buttonGroup}>
          <button className={styles.staticButtonBluesky}>
            <a href="#" target="_blank">
              Button 1
            </a>
          </button>
          <button className={styles.staticButtonDiscord}>
            {" "}
            <a href="#" target="_blank">Button 2</a>
          </button>
          <button className={styles.staticButton}>
            {" "}
            <a href="#" target="_blank">Button 3</a>
          </button>
        </div>
      </div>
    </div>
  );
}
