import { Link } from "react-router-dom";
import classes from "./playscreen.module.css";

function PlayScreen() {



	return (
		<div>
			<div className={classes.container}
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					alignContent: "center",
				}}>
				<div
					style={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						alignContent: "center",
					}}>
				</div>
			</div>


			<div className={classes.bgplayScreen}>

				<div className={classes.ha}>
					<div
						style={{
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							alignContent: "center"
						}}>
					</div>
				</div>
				<div className={classes.firework}>
					<div
						style={{
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							alignContent: "center"
						}}>
					</div>
				</div>
			</div>
			{/* <div className={classes.ha}></div> */}
			{/* <div className={classes.firework}></div> */}

			<div className={classes.gamebanner}>
				<div
					style={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
					}}>

					<br />
					<br />
					<br />
					<br />
					<div className={classes.Banner}>
						<div
							style={{
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
								alignContent: "center",
							}}>

							<br />
						</div>
					</div>
				</div>
				<div
					style={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
					}}>
					<br />
				</div>
			</div>

			{/* <div className={classes.rayabanner}>
				<div
					style={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",

					}}>
					<div className={classes.ha}>
						<div
							style={{
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
								alignContent: "center"
							}}>
					</div>
					</div>
				</div>
			</div> */}

			<div
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				}}>
				<Link to='/Home'>
					<img
						id='play'
						// className={classes.btnPlay}
						// src={playButtonImage}
						alt='Play' />
				</Link>
			</div>


		</div>

	)
}

export default PlayScreen