// rafc

import React, { useState, Fragment } from "react";
import phims from "./dataFilm.json";
import { useNavigate, generatePath, useSearchParams } from "react-router-dom";
import { useQueryUrl } from "../hooks/useQueryUrl";

export const BTMovie = () => {
  console.log("phims: ", phims);

  const [queryUrl, setQueryUrl] = useQueryUrl();
  console.log("queryUrl: ", queryUrl);

  const navigate = useNavigate();

  const [inputValue, setInputValue] = useState("");
  // console.log('inputValue: ', inputValue)

  // const [searchParams, setSearchParams] = useSearchParams()
  // console.log('search phim: ', searchParams.get('name'))

  const renderPhim = () => {
    // const phimSearch = searchParams.get('phim')
    const phimSearch = queryUrl.phim;
    console.log("phimSearch: ", phimSearch);
    let newPhims = [...phims];

    console.log("newPhims: ", newPhims);
    if (phimSearch) {
      newPhims = phims.filter((item) =>
        item.tenPhim.toLowerCase().includes(phimSearch.toLowerCase())
      );
    }

    return (
      <Fragment>
        {newPhims.map((phim) => {
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
                  <div className="card-title fw-bold" style={{ height: 60 }}>
                    {phim.tenPhim}
                  </div>
                  <div className="card-text">
                    {phim.moTa.substring(0, 50)}...
                  </div>
                  <button
                    className="btn btn-success"
                    onClick={() => {
                      // C1:
                      // navigate(`/moviedetail/${phim.maPhim}`)

                      //C2:
                      const path = generatePath("/moviedetail/:movieId", {
                        movieId: phim.maPhim,
                      });
                      navigate(path);
                    }}
                  >
                    Xem chi tiết
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </Fragment>
    );
  };
  // renderPhim()
  return (
    <div className="container mt-5">
      <h1>BTMovie</h1>
      <div className="d-flex gap-5 mb-5">
        <input
          onChange={(ev) => {
            // console.log(ev.target.value)
            const { value } = ev.target;
            setInputValue(value);
          }}
          // defaultValue={searchParams.get('phim') || ''}
          defaultValue={queryUrl.phim || ""}
          placeholder="Nhập tên phim"
          type="text"
          className="form-control"
        />
        <button
          className="btn btn-success"
          style={{ width: 200 }}
          onClick={() => {
            console.log({ inputValue });
            // setSearchParams({
            //     phim: inputValue,
            // })
            setQueryUrl({
              phim: inputValue || undefined,
              // name: 'abc',
              // age: undefined,
            });
          }}
        >
          Tìm Kiếm
        </button>
      </div>
      <div className="row">
        {/* {phims.map((phim) => {
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
                                    <div className="card-title fw-bold" style={{ height: 60 }}>
                                        {phim.tenPhim}
                                    </div>
                                    <div className="card-text">{phim.moTa.substring(0, 50)}...</div>
                                    <button
                                        className="btn btn-success"
                                        onClick={() => {
                                            // C1:
                                            // navigate(`/moviedetail/${phim.maPhim}`)

                                            //C2:
                                            const path = generatePath('/moviedetail/:movieId', {
                                                movieId: phim.maPhim,
                                            })
                                            navigate(path)
                                        }}
                                    >
                                        Xem chi tiết
                                    </button>
                                </div>
                            </div>
                        </div>
                    )
                })} */}
        {renderPhim()}
      </div>
    </div>
  );
};
