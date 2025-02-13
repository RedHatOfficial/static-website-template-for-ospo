function Install() {
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
            <div>If being installed via command line, command goes here</div>
          </p>
          {/* -------------------------------------------------------------------------- */}

          <a href="https://github.com/containers/ramalama?tab=readme-ov-file#install">
            <button className="install-button" role="button">
              More install methods here
            </button>
          </a>
        </div>
      </div>
    </>
  );
}

export default Install;
