import React from 'react'
import classes from './CheckoutSummary.module.css'
import { Burger } from '../../Burger/Burger'
import { Button } from '../../UI/Button/Button'

export const CheckoutSummary = ({ingredients,checkoutCanceled,checkoutContinued}) => {
    return (
        <div className = {classes.CheckoutSummary}>
            <h1>We hope it`s tastes well</h1>
            <Burger ingredients = {ingredients}/>
            <Button classNames = "Danger" clicked = {checkoutCanceled}>Cancel</Button>
            <Button classNames = "Success" clicked = {checkoutContinued}>Continue</Button>
        </div>
    )
}