import "./css/App.css"
import installIcon from "./assets/gravity-ui--arrow-shape-down-to-line.svg";
import githubIcon from "./assets/octicon--mark-github-24.svg";
import communityIcon from "./assets/gravity-ui--persons.svg";
import hardwareIcon from "./assets/gravity-ui--gear.svg";
import llamaMascot from "./assets/ramalama-logo-llama-only.svg";

function Welcome() {
    return (
        <>
         {/* ----------------------------- Welcome Section ---------------------------- */}
        <div className="welcome viewport welcome-grid">
          <div className="welcome-info" role="banner">
            <h1 className="welcome-h1-orange">rama</h1>
            <h1 className="welcome-h1">lama</h1>
            <h2 className="welcome-h2">
              Make working with AI boring through the use of OCI containers
            </h2>
            <ul>
              <li>
                <a href="https://github.com/containers/ramalama?tab=readme-ov-file#install" role="button">
                  <button>
                    {" "}
                    <img src={installIcon} alt="Install Icon"></img>{" "}
                    <p>Installation guide here</p>
                  </button>
                </a>
              </li>
              <li>
                <a href="https://github.com/containers/ramalama" role="button">
                  <button>
                    {" "}
                    <img src={githubIcon} alt="GitHub Icon"></img>{" "}
                    <p>Contribute to the project</p>
                  </button>
                </a>
              </li>
              <li>
                <a href="https://matrix.to/#/#ramalama:fedoraproject.org" role="button">
                  <button>
                    {" "}
                    <img src={communityIcon} alt="Community Icon"></img>{" "}
                    <p>Interact with the community</p>
                  </button>
                </a>
              </li>
              <li>
                <a href="https://github.com/containers/ramalama?tab=readme-ov-file#hardware-support" role="button">
                  <button>
                    {" "}
                    <img src={hardwareIcon} alt="Hardware Icon"></img>{" "}
                    <p>Hardware support here</p>
                  </button>
                </a>
              </li>
            </ul>
          </div>
          <div className="welcome-image">
            <img
              className="llama-mascot"
              src={llamaMascot}
              alt="RamaLama mascot"
            ></img>
          </div>
        </div>

        {/* ----------------------------- Install Section ---------------------------- */}
        <div className="install viewport orange-background" id="install">
          <div className="install-info">
            <h1 className="install-h1">
              It&apos;s one line and that&apos;s it!
            </h1>
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
    )
}

export default Welcome;