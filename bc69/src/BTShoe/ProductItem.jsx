import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCarts, changeProductDetail } from "../store/BTShoe/action";

export const ProductItem = (props) => {
  const { shoe } = props;
  const btShoeReducer = useSelector((state) => state.btShoeReducer);
  // console.log('btShoeReducer: ', btShoeReducer)

  const dispatch = useDispatch();

  return (
    <div className="card">
      <img className="img-fluid" src={shoe.image} alt="..." />
      <div className="card-body">
        <p className="fw-bold mb-3">{shoe.name}</p>
        <p>{shoe.price}</p>
        <div className="d-flex justify-content-between">
          <button
            className="btn btn-success"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            onClick={() => {
              // dispatch({
              //     type: 'CHANGE_PRODUCT_DETAIL',
              //     payload: shoe,
              // })
              dispatch(changeProductDetail(shoe));
            }}
          >
            Xem chi tiết
          </button>

          <button
            className="btn btn-warning"
            data-bs-toggle="modal"
            data-bs-target="#modalCart"
            onClick={() => {
              // dispatch({
              //     type: 'ADD_TO_CARTS',
              //     payload: shoe,
              // })
              dispatch(addToCarts(shoe));
            }}
          >
            Thêm giỏ hàng
          </button>
        </div>
      </div>
    </div>
  );
};
