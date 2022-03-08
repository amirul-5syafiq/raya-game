import NavigationBar from "./NavigationBar";
import classes from "./Layout.module.css";

function Layout(props) {
  return (
    <>
      {/* <div className={classes.bg}></div> */}
      <div>
        <NavigationBar />
        <main>{props.children}</main>
      </div>
    </>
  );
}

export default Layout;
