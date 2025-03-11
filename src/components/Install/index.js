//import styles from "./styles.module.css"

export default function Install() {
    return (
      <>
        {/* ----------------------------- Install Section ---------------------------- */}
        <div className="install viewport background-2" id="install">
          <div className="install-info">
            <h1 className="install-h1">How to Install header</h1>
            <h2 className="install-h2">More info header</h2>
  
            {/* ----------- Modular Section (copy and paste as many as needed) ---------- */}
            <h3 className="install-h3">Distro:</h3>
            <p className="install-code">
              If being installed via command line, command goes here
            </p>
            {/* -------------------------------------------------------------------------- */}
              <button className="static-button install-button" role="button" href="#">
                More install methods here
              </button>
          </div>
        </div>
      </>
    );
  }