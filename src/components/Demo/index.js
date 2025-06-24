import demoGIF from "@site/static/img/GIF.gif";
import styles from './styles.module.css';

export default function Demo() {
  return (
    <>
      {/* ------------------------------ Demo Section ------------------------------ */}
      <div className={`${styles.demo} ${styles.viewport} ${styles.background2}`}>   
        <div className="demo-info">
          <h1 className={styles.demoH1}>Demo header here</h1>
          <img className={styles.demoGIF} src={demoGIF} alt=""></img>
        </div>
      </div>
    </>
  );
};