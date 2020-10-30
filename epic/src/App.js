import React, { useState, useEffect } from 'react';
import axios from "axios";
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

  const [mapData, setMapData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("https://api.tomtom.com/search/2/poiSearch")
      console.log("sumnabitch", response)
      const tt = window.tt

      const map = tt.response({
        key: process.env.REACT_APP_TOM_TOM_API_KEY,
        container: 'map',
        center: [26.640629, -81.872307],
        zoom: 16,
        style: 'tomtom://vector/1/basic-main',
        theme: {
          style: 'main',
          layer: 'basic',
          source: 'vector'
        }
      })
      map.addControl(new tt.FullscreenControl())
      map.addControl(new tt.NavigationControl())

      setMapData(fetchData)
    }
  })



  return (
    <div className="App">
      <div className="fixed-top">
        {/* <div classname="fixed-nav"> */}
        <TopNavComp />
        <NavbarComp />
        <div id="map"></div>
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

