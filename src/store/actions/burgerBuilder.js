import { ADD_INGREDIENT, REMOVE_INGREDIENT, SET_INGREDINETS ,FETCH_INGREDINETS_FAILED} from './actionTypes'
import axios from '../../axios-orders'

export const addIngredient = (name) => {
    return {
        type: ADD_INGREDIENT,
        ingredientName: name
    }
}

export const removeIngredient = (name) => {
    return {
        type: REMOVE_INGREDIENT,
        ingredientName: name
    }
}

export const setIngredients = ingredients => {
    return {
        type: SET_INGREDINETS,
        ingredients: ingredients
    }
}

export const fetchIngredientsFailed = () => {
    return {
        type:FETCH_INGREDINETS_FAILED
    }
}

export const initIngredients = () => {
    return dispatch => {
        axios.get("/ingredients.json")
            .then(res => dispatch(setIngredients(res.data)))
            .catch(err => dispatch(fetchIngredientsFailed()))
    }
}