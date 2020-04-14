import React from 'react';
import './App.css';
import CarouselComp from "./components/CarouselComp";
import NavbarComp from "./components/NavbarComp";
// import painter from './images/painter.jpg';

function App() {
  return (
    <div className="App">
      <div className="component-list">
        <NavbarComp />
        <div className="comp-list-carousel">
          <CarouselComp />
        </div>
        <div className="mission">
          <div className="missions-style">
            <h2>Our Mission</h2>
            <p> We make exceptional paint for Southern climates, proudly delivered by knowledgable people with a mission to brighten the lives of everyone we serve. </p>
            <p>Florida Paints was founded with the goal of providing a broad assortment of quality,
            Florida-focused paint products and paint supplies, ample inventory and the best customer service experience in the paint industry.
            While our name may be relatively new to you, our roots run deep in the professional painting industry here in the Sunshine State.
        Learn about our history.</p>
          </div>
        </div>
        <div className="parallax">
        </div>
        <div style={{ "height": "300px", "backgroundColor": "#5F6769", "fontSize": "36px" }}>
        </div>
        <div className="parallaxes">
        </div><div style={{ "height": "300px", "backgroundColor": "#5F6769", "fontSize": "36px" }}>
        </div>
        <div className="parallaxing">
        </div>
        <div style={{ "height": "300px", "backgroundColor": "#5F6769", "fontSize": "36px" }}>
        </div>
      </div>

    </div>
  );
}

export default App;

