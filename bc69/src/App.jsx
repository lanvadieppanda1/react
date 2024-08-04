import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import ClassComponent from "./DemoComponent/ClassComponent";
import { FunctionComponent } from "./DemoComponent/FunctionComponent";
import { HomeComponent } from "./BTComponent/HomeComponent";
import { RenderWithCondition } from "./RenderWithCondition/RenderWithCondition";
import { RenderWithMap } from "./RenderWithMap/RenderWithMap";
import { HandleEvent } from "./HandleEvent/HandleEvent";
import { BTMovie } from "./BTMovie/BTMovie";
import { StyleComponent } from "./styleComponent/StyleComponent";
import { DemoState } from "./State/DemoState";
import { BTCar } from "./BTCar/BTCar";
import { DemoProps } from "./props/DemoProps";
import { BTPhone } from "./BTPhone/BTPhone";
import { BTShoe } from "./BTShoe/BTShoe";
import { BTSucXac } from "./BTSucXac/BTSucXac";

// Có 2 loại component: class component, function component
// class component (stateful): life cycle
// function component (stateless): ko có life cycle và sử dụng hooks

// JSX: javascript XML => cho phép viết cú pháp HTML ở trong js
// những attributes: viết theo quy tắc camelCase
// class => className

// 1 component chỉ đc phép return về 1 thẻ JSX duy nhất

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <ClassComponent></ClassComponent>

            <FunctionComponent></FunctionComponent>

            <FunctionComponent /> */}

      <HomeComponent />

      <RenderWithCondition />

      <RenderWithMap />

      <HandleEvent />

      <BTMovie />

      <StyleComponent />

      <DemoState />

      <BTCar />

      <DemoProps />

      <BTPhone />

      <BTShoe />

      <BTSucXac />
    </>
  );
}

export default App;
