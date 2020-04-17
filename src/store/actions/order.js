import { PURCHASE_BURGER_FAIL, PURCHASE_BURGER_SUCCESS } from './actionTypes'
import axios from '../../axios-orders'

export const purchaseBurgerSuccess = (id, orderData) => {
    return {
        type: PURCHASE_BURGER_SUCCESS,
        orderId: id,
        orderData
    }
}
export const purchaseBurgerFail = (error) => {
    return {
        type: PURCHASE_BURGER_FAIL,
        error
    }
}

export const purchaseBurgerStart = (orderData) => {
    return dispatch => {
        axios.post("/orders.json", orderData)
            .then(res => {
                dispatch(purchaseBurgerSuccess(res.data, orderData))
            })
            .catch(err => {
                dispatch(purchaseBurgerFail(err))
            })
    }
}