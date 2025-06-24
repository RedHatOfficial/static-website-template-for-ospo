import styles from "./styles.module.css"

export default function About2() {
    return (
      <div className={`${styles.showForMobile} ${styles.about} ${styles.aboutViewport} ${styles.blueTheme}`} id="about">
        <div className={styles.aboutGrid}>
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
    );
  }
  