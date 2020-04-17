import React from 'react';
import classes from './Backdrop.module.css';

export const Backdrop = ({show,modalClosed }) => (
         show ?
         <div className={classes.Backdrop} onClick = {modalClosed}>  
        </div >
        : null
)

