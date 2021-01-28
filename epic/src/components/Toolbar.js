import React from "react";
import "./SideDrawer/DrawerToggleButton";

const Toolbar = props => {
   <header className="toolbar">
       <nav className="toolbar__navigation">
       <div>
           <DrawerToggleButton />
       </div>
       <div className="toolbar__logo"><a>Their Logo</a></div>
       <div className="spacer" />
       <div className="toolbar_navigation-items">
           <ul>
               <li><a href="/">Home</a></li>
               <li><a href="/Mission">Mission</a></li>
               <li><a href="/Projects">Projects</a></li>
               <li><a href="/Services">Services</a></li>
               <li><a href="/Contact">Contact</a></li>
           </ul>
        </div>
        </nav>
   </header>
};

export default Toolbar;
//goes to existing navbar
//.toolbar{
//     width: 100%;
// position: fixed;
// top: 0;
// left: 0;
// height: 56px;
// background: blue;
// }
// .toolbar__navigation {
//     display: flex;
//     align-items: center;
// height: 100%;
// padding: 0 1rem;
// }
// .toolbar__logo a {
    //color: white;
    //text-decoration: none;
    // font-size: 1.5rem;
// }
// .spacer {
//     flex: 1;
// }
// .toolbar_navigation-items ul {
//     list-style: none;
//     margin: 0; 
//     padding: 0
// display: flex;
// }
// .toolbar_navigation-items li {
//     padding: 0 0.5rem;
// }
// .toolbar_navigation-items a {
//     color: white;
//     text-decoration: none;
// }
// .tool_navigation-items a: hover, 
// .tool_navigation-items a:active {
//     color: orange;
// }
// .toggle-button {
    // display: flex;
    // flex-direction: column;
    //justify-content: space-between;
// height: 24px;   
// width: 36px; 
// background: transparent; 
// border: none;
// cursor: pointer;
// padding: 0;
// box-sizing: border-box;
//}
// .toggle-button: focus {
 //  outline: none;
//}
//.toggle-button__line {
//   width: 30px;  
//   height: 2px;
//   backgroun: white;
// }
//sidedrawer css
// .side-drawer {
//     height: 100%;
//     background: white;
//     color: black;
//     box-shadow: 2px 0px 5px rgba(0, 0, 0, 0.5);
//     position: fixed;
//     top: 0;
//     left: 0;
//     width: 400px;
//     z-index: 999;
// }