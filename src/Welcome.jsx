import installIcon from "./assets/gravity-ui--arrow-shape-down-to-line.svg";
import githubIcon from "./assets/octicon--mark-github-24.svg";
import communityIcon from "./assets/gravity-ui--persons.svg";
import hardwareIcon from "./assets/gravity-ui--gear.svg";
import logoFull from "./assets/logo-square.svg";

function Welcome() {
    return (
        <>
         {/* ----------------------------- Welcome Section ---------------------------- */}
        <div className="welcome viewport welcome-grid">
          <div className="welcome-info" role="banner">
            <h1 className="welcome-h1">Heading: Name of project goes here</h1>
            <h2 className="welcome-h2">
              Flavour text for project goes here
            </h2>
            <ul>
              <li>
                <a href="" role="button">
                  <button>
                    {" "}
                    <img src={installIcon} alt="Install Icon"></img>{" "}
                    <p>Installation guide here</p>
                  </button>
                </a>
              </li>
              <li>
                <a href="" role="button">
                  <button>
                    {" "}
                    <img src={githubIcon} alt="GitHub Icon"></img>{" "}
                    <p>Contribute to the project</p>
                  </button>
                </a>
              </li>
              <li>
                <a href="" role="button">
                  <button>
                    {" "}
                    <img src={communityIcon} alt="Community Icon"></img>{" "}
                    <p>Interact with the community</p>
                  </button>
                </a>
              </li>
              <li>
                <a href="" role="button">
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
              className="logo-full"
              src={logoFull}
              alt=""
            ></img>
          </div>
        </div>
        </>
    )
}

export default Welcome;