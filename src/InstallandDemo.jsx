import demoGIF from "./assets/GIF.gif"

function InstallandDemo() {
  return (
    <>
      <div className="install viewport background-2 welcome-grid">
        <div className="install-info">
          <h1 className="install-h1">How to Install header</h1>
          <h2 className="install-h2">More info header</h2>
          {/* ----------- Modular Section (copy and paste as many as needed) ---------- */}
          <h3 className="install-h3">Distro:</h3>
          <p className="install-code">
            <div>If being installed via command line, command goes here</div>
          </p>
          <a href="https://github.com/containers/ramalama?tab=readme-ov-file#install">
            <button className="install-button" role="button">
              More install methods here
            </button>
          </a>
        </div>
        <div className="welcome-image">
          <img className="install-gif" src={demoGIF} alt=""></img>
        </div>
      </div>
    </>
  );
}

export default InstallandDemo;
