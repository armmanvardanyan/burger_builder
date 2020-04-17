import {PURCHASE_BURGER_SUCCESS,PURCHASE_BURGER_FAIL} from '../actions/actionTypes'

const initailState = {
    orders:[],
    laoding:false
}

 const reducer = (state = initailState,action) => {
    switch (action.type) {
        case PURCHASE_BURGER_SUCCESS:
            const newOrder = {
                ...action.orderData ,
                id:action.orderId
            }
            return {
                ...state,
                laoding:false,
                orders: state.orders.concat(newOrder)
            };
        case PURCHASE_BURGER_FAIL:
            return {
                ...state,
                loading:false
            }
    }
    return state
 }

 export default reducer