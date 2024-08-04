import React from "react";
import { ProductItem } from "./ProductItem";

export const ProductList = (props) => {
  console.log("props: ", props);
  const { handleProductDetail } = props;
  return (
    <div className="row">
      {props.dataPhone.map((product) => {
        return (
          <ProductItem
            product={product}
            handleProductDetail={handleProductDetail}
            key={product.maSP}
          />
          //   <div className="col-4">
          //     <div className="card" key={product.maSP}>
          //       <img src={product.hinhAnh} alt={product.tenSP} />
          //       <div className="card-body">
          //         <h5 className="card-title">{product.tenSP}</h5>
          //         <button
          //           onClick={() => props.handleAddCart(product)}
          //           className="btn btn-primary"
          //         >
          //           Add to Cart
          //         </button>
          //       </div>
          //     </div>
          //   </div>
        );
      })}
    </div>
  );
};
