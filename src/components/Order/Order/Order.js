import React from 'react';
import classes from './Order.module.css';


const Order = ({ price, ingredients}) => {

    if(!ingredients){
        return null
    }

    const orders = Object.entries(ingredients)
    return (
        <div className={classes.Order}>
            <div>
                <strong>Ingredients : </strong>
                {orders.map(item => {
                    return <span
                        className={classes.item}
                        key={item[0]}
                    >
                        {item[0]} ({item[1]})
                        </span>
                })}
            </div>
            <div className={classes.Price}>
                <strong>Price: </strong>
                <span>{price}$ </span>
            </div>
        </div>
    )
}

export default Order;