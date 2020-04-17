import React from 'react';
import './App.css';
import CarouselComp from "./components/CarouselComp";
import NavbarComp from "./components/NavbarComp";
import TopNavComp from "./components/TopNavComp";
import MissionComp from "./components/MissionComp";
import palm from './images/palm.jpg';

function App() {
  return (
    <div className="App">
      <div className="component-list">
        <TopNavComp />
        <NavbarComp />
        <div className="comp-list-carousel">
          <CarouselComp />
        </div>
        <div className="revbody">
          <div className="reveal">
            <div className="reveal-container">
              <div className="reveal_title">
                Epic Paint & Construction
          </div>
              <div className="reveal_title-overlay">
                <div className="reveal_title-overlay-value">
                  Subscribe!
            </div>
              </div>
            </div>
            {/* <img src={palm} alt="palms" /> */}
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

