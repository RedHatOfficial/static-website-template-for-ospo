import aboutGraphic1 from "./assets/ramalama-about-graphic-1.svg";
import aboutGraphic2 from "./assets/ramalama-about-graphic-2.svg";
import aboutGraphic3 from "./assets/ramalama-about-graphic-3.svg";
import aboutGraphic4 from "./assets/ramalama-about-graphic-4.svg";

function About() {
    return (
        <>
            {/* ----------------------------- About Section ---------------------------- */}
                    <div className="about about-viewport" id="about">
                      <div className="about-info">
                        <h1 className="about-header">How does it work?</h1>
                        <div className="about-grid">
                          <img
                            className="about-graphic-1"
                            src={aboutGraphic1}
                            alt="RamaLama About Graphic 1"
                          ></img>
                          <p className="about-text-1" role="paragraph">
                            When RamaLama is first run, it inspects your system for GPU
                            support, falling back to CPU support if no GPUs are present.
                          </p>
            
                          <img
                            className="about-graphic-2"
                            src={aboutGraphic2}
                            alt="RamaLama About Graphic 2"
                          ></img>
                          <p className="about-text-2" role="paragraph">
                            It then uses a container engine like Podman or Docker to
                            download a container image from quay.io/ramalama.
                          </p>
            
                          <img
                            className="about-graphic-3"
                            src={aboutGraphic3}
                            alt="RamaLama About Graphic 3"
                          ></img>
                          <p className="about-text-3" role="paragraph">
                            Once the container image is in place, RamaLama pulls the
                            specified AI Model from any of types of model registries.
                          </p>
            
                          <img
                            className="about-graphic-4"
                            src={aboutGraphic4}
                            alt="RamaLama About Graphic 4"
                          ></img>
                          <p className="about-text-4" role="paragraph">
                            Time to run our inferencing runtime. RamaLama offers switchable
                            inferencing runtimes, namely llama.cpp and vLLM, for running
                            containerized models.
                          </p>
                        </div>
                      </div>
                    </div>
        </>
    )
}

export default About;