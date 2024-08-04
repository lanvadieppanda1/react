// rafc
import React from "react";
import { useParams } from "react-router-dom";
import dataPhim from "./dataFilm.json";

export const MovieDetail = () => {
  const { movieId } = useParams();
  console.log("dataPhim: ", dataPhim);
  console.log("movieId: ", movieId);

  const phim = dataPhim.find((item) => item.maPhim === movieId * 1);
  console.log("phim: ", phim);
  return (
    <div>
      <div className="row">
        <div className="col-4">
          <img className="img-fluid" src={phim.hinhAnh} alt="..." />
        </div>
        <div className="col-8">
          <p className="fw-bold fs-1">{phim.tenPhim}</p>
          <p>Ngày khởi chiếu: {phim.ngayKhoiChieu}</p>
          <p className="pe-5 mt-3">{phim.moTa}</p>
        </div>
      </div>
    </div>
  );
};
