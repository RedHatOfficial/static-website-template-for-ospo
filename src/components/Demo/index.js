import demoGIF from "@site/static/img/GIF.gif";

export default function Demo() {
  return (
    <>
      {/* ------------------------------ Demo Section ------------------------------ */}
      <div className="demo viewport background-2">
        <div className="demo-info">
          <h1 className="demo-h1">Demo header here</h1>
          <img className="demo-gif" src={demoGIF} alt=""></img>
        </div>
      </div>
    </>
  );
};