import React from "react";
import { LuaChon } from "./LuaChon";
import { XucSac } from "./XucSac";
import { KetQua } from "./KetQua";
import { useSelector, useDispatch } from "react-redux";
import { BTXucSacActions } from "../storeReduxToolkit/BTSucXac/slice";

export const BTSucXac = () => {
  const { luaChon } = useSelector((state) => state.BTXucSacReducer);
  console.log("LuaChon: ", LuaChon);

  const dispatch = useDispatch();

  return (
    <div className="container mt-3 bg-info">
      <h1>BTSucXac</h1>
      <h2 className="fs-2 fw-bold text-center mt-4"> Game xúc sắc</h2>
      <div className="d-flex px-5 justify-content-between">
        <LuaChon
          text="Tài"
          selected={luaChon}
          onToggleLuaChon={() => {
            dispatch(BTXucSacActions.toggleLuaChon(true));
          }}
        />
        <XucSac />
        <LuaChon
          text="Xỉu"
          selected={!luaChon}
          onToggleLuaChon={() => {
            dispatch(BTXucSacActions.toggleLuaChon(false));
          }}
        />
      </div>

      <KetQua />
      <div className="text-center">
        <button
          className="btn btn-danger"
          onClick={() => {
            dispatch(BTXucSacActions.handleXucXac());
          }}
        >
          <span className="fs-5 p-5">Play</span>
        </button>
      </div>
    </div>
  );
};
