import styles from './styles.module.css';
import aboutGraphic from "@site/static/img/about-graphic.png";

export default function About() {
  return (
      <div className="about about-viewport" id="about">
        <div className="about-info">
          <h1 className="about-header">About header here</h1>
          <div className="about-grid">
            <img
              className="about-graphic-1"
              src={aboutGraphic}
              alt="About Graphic 1"
            ></img>
            <p className="about-text-1" role="paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at
              odio pretium leo porta lobortis. Sed et sem scelerisque, fermentum
              lacus et, dapibus tortor. Nam consectetur ultricies urna id
              fringilla.
            </p>

            <img
              className="about-graphic-2"
              src={aboutGraphic}
              alt="About Graphic 2"
            ></img>
            <p className="about-text-2" role="paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at
              odio pretium leo porta lobortis. Sed et sem scelerisque, fermentum
              lacus et, dapibus tortor. Nam consectetur ultricies urna id
              fringilla.
            </p>

            <img
              className="about-graphic-3"
              src={aboutGraphic}
              alt="About Graphic 3"
            ></img>
            <p className="about-text-3" role="paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at
              odio pretium leo porta lobortis. Sed et sem scelerisque, fermentum
              lacus et, dapibus tortor. Nam consectetur ultricies urna id
              fringilla.
            </p>

            <img
              className="about-graphic-4"
              src={aboutGraphic}
              alt="About Graphic 4"
            ></img>
            <p className="about-text-4" role="paragraph">
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
