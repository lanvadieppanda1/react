import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import ClassComponent from "./DemoComponent/ClassComponent";
import { FunctionComponent } from "./DemoComponent/FunctionComponent";
import { HomeComponent } from "./BTComponent/HomeComponent";
import { DataBinding } from "./DataBinding/DataBinding";
import { RenderWithCondition } from "./RenderWithCondition/RenderWithCondition";
import { RenderWithMap } from "./RenderWithMap/RenderWithMap";
import { HandleEvent } from "./HandleEvent/HandleEvent";
import { BTMovie } from "./BTMovie/BTMovie";
import { StyleComponent } from "./styleComponent/StyleComponent";
import { DemoState } from "./State/DemoState";
import { BTCar } from "./BTCar/BTCar";
import { DemoProps } from "./Props/DemoProps";
import { BTPhone } from "./BTPhone/BTPhone";
import { BTShoe } from "./BTShoe/BTShoe";
import { BTXucXac } from "./BTXucXac/BTXucXac";
import { Routes, Route, Outlet } from "react-router-dom";
import { SideBar } from "./components/SideBar";
import { NotFound } from "./components/NotFound";
import { MainLayout } from "./components/MainLayout";
import { MovieDetail } from "./BTMovie/MovieDetail";
import { BTForm } from "./BTForm/BTForm";
import { DemoUseEffect } from "./demoUseEffect/DemoUseEffect";
import { DemoHook } from "./demoHooks/DemoHook";

// Có 2 loại component: class component, function component
// class component (stateful): life cycle
// function component (stateless): ko có life cycle và sử dụng hooks

// JSX: javascript XML => cho phép viết cú pháp HTML ở trong js
// những attributes: viết theo quy tắc camelCase
// class => className

// 1 component chỉ đc phép return về 1 thẻ JSX duy nhất

function App() {
  return (
    <>
      {/* <ClassComponent></ClassComponent>

            <FunctionComponent></FunctionComponent>

            <FunctionComponent /> */}
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<HomeComponent />} />
          <Route path="/databindding" element={<DataBinding />} />
          <Route
            path="/renderwithcondition"
            element={<RenderWithCondition />}
          />
          <Route path="/renderwithmap" element={<RenderWithMap />} />
          <Route path="/handleevent" element={<HandleEvent />} />
          <Route path="/btmovie" element={<BTMovie />} />
          <Route path="/moviedetail/:movieId" element={<MovieDetail />} />
          <Route path="/stylecomponent" element={<StyleComponent />} />
          <Route path="/demostate" element={<DemoState />} />
          <Route path="/btcar" element={<BTCar />} />
          <Route path="/demoprops" element={<DemoProps />} />
          <Route path="/btphone" element={<BTPhone />} />
          <Route path="/redux">
            <Route index element={<BTShoe />} />
            <Route path="btxucxac" element={<BTXucXac />} />
          </Route>
          <Route path="/btform" element={<BTForm />} />
          <Route path="/demoUseEffect" element={<DemoUseEffect />} />
          <Route path="/demoHook" element={<DemoHook />} />
        </Route>
        {/* // nested route // 404 not found */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
