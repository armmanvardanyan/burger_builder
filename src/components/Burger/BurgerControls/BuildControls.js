import React from "react";
import classes from "./BuildControls.module.css";
import { BuildControl } from "./BuildControl/BuildControl";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Mheese", type: "cheese" },
  { label: "Meat", type: "meat" },
];



export const BuildControls = ({onIncrement,onDecrement,disabledInfo,totalPrice,onPurchase }) => {

  let disabledButton = true
  Object.values(disabledInfo).forEach(bool => bool === false ? disabledButton = false : null)

  return (
    <div className={classes.Controls}>
      <p>Current Price : <strong>{totalPrice.toFixed(2)} $</strong> </p>
      {controls.map(({ label, type }) => (
        <BuildControl
          key={label}
          label={label}
          increment={() => onIncrement(type)}
          decrement={() => onDecrement(type)}
          disabledInfo={disabledInfo[type]}
        />
      ))}
      <button
        className={classes.OrderButton}
        disabled={disabledButton}
        onClick = {onPurchase}
      >ORDER NOW</button>
    </div>
  );
};
