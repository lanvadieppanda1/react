// rafc

import React from "react";
import { HeaderComponent } from "./HeaderComponent";
import { FooterComponent } from "./FooterComponent";
import { NavigationComponent } from "./NavigationComponent";
import { ContentComponent } from "./ContentComponent";

export const HomeComponent = () => {
  return (
    <div className="container">
      <h1>BT Component</h1>
      <HeaderComponent />
      <div className="row">
        <div className="col-4 pe-0">
          <NavigationComponent />
        </div>
        <div className="col-8 ps-0">
          <ContentComponent />
        </div>
      </div>
      <FooterComponent />
    </div>
  );
};
