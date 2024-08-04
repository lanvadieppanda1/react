import React from "react";
import cn from "classnames";
import { useDispatch } from "react-redux";
import { BTXucSacActions } from "../storeReduxToolkit/BTSucXac/slice";

export const LuaChon = (props) => {
  const { text, selected, onToggleLuaChon } = props;
  const dispatch = useDispatch();
  return (
    <div
      className={cn(
        "rounded-lg d-flex align-items-center justify-content-center bg-primary ",
        {
          "bg-success": selected,
          "bg-warning": !selected,
        }
      )}
      style={{ width: 200, height: 200, cursor: "pointer" }}
      //   onClick={() => dispatch(BTXucSacActions.toggleLuaChon(selected))}
      onClick={onToggleLuaChon}
    >
      <p className="text-white fw-bold fs-2">{text}</p>
    </div>
  );
};
