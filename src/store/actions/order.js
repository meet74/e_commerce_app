export const ADD_ORDER = "ADD_ORDER"

export const addOrder = (cartData, time) => {
    let payload = {
        cartData,
        time
    }

    return {
        type: ADD_ORDER,
        payload
    }
}