import { ADD_ORDER } from '../actions/order'
import Order from '../../models/Order'

const initialState = {
    orders: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_ORDER:
            const cartData = action.payload.cartData;
            const time = action.payload.time;
            const orderArray = [];
            for (let index = 0; index < cartData.length; index++) {
                const element = cartData[index];
                const newOrderData = new Order(
                    element.id,
                    element.name,
                    element.quantity,
                    element.image,
                    element.price,
                    time
                )
                orderArray.push(newOrderData)
            }
            return {
                ...state,
                orders: state.orders.concat(orderArray)
            }
        default:
            return state
    }
}