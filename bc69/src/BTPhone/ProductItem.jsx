import React from "react";

export const ProductItem = (props) => {
  const { product, handleProductDetail } = props;
  return (
    <div className="col-4">
      <div className="card" key={product.maSP}>
        <img src={product.hinhAnh} alt={product.tenSP} />
        <div className="card-body">
          <h5 className="card-title">{product.tenSP}</h5>
          <button
            onClick={() => handleProductDetail(product)}
            className="btn btn-primary"
          >
            Xem Chi tiết
          </button>
        </div>
      </div>
    </div>
  );
};
