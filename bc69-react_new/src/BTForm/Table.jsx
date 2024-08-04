import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { btFormAction } from "../storeReduxToolkit/BTForm/slice";

export const Table = () => {
  const { productList } = useSelector((state) => state.btFormReducer);
  console.log("productList: ", productList);
  const dispatch = useDispatch();
  return (
    <div className="mt-5">
      <table className="table">
        <thead className="table-dark">
          <tr>
            <td>ID</td>
            <td>Image</td>
            <td>Name</td>
            <td>Price</td>
            <td>Description</td>
            <td>Type</td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          {productList.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>
                  <img
                    style={{
                      width: 100,
                      height: 100,
                    }}
                    src={item.image}
                    alt="..."
                  />
                </td>
                <td>{item.name}</td>
                <td>${item.price}</td>
                <td>{item.desc}</td>
                <td>{item.productType}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      dispatch(btFormAction.deleteProduct(item.id));
                    }}
                  >
                    Delete
                  </button>
                  <button
                    className="btn btn-info ms-3"
                    onClick={() => {
                      dispatch(btFormAction.editProduct(item));
                    }}
                  >
                    Edit
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
