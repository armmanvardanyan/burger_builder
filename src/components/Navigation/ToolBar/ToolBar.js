import React from 'react'
import classes from "./ToolBar.module.css"
import { Logo } from '../../UI/Logo/Logo'
import { Navigationitems } from '../NavigationItems/NavigationItems'
import { DrawerToggle } from '../SideDrawer/DrawerToggle/DrawerToggle'
import { NavLink } from 'react-router-dom'


export const ToolBar = ({ click }) => {
    return (
        <header className={classes.Toolbar} >
            <div className={classes.MobileOnly}>
                <DrawerToggle click={click} />
            </div>
            <NavLink to="/">
                <Logo />
            </NavLink>
            <nav className={classes.DesktopOnly}>
                <Navigationitems />
            </nav>
        </header>
    )
}