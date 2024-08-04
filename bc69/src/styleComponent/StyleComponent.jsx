// rafc

import React from "react";

// css tất cả các component
import "./style.css";

// style module chỉ ảnh hưởng tới component đc import
import style from "./style.module.css";

export const StyleComponent = () => {
  return (
    <div className="StyleComponent container mt-5">
      <h1>StyleComponent</h1>

      <h2 className="title">Style component</h2>

      <p className={style.subTitle}>Sub title</p>
      <p className={style["sub-title"]}>Sub title 1</p>
      <p className={`${style.description} ${style.subTitle}`}>Description</p>

      <div
        style={{
          backgroundColor: "red",
          fontWeight: 800,
          fontSize: 40,
          // padding: '30rem',
        }}
      >
        Demo style inline
      </div>
    </div>
  );
};
