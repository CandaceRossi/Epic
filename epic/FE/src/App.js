import React, {useState} from 'react';
import { Route, Switch } from "react-router-dom";
import './App.scss';
import NavContainer from "./components/NavContainer";
import Home from "./components/Home";
import Mission from "./components/Mission";
import Contact from "./components/Contact";
import Residential from "./components/Residential";
import Commercial from "./components/Commercial";
import Parallax from "./components/Parallax";
import Powerwashing from "./components/Powerwashing";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import SideDrawer from "./components/SideDrawer/SideDrawer";
import Backdrop from "./components/Backdrop/Backdrop";

function App() {
  window.addEventListener("load", () => {
    document.querySelector("body").classList.add("loaded");
  })
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
  //state for contact forms
  // const [name, setName] = useState("");
  // const [lname, setLName] = useState("");
  // const [country, setCountry] = useState("");
  // const [phone, setPhone] = useState("");
  // const [email, setEmail] = useState("");
  // const [clientText, setClientText] = useState("");

  // , {
  //       headers: { 
  //        'Access-Control-Allow-Origin' : '*'
  //       },
  //     })

  // useEffect(() => {
  //   const source = axios.CancelToken.source();
  //   return () => {
  //     source.cancel();
  //   };
  // }, []);

//backdrop handler for shading window when side nav is popped open
  const backdropClickHandler = () => {
    // const myElement = document.getElementsByClassName(".backdrop")
    // // const matches = myElement.querySelectorAll("div")
    // myElement.click(myElement.css("display", "none"))
    setSideDrawerOpen(false)
// return {sideDrawerOpen: false};
  };
  
//Smooth scroll code high level 
  function SmoothScroll(target, speed, smooth) {
    if (target === document)
      target = (document.scrollingElement
        || document.documentElement
        || document.body.parentNode
        || document.body) // cross browser support for document scrolling

    var moving = false
    var pos = target.scrollTop
    var frame = target === document.body
      && document.documentElement
      ? document.documentElement
      : target // safari is the new IE
    target.addEventListener('mousewheel', scrolled, { passive: false })
    target.addEventListener('DOMMouseScroll', scrolled, { passive: false })

    function scrolled(e) {
      e.preventDefault(); // disable default scrolling
      var delta = normalizeWheelDelta(e)
      pos += -delta * speed
      pos = Math.max(0, Math.min(pos, target.scrollHeight - frame.clientHeight)) // limit scrolling
      if (!moving) update()
    }

    function normalizeWheelDelta(e) {
      if (e.detail) {
        if (e.wheelDelta)
          return e.wheelDelta / e.detail / 40 * (e.detail > 0 ? 1 : -1) // Opera
        else
          return -e.detail / 3 // Firefox
      } else
        return e.wheelDelta / 120 // IE,Safari,Chrome
    }

    function update() {
      moving = true
      var delta = (pos - target.scrollTop) / smooth
      target.scrollTop += delta
      if (Math.abs(delta) > 0.5)
        requestFrame(update)
      else
        moving = false
    }
    var requestFrame = function () { // requestAnimationFrame cross browser
      return (
        window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function (func) {
          window.setTimeout(func, 1000 / 50);
        }
      );
    }()
  }
  SmoothScroll(document, 120, 12) //call smoothscroll

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
    <div>
      <div className="fixed-top">
        <NavContainer drawerClickHandler={drawerToggleClickHandler} />
      </div>
      </div>
      <Switch>
        <Route exact path="/" component={Home} isNeeded={isNeeded} />
        
        <Route path="/Misshandle" component={Mission} />
        <Route path="/Contact" component={Contact} />
        <Route path="/Residential" component={Residential} />
        <Route path="/Commercial" component={Commercial} />
        <Route path="/Powerwashing" component={Powerwashing} />
        <Route path="/Projects" component={Projects} />
        <Route path="/Parallax" component={Parallax} />

  </Switch>
      <div className="lastbottom">
         <Footer />
      </div>
    
    </div>
  );
}

export default App;

