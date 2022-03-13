import classes from "./OutForBreak.module.css";

function OutForBreak() {
  return (
    <div>
      <div className={classes.bgMainT}></div>
      <div className={classes.homeFooterContent2}>
        <div>
          <h3>
            We're out for a quick break.
            <br />
            We'll be ready to server you
            <br />
            more prizes once we're back!
          </h3>
        </div>
      </div>
    </div>
  );
}

export default OutForBreak;
