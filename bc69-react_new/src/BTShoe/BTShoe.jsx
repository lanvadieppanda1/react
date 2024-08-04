//rafc
import React from 'react'
import data from './data.json'
import { ProductList } from './ProductList'
import { ModalProductDetail } from './ModalProductDetail'
import { useSelector, useDispatch } from 'react-redux'
import { ModalCart } from './ModalCart'

export const BTShoe = () => {
    console.log('data: ', data)
    // lấy dữ liệu từ store redux
    const { number } = useSelector((state) => state.btShoeReducer)
    console.log('number: ', number)

    // thay đổi dữ liệu của store redux
    const dispatch = useDispatch() // dùng để gửi thông tin (action) lên store của redux => thay đổi dữ liệu của store

    return (
        <div className="container mt-5">
            <h1>Demo Redux</h1>
            <p>Number: {number}</p>
            <button
                className="btn btn-success"
                onClick={() => {
                    dispatch({
                        type: 'INCREASE_NUMBER', // bắt buộc
                        payload: 2,
                    })
                }}
            >
                + Number
            </button>
            <h1 className="mt-3">BTShoe</h1>
            <ProductList data={data} />

            <ModalProductDetail />

            <ModalCart />
        </div>
    )
}
