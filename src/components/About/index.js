import styles from './styles.module.css';
import aboutGraphic from "@site/static/img/about-graphic.png";

export default function About() {
  return (
      <div className={`${styles.about} ${styles.aboutViewport}`} id="about">
        <div className="about-info">
          <h1 className={styles.aboutHeader}>About header here</h1>
          <div className={styles.aboutGrid}>
            <img
              className={styles.aboutGraphic1}
              src={aboutGraphic}
              alt="About Graphic 1"
            ></img>
            <p className={styles.aboutText1} role="paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at
              odio pretium leo porta lobortis. Sed et sem scelerisque, fermentum
              lacus et, dapibus tortor. Nam consectetur ultricies urna id
              fringilla.
            </p>

            <img
              className={styles.aboutGraphic2}
              src={aboutGraphic}
              alt="About Graphic 2"
            ></img>
            <p className={styles.aboutText2} role="paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at
              odio pretium leo porta lobortis. Sed et sem scelerisque, fermentum
              lacus et, dapibus tortor. Nam consectetur ultricies urna id
              fringilla.
            </p>

            <img
              className={styles.aboutGraphic3}
              src={aboutGraphic}
              alt="About Graphic 3"
            ></img>
            <p className={styles.aboutText3} role="paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at
              odio pretium leo porta lobortis. Sed et sem scelerisque, fermentum
              lacus et, dapibus tortor. Nam consectetur ultricies urna id
              fringilla.
            </p>

            <img
              className={styles.aboutGraphic4}
              src={aboutGraphic}
              alt="About Graphic 4"
            ></img>
            <p className={styles.aboutText4} role="paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at
              odio pretium leo porta lobortis. Sed et sem scelerisque, fermentum
              lacus et, dapibus tortor. Nam consectetur ultricies urna id
              fringilla.
            </p>
          </div>
        </div>
      </div>
  );
}
