import { NavLink } from "react-router-dom";
import classes from "./NavigationBar.module.css";
import classNames from "classnames/bind";

const cx = classNames.bind(classes)

function NavigationBar() {

  function navTextClasses(isActive) {
    return cx({
      'menu-item-text': true,
      'menu-item-active': isActive.isActive
    })
  }

  return (
    <header>
      <nav>
        <div className={classes.menu}>
          <div id="menu-home" className={classNames(classes['menu-item']/*, classes.menu-first*/)}>
            <NavLink exact='true' to="/" className={navTextClasses}>HOME</NavLink>
          </div>
          <div id="menu-reward" className={classes['menu-item']}>
            <NavLink exact='true' to="/myrewards" className={navTextClasses}>MY REWARDS</NavLink>
          </div>
          <div id="menu-progress" className={classes['menu-item']}>
            {" "}
            <NavLink exact='true' to="/howto" className={navTextClasses}>HOW TO WIN</NavLink>
          </div>
          <div id="menu-prize" className={classNames(classes['menu-item'], classes['menu-last'])}>
            <NavLink exact='true' to="/prizes" className={navTextClasses}>PRIZES</NavLink>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default NavigationBar;
