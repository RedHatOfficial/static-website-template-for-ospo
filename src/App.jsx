/* -------------------------------------------------------------------------- */
/*              Main JavaScript file that houses the main web app             */
/* -------------------------------------------------------------------------- */

/* --------------------------------- Imports -------------------------------- */
import "./css/App.css";
import Welcome from "./Welcome.jsx";
import Install from "./Install.jsx";
import Demo from "./Demo.jsx";
import About from "./About.jsx"
// import installIcon from "./assets/gravity-ui--arrow-shape-down-to-line.svg";
// import githubIcon from "./assets/octicon--mark-github-24.svg";
// import communityIcon from "./assets/gravity-ui--persons.svg";
// import hardwareIcon from "./assets/gravity-ui--gear.svg";
// import llamaMascot from "./assets/ramalama-logo-llama-only.svg";
// import aboutGraphic1 from "./assets/ramalama-about-graphic-1.svg";
// import aboutGraphic2 from "./assets/ramalama-about-graphic-2.svg";
// import aboutGraphic3 from "./assets/ramalama-about-graphic-3.svg";
// import aboutGraphic4 from "./assets/ramalama-about-graphic-4.svg";
import { StrictMode } from "react";

/* -------------------------------- Main App Function -------------------------------- */
function App() {
  return (
    <>
      <main>
        <StrictMode>
          <Welcome />
          <Install />
          <Demo />
          <About />
        </StrictMode>
      </main>

      {/* --------------------------------- Footer --------------------------------- */}
      <div className="footer orange-background">
        <footer>
          <p>
            <a href="https://github.com/containers/ramalama">Github</a> |{" "}
            <a href="https://matrix.to/#/#ramalama:fedoraproject.org">Matrix</a>{" "}
            |{" "}
            <a href="https://github.com/containers/ramalama/blob/main/README.md">
              Docs
            </a>
          </p>
          <p>Sponsored by Red Hat</p>
          <p>CC-BY-4.0</p>
        </footer>
      </div>
    </>
  );
}

export default App;
