import React, { useState } from "react";
import dataPhone from "./dataPhone.json";
import { ProductList } from "./ProductList";
import { ProductDetail } from "./ProductDetail";

export const BTPhone = () => {
  const [prdDetail, setprdDetail] = useState({
    maSP: 1,
    tenSP: "VinSmart Live",
    manHinh: "AMOLED, 6.2, Full HD+",
    heDieuHanh: "Android 9.0 (Pie)",
    cameraTruoc: "20 MP",
    cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
    ram: "4 GB",
    rom: "64 GB",
    giaBan: 5700000,
    hinhAnh: "./img/vsphone.jpg",
  });
  const handleProductDetail = (prd) => {
    setprdDetail(prd);
  };
  console.log(dataPhone);
  return (
    <div className="container mt-5">
      <h1>BTPhone</h1>
      <p>This is BTPhone page</p>
      <ProductList
        dataPhone={dataPhone}
        handleProductDetail={handleProductDetail}
      />
      <div className="mt-4">
        <ProductDetail prdDetail={prdDetail} />
      </div>
    </div>
  );
};
