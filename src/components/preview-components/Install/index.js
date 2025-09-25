import styles from "./styles.module.css"

export default function Install() {
    return (
      <>
        {/* ----------------------------- Install Section ---------------------------- */}
        <div className={`${styles.install} ${styles.viewport} ${styles.background2}`} id="install">
          <div className={styles.installInfo}>
            <h1 className="install-h1">Install 1</h1>
            <h2 className="install-h2">More info header</h2>
  
            {/* ----------- Modular Section (copy and paste as many as needed) ---------- */}
            <h3 className={styles.installH3}>Distro:</h3>
            <p className={styles.installCode}>
              If being installed via command line, command goes here
            </p>
            {/* -------------------------------------------------------------------------- */}
              <button className={styles.installButton} role="button" href="#">
                More install methods here
              </button>
          </div>
        </div>
      </>
    );
  }