import demoGIF from "./assets/GIF.gif"

function Demo() {
  return (
    <>
      {/* ------------------------------ Demo Section ------------------------------ */}
      <div className="demo viewport background-2">
        <div className="demo-info">
          <h1 className="demo-header">Demo header here</h1>
          {/* GIF Here */}
          <img src={demoGIF}></img>
        </div>
      </div>
    </>
  );
}

export default Demo;
