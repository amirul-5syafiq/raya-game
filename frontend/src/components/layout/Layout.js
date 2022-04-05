import NavigationBar from "./NavigationBar";
import classes from "./Layout.module.css";

function Layout(props) {
  return (
    <>
      <div>
        <NavigationBar />
        <main>{props.children}</main>
      </div>

      {/* <div className={classes.playscreen}></div> */}

    </>
  );
}

export default Layout;
