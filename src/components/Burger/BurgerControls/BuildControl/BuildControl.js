import React from "react";
import classes from "./BuildControl.module.css";

export const BuildControl = ({label,decrement,increment,disabledInfo}) => {
  return (
    <div className={classes.BuildControl}>
      <div className={classes.Label}>{label}</div>
      <button className={classes.Less} onClick = {decrement} disabled={disabledInfo}>Less </button>  
      <button className={classes.More} onClick = {increment}>More</button>  
    </div>
  );
};
