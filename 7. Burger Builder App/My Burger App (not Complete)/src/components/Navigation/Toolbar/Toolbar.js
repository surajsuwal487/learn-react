import React from "react";

import classes from './Toolbar.css'
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";

const toolbar = (props) => (
   <header className={classes.Toolbar}>
      <div>Menu</div>
      <Logo />
      <nav className={classes.DesktopOnly}>
         <NavigationItems/>
      </nav>
   </header>
);

export default toolbar;