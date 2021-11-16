import React from "react";
import classes from './MainHeader.module.css';
import Navigation from "./Navigation";


const MainHeader =(props)=>{
    return (
        <React.Fragment>
        <header className={classes['main-header']}>
            <h1>My Website</h1>
            <Navigation isLoggedIn={props.isAuthenticated} 
            onLogout={props.onLogout}></Navigation>
        </header>
        {props.children}
        </React.Fragment>
    )
}
export default MainHeader;