import classes from "./OutForBreak.module.css";

function OutForBreak() {
  return (
    <div>
    <div className={classes.bgMaint}></div>
    <div className={classes.ha}></div>

    <div className={classes.firework}></div>
    <div className={classes.OutForBreak}>
      <div>
        <br/>
        <br/>
        <p style={{ textAlign: "center" }}>
          We're out for quick break. <br /> We'll be ready to serve you <br/> more prizes once we're back!
        </p>
        <br/>
        <br/>
      </div>
    </div>
  </div>
  );
}

export default OutForBreak;
