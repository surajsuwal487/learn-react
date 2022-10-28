import React from 'react';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.css';
import Aux from '../../../hoc/Auxiliary';
import Backdrop from '../../UI/Backdrop/Backdrop'

const sideDrawer = (props) => {
   // let attachedClasses = [classes.SideDrawer, classes.Close];
   // if (props.open) {
   //    attachedClasses = [classes.SideDrawer, classes.Open];
   // }
   return (
      <Aux>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className={classes.SideDrawer}>
               <Logo />
            </div>
            <nav>
               <NavigationItems />
            </nav>
      </Aux>
   );
};

export default sideDrawer;