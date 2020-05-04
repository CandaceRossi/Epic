import React from 'react';
import { Route, Switch } from "react-router-dom";
import './App.scss';

import NavbarComp from "./components/NavbarComp";
import TopNavComp from "./components/TopNavComp";
import Home from "./components/Home";
import CarouselComp from "./components/CarouselComp";
import Parralax from "./components/Parralax";
import Mission from "./components/Mission";
import palm from './images/palm.jpg';

function App() {
  window.addEventListener("load", () => {
    document.querySelector("body").classList.add("loaded");
  })
  return (
    <div className="App">
      <div className="component-list">
        <TopNavComp />
        <NavbarComp />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Mission" component={Mission} />
        </Switch>
      </div>
    </div>
  );
}

export default App;

