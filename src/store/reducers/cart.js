import { ADD_TO_CART, DELETE_FROM_CART, UPDATE_CART, CLEAR_CART } from '../actions/cart'
import Cart from '../../models/Cart'

const initialState = {
    cart: [],
}


export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const cartData = action.payload;
            const newCart = new Cart(
                cartData.id,
                cartData.name,
                cartData.price,
                cartData.quantity,
                cartData.image
            )
            return {
                ...state,
                cart: state.cart.concat(newCart)
            }
        case UPDATE_CART:
            const cartIndex = state.cart.findIndex(ct => ct.id === action.payload.id)
            const existingCartItem = state.cart.find(ct => ct.id == action.payload.id)

            const quantity = action.payload.quantity + existingCartItem.quantity
            const updateCartItem = new Cart(
                action.payload.id,
                existingCartItem.name,
                existingCartItem.price,
                quantity,
                existingCartItem.image
            )
            const newCartData = [...state.cart];

            newCartData[cartIndex] = updateCartItem;

            return {
                ...state,
                cart: newCartData
            }
        case DELETE_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter(ct => ct.id !== action.id)
            }
        case CLEAR_CART:
            return {
                ...state,
                cart: []
            }
        default:
            return state
    }
}