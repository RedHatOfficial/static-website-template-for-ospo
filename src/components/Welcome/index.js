import logo from "@site/static/img/logo-square.png";
import icon from "@site/static/img/gravity-ui--persons.png";
import styles from './styles.module.css';

export default function Welcome() {
    return (
        <div className={`${styles.welcome} ${styles.viewport} ${styles.welcomeGrid}`}>
          <div className={styles.welcomeInfo}>
            <h1 className={styles.header}>Name of project</h1>
            <h2 className={styles.welcomeH2}>
              Flavour text for project
            </h2>
            <ul>
              <li>
                  <button className={styles.staticButton} href="#">
                    <img src={icon} alt="Button 1"></img>
                    Link 1
                  </button>
              </li>
              <li>
                  <button className={styles.staticButton} href="#">
                    <img src={icon} alt="Button 2"></img>
                    Link 2
                  </button>
              </li>
              <li>
                  <button className={styles.staticButton} href="#">
                    <img src={icon} alt="Button 3"></img>
                    Link 3
                  </button>
              </li>
              <li>
                  <button className={styles.staticButton} href="#">
                    <img src={icon} alt="Button 4"></img>
                    Link 4
                  </button>
              </li>
            </ul>
          </div>
          <div className={styles.welcomeImage}>
            <img
              className={styles.logoFull}
              src={logo}
              alt=""
            ></img>
          </div>
        </div>
    )
}