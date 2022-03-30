/** @format */

import classes from "./homepage.module.css";

import GameEnded from "../components/home/GameEnded";
import OutForBreak from "../components/home/OutForBreak";
import NormalHome from "../components/home/NormalHome";
// import logo from "../assets/img/fireworkGif.gif";

function Home() {
	const status = 3;
	let component;
	switch (status) {
		case 1:
			component = <GameEnded />;
			break;
		case 2:
			component = <OutForBreak />;
			break;
		case 3:
			component = <NormalHome />;
			break;
		default:
			component = <GameEnded />;
	}
	// We need to use section-home and text-center styles here
	return (
		<div>
			{/* <div className={classes.bgHome}></div> */}
			<div className={classes.ha}></div>

			<div className={classes.firework}>
				{/* <img src={logo} alt='.gif' /> */}
			</div>

			{component}
		</div>
	);
}

export default Home;
