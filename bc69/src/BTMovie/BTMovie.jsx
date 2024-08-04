// rafc

import React from "react";
import phims from "./dataFilm.json";

export const BTMovie = () => {
  console.log("phims: ", phims);
  return (
    <div className="container mt-5">
      <h1>BTMovie</h1>

      <div className="row">
        {phims.map((phim) => {
          return (
            <div className="col-3 mt-3" key={phim.maPhim}>
              <div className="card">
                <img
                  style={{ height: 450 }}
                  src={phim.hinhAnh}
                  alt="..."
                  className="card-img-top"
                />
                <div className="card-body">
                  <div className="card-title fw-bold" style={{ height: 80 }}>
                    {phim.tenPhim}
                  </div>
                  <div className="card-text">
                    {phim.moTa.substring(0, 20)}...
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
