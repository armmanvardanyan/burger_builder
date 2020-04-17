import React from "react";
import BurgerIngredient from "./Burgeringridient/Burgeringridient";
import classes from "./Burger.module.css";

export const Burger = ({ ingredients }) => {
  let transformedIngredients = Object.keys(ingredients)
    .map((itemKey) => {
      return [...Array(ingredients[itemKey])].map((itm, idx) => {
        return <BurgerIngredient key={itemKey + idx} type={itemKey} />;
      });
    })
    .reduce((prev, current) => {
      return prev.concat(current);
    }, []);

  if (!transformedIngredients.length) {
    transformedIngredients = <p>Please start adiing ingredients</p>;
  }

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
       {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};
