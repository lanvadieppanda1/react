import React from "react";
import { useSelector } from "react-redux";

export const KetQua = () => {
  const { luaChon } = useSelector((state) => state.BTXucSacReducer);
  return (
    <div className="text-center">
      <p>
        Bạn chọn:{" "}
        <span className="text-danger fw-bold fs-3">
          {luaChon ? "Tài" : "Xỉu"}
        </span>{" "}
      </p>
      <p>Số bàn thằng : 0</p>
      <p>Tổng số bàn chơi: 0</p>
    </div>
  );
};
