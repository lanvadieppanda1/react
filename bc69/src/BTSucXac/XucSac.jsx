import { nanoid } from "@reduxjs/toolkit";
import React from "react";
import { useSelector } from "react-redux";

export const XucSac = () => {
  const { xucXac } = useSelector((state) => state.BTXucSacReducer);

  return (
    <div>
      {xucXac.map((item) => {
        return (
          <img
            style={{ width: 80, height: 80 }}
            src={item.img}
            key={nanoid()}
          />
        );
      })}
    </div>
  );
};
