import React from 'react'
import classes from './DrawerToggle.module.css'

export const DrawerToggle  = ({click}) => {

    return <div onClick= {click} className={classes.DrawerToggle}>
        <div></div>
        <div></div>
        <div></div>
    </div>
}