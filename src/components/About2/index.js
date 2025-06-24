import styles from "./styles.module.css"

export default function About2() {
    return (
      <div className={`${styles.showForMobile} ${styles.about} ${styles.aboutViewport} ${styles.blueTheme}`} id="about">
        <div className={styles.aboutGrid}>
                      <div className={styles.aboutSection1}>
                        <h1 className={styles.aboutHeader}>Cloud Orientated</h1>
                        <p className={styles.aboutText} role="paragraph">
                          The ability to quickly deploy and run the broker as a container
                          image
                        </p>
                      </div>
                      <div className={styles.aboutSection2}>
                        <h1 className={styles.aboutHeader}>Kubernetes</h1>
                        <p className={styles.aboutText} role="paragraph">
                          The ability to run a Kubernetes native container on Kubernetes
                        </p>
                      </div>
                      <div className={styles.aboutSection3}>
                        <h1 className={styles.aboutHeader}>Operator</h1>
                        <p className={styles.aboutText} role="paragraph">
                          The operator based solution to manage the Kubernetes deployment
                        </p>
                      </div>
                      <div className={styles.aboutSection4}>
                        <h1 className={styles.aboutHeader}>Examples</h1>
                        <p className={styles.aboutText} role="paragraph">
                          A suite of examples to demonstrate each feature
                        </p>
                      </div>
                      <div className={styles.aboutSection5}>
                        <h1 className={styles.aboutHeader}>CI/CD</h1>
                        <p className={styles.aboutText} role="paragraph">
                          Continuous intergration and deployment for quick development
                        </p>
                      </div>
                    </div>
          </div>
    );
  }
  