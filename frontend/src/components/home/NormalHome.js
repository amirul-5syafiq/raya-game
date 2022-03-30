/** @format */

import classes from "./NormalHome.module.css";

import playButtonImage from "../../assets/img/btn-play.png";
import { Link } from "react-router-dom";
function NormalHome() {
	return (
		<div>
			<div className={classes.coin}>
				<div
					style={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
					}}>
					You have
					<br />
					<br />
					<br />
					<br />
					<div className={classes.containerCoin}>
						<div
							style={{
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
								alignContent: "center",
							}}>
							<span id='chances'>12</span>
						</div>
					</div>
				</div>
				<div
					style={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
					}}>
					chances left
					<br />
				</div>
			</div>

			<div className={classes.homeFooterContent}>
				<div
					style={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
					}}>
					<Link to='/playscreen'>
						<img
							id='play'
							className={classes.btnPlay}
							src={playButtonImage}
							alt='Play'
						/>
					</Link>
				</div>
				<div>
					<div className={classes.linkHow}>
						<div
							style={{
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
								alignContent: "center",
							}}>
							<br />
							How to Play
						</div>
					</div>
				</div>
				<div>
					<div className={classes.linkTnc}>
						<div
							style={{
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
							}}>
							View Terms and Conditions
						</div>
					</div>
				</div>
			</div>
			<div className={classes.bgHome}></div>
			<div className={classes.ha}></div>

			<div className={classes.firework}></div>
		</div>
	);
}

export default NormalHome;
