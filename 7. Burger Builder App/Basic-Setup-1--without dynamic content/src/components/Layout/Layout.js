import React from "react";

import Aux from "../../hoc/Auxiliary";
import Classes from "./Layout.css"

const layout = (prpos) => (
   <Aux>
      <div>Toolbar, SideDrawer, Backdrop</div>
      <main className={Classes.Content}>
         {prpos.children}
      </main>
   </Aux>
);

export default layout;