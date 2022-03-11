import classes from './homepage.module.css';

import GameEnded from "../components/home/GameEnded";

function Home() {
    return (
        <div>
            <div className={classes.ha}></div>
            <GameEnded />
        </div>
    )
    
}

export default Home;