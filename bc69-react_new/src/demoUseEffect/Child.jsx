import React, { useEffect } from "react";
import { useFetcher } from "react-router-dom";

export const Child = () => {
  useEffect(() => {
    console.log("useEffect child");
  });
  return <div>child</div>;
};
