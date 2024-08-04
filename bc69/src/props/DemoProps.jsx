import React from "react";
import { Header } from "./Header";

export const DemoProps = () => {
  return (
    <div className="container mt-5">
      <h1>Demo props</h1>
      <Header
        bgColor="red"
        padding={{ top: 20, bottom: 30 }}
        producsABC={[1, 2, 3, 4, 5]}
        func={() => {}}
      />
    </div>
  );
};
