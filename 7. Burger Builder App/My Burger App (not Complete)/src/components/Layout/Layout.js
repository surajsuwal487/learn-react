import React, { Component } from "react";

import Aux from "../../hoc/Auxiliary";
import Classes from "./Layout.css"
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

class Layout extends Component {

   state = {
      showSideDrawer: true
   }

   sideDrawerCloseHandler = () => {
      this.state({showSideDrawer: false})
   }

   render() {
      return (
         <Aux>
            <Toolbar />
            <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerCloseHandler}/>
            <main className={Classes.Content}>
               {this.props.children}
            </main>
         </Aux>
      )
   }
}

export default Layout;