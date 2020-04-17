import React from 'react'
import { Navigationitems } from '../NavigationItems/NavigationItems'
import { Logo } from '../../UI/Logo/Logo'
import classes from './SideDrawer.module.css'
import { Backdrop } from '../../UI/Backdrop/Backdrop'
import { Aux } from '../../../hoc/Auxillary/Auxillary'


export const SideDrawer = ({shown,modalClosed}) => {

    let classNames = [classes.SideDrawer,classes.Close]
    if (shown) {
        classNames = [classes.SideDrawer,classes.Open]
    }
    

    return (
        <Aux>
            <Backdrop show={shown} modalClosed={modalClosed} />
            <div className={classNames.join(" ")}>
                <Logo />
                <nav>
                    <Navigationitems />
                </nav>
            </div>
        </Aux>
    )
}