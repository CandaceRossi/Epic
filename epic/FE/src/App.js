import React, {useState} from 'react';
import { Route, Switch } from "react-router-dom";
import './App.scss';
import NavContainer from "./components/Nav/NavContainer";
import Home from "./components/Home/Home";
import MissionLargest from "./components/Mission/MissionLargest";
import ContactLargest from "./components/Contact/ContactLargest";
import ResidentialLargest from "./components/Residential/ResidentialLargest";
import CommercialLargest from "./components/Commercial/CommercialLargest";
import PowerwashingLargest from "./components/Powerwashing/PowerwashingLargest";
import ProjectsLargest from "./components/Projects/ProjectsLargest";
// import ParallaxLargest from "./components/Parallax/ParallaxLargest";
import Footer from "./components/Footer/Footer";
import SideDrawer from "./components/SideDrawer/SideDrawer";
import Backdrop from "./components/Backdrop/Backdrop";

function App() {
  
  // window.addEventListener("load", () => {
  //   document.querySelector("body").classList.add("loaded");
  // })
//state to display more than one parallax - only true for hompage
  const [isNeeded] = useState(false);
  //state for setting side nav open or closed
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false);
  //toggle for side nav drawer
  const drawerToggleClickHandler = () => {
  setSideDrawerOpen((prevState) => {
    // return {sideDrawerOpen: !prevState.sideDrawerOpen};
     return setSideDrawerOpen(!prevState);
    });
  };
  

//backdrop handler for shading window when side nav is popped open
  const backdropClickHandler = () => {
    setSideDrawerOpen(false)
  };
  
//Smooth scroll code high level 
  // function SmoothScroll(target, speed, smooth) {
  //   if (target === document)
  //     target = (document.scrollingElement
  //       || document.documentElement
  //       || document.body.parentNode
  //       || document.body) // cross browser support for document scrolling

  //   var moving = false
  //   var pos = target.scrollTop
  //   var frame = target === document.body
  //     && document.documentElement
  //     ? document.documentElement
  //     : target // safari is the new IE
  //   target.addEventListener('mousewheel', scrolled, { passive: false })
  //   target.addEventListener('DOMMouseScroll', scrolled, { passive: false })

  //   function scrolled(e) {
  //     e.preventDefault(); // disable default scrolling
  //     var delta = normalizeWheelDelta(e)
  //     pos += -delta * speed
  //     pos = Math.max(0, Math.min(pos, target.scrollHeight - frame.clientHeight)) // limit scrolling
  //     if (!moving) update()
  //   }

  //   function normalizeWheelDelta(e) {
  //     if (e.detail) {
  //       if (e.wheelDelta)
  //         return e.wheelDelta / e.detail / 40 * (e.detail > 0 ? 1 : -1) // Opera
  //       else
  //         return -e.detail / 3 // Firefox
  //     } else
  //       return e.wheelDelta / 120 // IE,Safari,Chrome
  //   }

  //   function update() {
  //     moving = true
  //     var delta = (pos - target.scrollTop) / smooth
  //     target.scrollTop += delta
  //     if (Math.abs(delta) > 0.5)
  //       requestFrame(update)
  //     else
  //       moving = false
  //   }
  //   var requestFrame = function () { // requestAnimationFrame cross browser
  //     return (
  //       window.requestAnimationFrame ||
  //       window.webkitRequestAnimationFrame ||
  //       window.mozRequestAnimationFrame ||
  //       window.oRequestAnimationFrame ||
  //       window.msRequestAnimationFrame ||
  //       function (func) {
  //         window.setTimeout(func, 1000 / 50);
  //       }
  //     );
  //   }()
  // }
  // SmoothScroll(document, 120, 12) //call smoothscroll

  //set backdrop to conditionally render with handler
  let backdrop;
  if (sideDrawerOpen) {
    console.log("backdrop dropped")
    backdrop = <Backdrop bdclick={backdropClickHandler} />;
  }
  //loading state for page render
  const foo = false;
    if (foo)
        return (<div> <h4>Loading...</h4></div>)


  return (
    <div className="App">
   
        <SideDrawer show={sideDrawerOpen} />
        {backdrop}
    {/* <div> */}
      <div className="fixed-top">
        <NavContainer drawerClickHandler={drawerToggleClickHandler} />
      </div>
      {/* </div> */}
      <Switch>
        <Route exact path="/" component={Home} isNeeded={isNeeded} />
        
       <Route path="/Mission" component={MissionLargest} />
        <Route path="/Contact" component={ContactLargest} />
        <Route path="/Residential" component={ResidentialLargest} />
        <Route path="/Commercial" component={CommercialLargest} />
        <Route path="/Powerwashing" component={PowerwashingLargest} />
        <Route path="/Projects" component={ProjectsLargest} />
        {/* <Route path="/Parallax" component={ParallaxLargest} /> */}

  </Switch>
      <div className="lastbottom">
         <Footer />
      </div>
    
  
     </div>
  );
}

export default App;