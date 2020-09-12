import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Navigation from "./Navigation";
import MainSection from "./Routes/MainSection";
import Reservation from "./Routes/Reservation";

const Main = () => {
  // Link를 사용하기 위해서는 Router 태그 내부에 있어야함

  return (
    <HashRouter>
      <Navigation />

      <Route path="/" exact={true} component={MainSection} />
      <Route path="/reservation" component={Reservation} />
    </HashRouter>
  );
};

export default Main;
