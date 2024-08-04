import React from "react";

export const Header = (props) => {
  console.log("props: ", props);
  props.func?.();
  return (
    <div
      style={{
        backgroundColor: props?.bgColor,
        paddingTop: props?.padding?.top,
      }}
    >
      header
    </div>
  );
};

//optional change
//third argument
