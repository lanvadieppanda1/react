import React, { useMemo, useState, useCallback, memo } from "react";
import Child from "./Child";

export const DemoHook = () => {
  const [number, setNumber] = useState(1);

  //kết hợp vs việc sử dụng memo ở component nhận props
  const sum2 = useCallback(() => {
    console.log("sum2 function");
  }, []);

  const sum = () => {
    console.log("sum function");
  };

  const totals = useMemo(() => {
    console.log("usseMemo");
    let total = 0;
    for (let i = 1; i <= number; i++) total += i;
    return total;
  }, [number]);
  console.log("totals: ", totals);

  // const sum = (n) => {
  //   let total = 0;
  //   for (let i = 1; i <= n; i++) total += i;
  //   return total;
  // };

  //  const total = sum(1800);
  // console.log("total: ", total);

  return (
    <div>
      <h1>demoHooks</h1>

      <div className="mt-3">
        <p className="fs-2">Number: {number}</p>
        <button
          className="btn btn-success"
          onClick={() => setNumber(number + 1)}
        >
          Increase Number
        </button>
      </div>

      <Child sum={sum2} />
    </div>
  );
};
