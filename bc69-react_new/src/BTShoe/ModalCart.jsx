// rafc
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import cn from 'classnames'
import { changeCartQuantity, deleteCartItem } from '../store/BTShoe/action'

export const ModalCart = () => {
    const { carts } = useSelector((state) => state.btShoeReducer)
    console.log('carts: ', carts)

    const dispatch = useDispatch()
    return (
        <div
            className="modal fade"
            id="modalCart"
            tabIndex={-1}
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
        >
            <div className="modal-dialog modal-lg">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">
                            Giỏ hàng
                        </h1>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        />
                    </div>
                    <div className="modal-body">
                        <table className="table">
                            <thead>
                                <tr>
                                    <td>STT</td>
                                    <td>Name</td>
                                    <td>Price</td>
                                    <td>Image</td>
                                    <td>Quantity</td>
                                    <td>Total</td>
                                    <td></td>
                                </tr>
                            </thead>
                            <tbody>
                                {carts.map((item, index) => {
                                    return (
                                        <tr key={item.id}>
                                            <td>{index + 1}</td>
                                            <td>{item.name}</td>
                                            <td>${item.price}</td>
                                            <td>
                                                <img
                                                    src={item.image}
                                                    alt=""
                                                    style={{
                                                        width: 100,
                                                        height: 100,
                                                    }}
                                                />
                                            </td>
                                            <td>
                                                <div className="d-flex gap-2 align-items-center">
                                                    <button
                                                        // className="btn btn-outline-dark"
                                                        className={cn('btn btn-outline-dark ', {
                                                            disabled: item.cartQuantity === 1,
                                                        })}
                                                        onClick={() => {
                                                            // dispatch({
                                                            //     type: 'CHANGE_CART_QUANTITY',
                                                            //     payload: {
                                                            //         cartItemId: item.id,
                                                            //         quantity: -1,
                                                            //     },
                                                            // })
                                                            dispatch(
                                                                changeCartQuantity({
                                                                    cartItemId: item.id,
                                                                    quantity: -1,
                                                                })
                                                            )
                                                        }}
                                                    >
                                                        -
                                                    </button>
                                                    <span>{item.cartQuantity}</span>
                                                    <button
                                                        className="btn btn-outline-dark"
                                                        onClick={() => {
                                                            // dispatch({
                                                            //     type: 'CHANGE_CART_QUANTITY',
                                                            //     payload: {
                                                            //         cartItemId: item.id,
                                                            //         quantity: 1,
                                                            //     },
                                                            // })
                                                            dispatch(
                                                                changeCartQuantity({
                                                                    cartItemId: item.id,
                                                                    quantity: 1,
                                                                })
                                                            )
                                                        }}
                                                    >
                                                        +
                                                    </button>
                                                </div>
                                            </td>
                                            <td>${item.cartQuantity * item.price}</td>
                                            <td
                                                className="text-danger fw-bold"
                                                style={{
                                                    cursor: 'pointer',
                                                }}
                                                onClick={() => {
                                                    // dispatch({
                                                    //     type: 'DELTETE_CART_ITEM',
                                                    //     payload: item.id,
                                                    // })
                                                    dispatch(deleteCartItem(item.id))
                                                }}
                                            >
                                                X
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
