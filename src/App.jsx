/* -------------------------------------------------------------------------- */
/*              Main JavaScript file that houses the main web app             */
/* -------------------------------------------------------------------------- */

/* --------------------------------- Imports -------------------------------- */
import "./css/App.css";
import Welcome from "./Welcome.jsx";
import Install from "./Install.jsx";
import InstallandDemo from "./InstallandDemo.jsx";
import Demo from "./Demo.jsx";
import About from "./About.jsx";
import Footer from "./Footer.jsx";
import { StrictMode } from "react";

/* -------------------------------- Main App Function -------------------------------- */
function App() {
  return (
    <>
      <main>
        <StrictMode>
          <Welcome />
          <Install />
          <InstallandDemo />
          <Demo />
          <About />
        </StrictMode>
      </main>
      <StrictMode>
        <Footer />
      </StrictMode>
    </>
  );
}

export default App;
