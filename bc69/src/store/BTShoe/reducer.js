import {
    ADD_TO_CARTS,
    CHANGE_CART_QUANTITY,
    CHANGE_PRODUCT_DETAIL,
    DELTETE_CART_ITEM,
} from './actionType'

let initialState = {
    number: 10,
    name: 'ABC',

    productDetail: {
        id: 1,
        name: 'Adidas Prophere',
        alias: 'adidas-prophere',
        price: 350,
        description:
            'The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n',
        shortDescription:
            'The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n',
        quantity: 995,
        image: 'http://svcy3.myclass.vn/images/adidas-prophere.png',
    },

    carts: [
        // {
        //     id: 1,
        //     name: 'Adidas Prophere',
        //     alias: 'adidas-prophere',
        //     price: 350,
        //     description:
        //         'The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n',
        //     shortDescription:
        //         'The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n',
        //     quantity: 995,
        //     image: 'http://svcy3.myclass.vn/images/adidas-prophere.png',
        // },
    ],
}

export const btShoeReducer = (state = initialState, action) => {
    console.log('action: ', action)
    // state = #123
    switch (action.type) {
        case 'INCREASE_NUMBER': {
            //immerJS
            // let newState = { ...state } // #1234
            // newState.number += action.payload
            // return newState // #1234

            return {
                ...state,
                number: state.number + action.payload,
            }
        }
        case CHANGE_PRODUCT_DETAIL: {
            let newState = { ...state }
            newState.productDetail = action.payload
            return newState
        }

        case ADD_TO_CARTS: {
            let newState = { ...state }

            // Kiểm tra sản phẩm đã tồn tại trong giỏ hàng hay chưa
            const index = newState.carts.findIndex((item) => item.id === action.payload.id)

            if (index === -1) {
                // SP chưa có trong carts
                // Push sp vào thêm 1 thuộc tính mới cartQuantiy để quản lý sl của sp trong carts
                newState.carts.push({ ...action.payload, cartQuantity: 1 })
            } else {
                // SP đã tồn tại carts
                newState.carts[index].cartQuantity += 1
            }

            return newState
        }
        case CHANGE_CART_QUANTITY: {
            let newState = { ...state }
            const { payload } = action

            // const index = newState.carts.findIndex((item) => item.id === payload.cartItemId)
            // if (index !== -1) {
            //     newState.carts[index].cartQuantity =
            //         newState.carts[index].cartQuantity + payload.quantity || 1
            // }

            newState.carts = newState.carts.map((item) => {
                if (item.id !== payload.cartItemId) return item
                return {
                    ...item,
                    cartQuantity: item.cartQuantity + payload.quantity || 1,
                }
            })

            return newState
        }

        case DELTETE_CART_ITEM: {
            let newState = { ...state }
            newState.carts = newState.carts.filter((item) => item.id !== action.payload)

            return newState
        }
        default:
            return state
    }
}

// const student = { /#123
//     name: 'abc',
// }
