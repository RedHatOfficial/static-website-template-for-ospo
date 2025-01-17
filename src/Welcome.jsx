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
        </>
    )
}

export default Welcome;