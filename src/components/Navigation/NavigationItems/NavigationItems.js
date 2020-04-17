import React from 'react'
import { Navigationitem } from './NavigationItem/NavigationItem'
import classes from './NavigationItems.module.css'


export const Navigationitems = () =>{
    return (
        <ul className={classes.NavigationItems}>
           <Navigationitem link ="/"  >
               Burger Builder
           </Navigationitem>
           <Navigationitem link ="/orders">
               Orders
           </Navigationitem>
          
        </ul>
    )   
}