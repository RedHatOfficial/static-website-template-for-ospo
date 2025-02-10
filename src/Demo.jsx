import demoGIF from "./assets/GIF.gif"

function Demo() {
  return (
    <>
      {/* ------------------------------ Demo Section ------------------------------ */}
      <div className="demo viewport background-2">
        <div className="demo-info">
          <h1 className="demo-h1">Demo header here</h1>
          {/* GIF Here */}
          <img className="demo-gif" src={demoGIF}></img>
        </div>
      </div>
    </>
  );
}

export default Demo;
