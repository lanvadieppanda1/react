import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    productList: [],
    productEdit: null,
}

// const btformSlice = createSlice(
//     {
//         name: 'BTForm',
//         initialState,
//         reducers: {
//             //...
//         }

//     })

// export const { reducer: btformReducer, action: btFormAction } = btformSlice;
export const { reducer: btFormReducer, actions: btFormAction } = createSlice(
    {
        name: 'BTForm',
        initialState,
        reducers: {
            setProductList: (state, action) => {
                console.log("action: ", action);
                state.productList.push(action.payload);
            },
            deleteProduct: (state, { payload }) => {
                console.log('payload: ', payload)
                state.productList = state.productList.filter((item) => item.id !== payload)
            },
            editProduct: (state, { payload }) => {
                console.log("action: ", payload);
                state.productEdit = payload;

            },

            updateProduct: (state, { payload }) => {
                console.log("action: ", payload);
                state.productList = state.productList.map((item) => {
                    if (item.id === payload.id) return payload;
                    return item;
                });
            },
        }

    })