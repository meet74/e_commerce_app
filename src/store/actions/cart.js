export const ADD_TO_CART = "ADD_TO_CART"
export const DELETE_FROM_CART = "DELETE_FROM_CART"
export const UPDATE_CART = "UPDATE_CART"
export const CLEAR_CART = "CLEAR_CART"

export const addtocart = (orderId, name, price, quantity, image) => {
    let payload = {
        id: orderId,
        name: name,
        price,
        quantity,
        image
    }
    return {
        type: ADD_TO_CART,
        payload
    }
}

export const updatecart = (orderId, quantity) => {
    let payload = {
        id: orderId,
        quantity: quantity
    }
    return {
        type: UPDATE_CART,
        payload
    }
}

export const deletefromcart = (id) => {
    return {
        type: DELETE_FROM_CART,
        id: id
    }
}

export const clearCart = () => {
    return {
        type: CLEAR_CART,
    }
}