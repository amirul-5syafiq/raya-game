import classes from './homepage.module.css';

import GameEnded from "../components/home/GameEnded";
import OutForBreak from '../components/home/OutForBreak';
import NormalHome from "../components/home/NormalHome";

function Home() {
    const status = 3;
    let component;
    switch(status) {
        case 1:
            component = <GameEnded />
            break
        case 2:
            component = <OutForBreak />
            break
        case 3:
            component = <NormalHome />
            break
        default:
            component = <GameEnded />

    }
    // We need to use section-home and text-center styles here
    return (
        <div>
            <div className={classes.bgHome}></div>
            <div className={classes.ha}></div>
            {component}
        </div>
    )
    
}

export default Home;