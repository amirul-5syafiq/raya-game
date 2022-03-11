import classes from "./GameEnded.module.css";

function GameEnded() {
  return (
    <div className={classes.gameEnded}>
      <div>
        <h3>Thanks for playing!</h3>
        We hope that year ahead be filled
        <br />
        with joyful moments and peace.
        <p>
          Tap on "My Rewards" to view all the <br />
          special prizes you'we won from
          <br />
          Raya IstiMAEwa!
        </p>
      </div>
    </div>
  );
}

export default GameEnded;
