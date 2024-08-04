// rafc

import React from "react";

export const RenderWithMap = () => {
  const products = [
    {
      name: "Iphone",
      price: 1000,
      color: "black",
    },
    {
      name: "Samsung",
      price: 1500,
      color: "white",
    },
    {
      name: "LG",
      price: 2000,
      color: "pink",
    },
  ];
  return (
    <div className="container mt-5">
      <h1>Render With Map</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Color</th>
          </tr>
        </thead>
        <tbody>
          {/* 
                        1. Trả về 1 thẻ JSX duy nhất
                        2. Phải có thuộc tính key ở thẻ JSX ngoài cùng
                        3. Giá trị của thuộc tính key phải là duy nhất ở mỗi lần lặp
                        4. Hạn chế sử dụng index làm giá trị của thuộc tính key
                        => Chỉ sử dụng trong trường hợp data là mảng tĩnh
                     */}
          {products.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.color}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
