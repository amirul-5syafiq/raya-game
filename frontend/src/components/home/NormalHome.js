import classes from "./NormalHome.module.css";

import playButtonImage from "../../assets/img/btn-play.png";

function NormalHome() {
  return (
    <div>
      <div className={classes.coin}>
        <div>
          <b>You have</b>
        </div>
        <div className={classes.containerCoin}>
          <span id="chances">0</span>
        </div>
        <div>
          <b>chances left</b>
        </div>
      </div>
      <div className={classes.homeFooterContent}>
        <div>
          <img id="play" className={classes.btnPlay} src={playButtonImage} alt="Play"/>
        </div>
        <div>
          <div className={classes.linkHow}>How To Play</div>
        </div>
        <div>
          <div className={classes.linkTnc}>Terms and Conditions</div>
        </div>
      </div>
    </div>
  );
}

export default NormalHome;
