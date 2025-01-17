function Footer() {
  return (
    <>
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

export default Footer;