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
          <h2 className={styles.welcomeH2}>
            A collection of container images that provide a way to deploy the
            Apache ActiveMQ Artemis Broker on Kubernetes
          </h2>
          <div className={styles.buttonGroup}>
            <button
              className={styles.staticButton}
              onClick={() => history.push("/arkmq-org.github.io/docs/getting-started/quick-start")}
            >
              Quick Start Guide here
            </button>
            <button
              className={styles.staticButton}
              onClick={() => history.push("/arkmq-org.github.io/docs/contribute")}
            >
              Contribute to the project
            </button>

            <button
              className={styles.staticButton}
              onClick={() => history.push("/arkmq-org.github.io/docs/")}
            >
              View documentation here
            </button>
          </div>
          <div className={`${styles.aboutGrid} ${styles.hideForMobile}`}>
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
      </div>
    </>
  );
}
