// rafc

import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./sidebar.css";

export const SideBar = () => {
  return (
    <nav className="SideBar d-flex flex-column gap-3">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/databindding">Data binding</NavLink>
      <NavLink to="/renderwithcondition">Render with condition</NavLink>
      <NavLink to="/renderwithmap">Render with map</NavLink>
      <NavLink to="/handleevent">Handle event</NavLink>
      <NavLink to="/btmovie">BTMovie</NavLink>
      <NavLink to="/stylecomponent">Style Component</NavLink>
      <NavLink to="/demostate">Demo State</NavLink>
      <NavLink to="/btcar">BT car</NavLink>
      <NavLink to="/demoprops">Demo props</NavLink>
      <NavLink to="/btphone">BT phone</NavLink>
      <NavLink end to="/redux">
        BT Shoe
      </NavLink>
      <NavLink to="/redux/btxucxac">BT Xúc Xắc</NavLink>
      <NavLink to="/btform">BT Form</NavLink>
      <NavLink to="/demoUseEffect">Demo Use Effect</NavLink>
      <NavLink to="/demoHook">Demo Hook</NavLink>
    </nav>
  );
};
