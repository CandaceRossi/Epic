import React from 'react';
import { Route, Switch } from "react-router-dom";
import './App.scss';

import NavbarComp from "./components/NavbarComp";
import TopNavComp from "./components/TopNavComp";
import Home from "./components/Home";

import Mission from "./components/Mission";
import Contact from "./components/Contact";
import Residential from "./components/Residential";
import Commercial from "./components/Commercial";
import PressureWashing from "./components/PressureWashing";
import Projects from "./components/Projects";
import Footer from "./components/Footer";


function App() {
  window.addEventListener("load", () => {
    document.querySelector("body").classList.add("loaded");
  })
  return (
    <div className="App">
      <div className="fixed-top">
        {/* <div classname="fixed-nav"> */}
        <TopNavComp />
        <NavbarComp />

      </div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Mission" component={Mission} />
        <Route path="/Contact" component={Contact} />
        <Route path="/Residential" component={Residential} />
        <Route path="/Commercial" component={Commercial} />
        <Route path="/PressureWashing" component={PressureWashing} />
        <Route path="/Projects" component={Projects} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;

