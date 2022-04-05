import { Link } from "react-router-dom";
import playButtonImage from "../assets/img/btn-play.png";
import classes from "./playscreen.module.css";

function PlayScreen() {
    return (
        <div>
            <div className={classes.bgplayScreen}></div>
            <div className={classes.ha}></div>
            <div className={classes.firework}></div>

            
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