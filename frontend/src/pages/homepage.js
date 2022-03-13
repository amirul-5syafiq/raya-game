import classes from './homepage.module.css';

import GameEnded from "../components/home/GameEnded";
import OutForBreak from '../components/home/OutForBreak';
function Home() {
    const status = 2;
    let component;
    switch(status) {
        case 1:
            component = <GameEnded />
            break
        case 2:
            component = <OutForBreak />
            break
        default:
            component = <GameEnded />

    }

    return (
        <div>
            <div className={classes.bgHome}></div>
            <div className={classes.ha}></div>
            {component}
        </div>
    )
    
}

export default Home;