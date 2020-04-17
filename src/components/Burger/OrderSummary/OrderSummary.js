import React from 'react'
import { Button } from '../../UI/Button/Button'
import { Aux } from '../../../hoc/Auxillary/Auxillary'



export const OrderSummary = ({ ingredients,cancel,continues,totalPrice }) => {

    const ingredientsToArray = Object.entries(ingredients)

    const ingredientsSummary = ingredientsToArray.map((item, idx) => {
        return <li key={item}>
            <span style={{ textTransform: "capitalize" }}> {item[0]}:</span> {item[1]}
        </li>
    })


    return (
        <Aux>
            <h3>Your Order</h3>
            <p>Delicious burger with following ingredients</p>
            <ul>
                {ingredientsSummary}
            </ul>
             <p>Countinue to checkout ?</p>
             <p><strong>Total Price : {`${totalPrice}$`} </strong></p>   
            <Button classNames = "Danger" clicked = {cancel}>Cancel</Button>
            <Button classNames = "Success" clicked = {continues}>Continue</Button>
        </Aux>
    )
}