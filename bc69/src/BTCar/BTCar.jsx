//rafc
import React, { useState } from "react";

export const BTCar = () => {
  const [imgSrc, setImgSrc] = useState("./img/products/red-car.jpg");
  const handleSrc = (src) => setImgSrc(`./img/products/${src}-car.jpg`);
  return (
    <div className="container mt-5">
      <h1>BTCar</h1>

      <div className="row">
        <div className="col-8">
          <img src={imgSrc} className="img-fluid" />
        </div>
        <div className="col-4 d-flex flex-column gap-5">
          <button
            className="btn btn-dark"
            // onClick={() => setImgSrc("./img/products/black-car.jpg")}
            onClick={() => handleSrc("black")}
          >
            Black
          </button>
          <button className="btn btn-danger" onClick={() => handleSrc("red")}>
            Red
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => handleSrc("silver")}
          >
            Silver
          </button>
          <button
            className="btn btn-dark"
            style={{ backgroundColor: "grey" }}
            onClick={() => handleSrc("steel")}
          >
            steel
          </button>
        </div>
      </div>
    </div>
  );
};
