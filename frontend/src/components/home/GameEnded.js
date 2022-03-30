/** @format */

import classes from "./GameEnded.module.css";

function GameEnded() {
	return (
		<div>
			<div className={classes.bgMaint}></div>
			<div className={classes.ha}></div>

			<div className={classes.firework}></div>
			<div className={classes.gameEnded}>
				<div>
					<h2 style={{ textAlign: "center" }}>Thanks for playing!</h2>
					<p style={{ textAlign: "center" }}>
						We hope that year ahead be filled <br /> with joyful moments and
						peace.
					</p>
					<p style={{ textAlign: "center" }}>
						Tap on "My Rewards" to view all the <br />
						special prizes you'we won from
						<br />
						Raya IstiMAEwa!
					</p>
				</div>
			</div>
		</div>
	);
}

export default GameEnded;
