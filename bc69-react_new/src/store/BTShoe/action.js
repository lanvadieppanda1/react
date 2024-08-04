import {
    ADD_TO_CARTS,
    CHANGE_CART_QUANTITY,
    CHANGE_PRODUCT_DETAIL,
    DELTETE_CART_ITEM,
} from './actionType'

export const changeProductDetail = (payload) => {
    return {
        type: CHANGE_PRODUCT_DETAIL,
        payload,
    }
}

export const addToCarts = (payload) => {
    return {
        type: ADD_TO_CARTS,
        payload,
    }
}

export const changeCartQuantity = (payload) => {
    return {
        type: CHANGE_CART_QUANTITY,
        payload,
    }
}

export const deleteCartItem = (payload) => {
    return {
        type: DELTETE_CART_ITEM,
        payload,
    }
}
