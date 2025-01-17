function Install() {
  return (
    <>
      {/* ----------------------------- Install Section ---------------------------- */}
      <div className="install viewport orange-background" id="install">
        <div className="install-info">
          <h1 className="install-h1">It&apos;s one line and that&apos;s it!</h1>
          <h2 className="install-h2">
            Install RamaLama by running this in your command line:
          </h2>
          <h3 className="install-h3">Linux and Mac:</h3>
          <p className="install-code">
            <div>curl -fsSL https://raw.githubcontent.com/</div>
            <div>containers/ramalama/s/install.sh | bash</div>
          </p>
          <h3 className="install-h3">RamaLama is also available on PyPi!</h3>
          <p className="install-code">pip install ramalama</p>
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
