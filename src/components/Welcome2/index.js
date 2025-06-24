// This has a hideForMobile class that is used to hide the about section on mobile
// Removing for template but if you want the full useEffect, add ${styles.hideForMobile} to div that contains the about section

import { useHistory } from "react-router-dom";
import welcomeLogo from "@site/static/img/logo-text.png";
import welcomeLogoDark from "@site/static/img/logo-text.png";
import styles from "./styles.module.css";

export default function Welcome2() {
  const history = useHistory();

  return (
    <>
      <div className={`${styles.welcome} ${styles.viewport}`}>
        <div className={styles.welcomeInfo}>
          <img className={styles.welcomeLogo} src={welcomeLogo} />
          <img className={styles.welcomeLogoDark} src={welcomeLogoDark} />
          <h2 className={styles.welcomeH2}>H2 text goes here</h2>
          <div className={styles.buttonGroup}>
            <button
              className={styles.staticButton}
              onClick={() => history.push("#")}
            >
              Button 1
            </button>
            <button
              className={styles.staticButton}
              onClick={() => history.push("#")}
            >
              Button 2
            </button>

            <button
              className={styles.staticButton}
              onClick={() => history.push("#")}
            >
              Button 3
            </button>
          </div>
          <div className={`${styles.aboutGrid} ${styles.hideForMobile}`}>
            <div className={styles.aboutSection1}>
              <h1 className={styles.aboutHeader}>Header 1</h1>
              <p className={styles.aboutText} role="paragraph">
                This is where the text goes for the first section
              </p>
            </div>
            <div className={styles.aboutSection2}>
              <h1 className={styles.aboutHeader}>Header 2</h1>
              <p className={styles.aboutText} role="paragraph">
                This is where the text goes for the second section
              </p>
            </div>
            <div className={styles.aboutSection3}>
              <h1 className={styles.aboutHeader}>Header 3</h1>
              <p className={styles.aboutText} role="paragraph">
                This is where the text goes for the third section
              </p>
            </div>
            <div className={styles.aboutSection4}>
              <h1 className={styles.aboutHeader}>Header 4</h1>
              <p className={styles.aboutText} role="paragraph">
                This is where the text goes for the fourth section
              </p>
            </div>
            <div className={styles.aboutSection5}>
              <h1 className={styles.aboutHeader}>Header 5</h1>
              <p className={styles.aboutText} role="paragraph">
                This is where the text goes for the fifth section
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
