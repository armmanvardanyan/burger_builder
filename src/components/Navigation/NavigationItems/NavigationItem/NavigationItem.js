import React from 'react'
import classes from './NavigationItem.module.css'
import { NavLink } from 'react-router-dom'


export const Navigationitem = (props) =>{
    return (
        <li className={classes.NavigationItem}>
            <NavLink 
                exact
                activeClassName={classes.Active}
                to ={props.link}
            >{props.children}
            </NavLink>
        </li>
    )   
}