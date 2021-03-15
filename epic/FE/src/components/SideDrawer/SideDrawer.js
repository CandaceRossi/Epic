import React from "react";
import '../../sass/sidedrawer.scss';

const SideDrawer = props => {
    let drawerClasses = ["side-drawer"];
    if(props.show) {
        drawerClasses = "side-drawer open";
    }
return (
    <nav className={drawerClasses}>
        <ul>
            <li>
                <a href="/">Home</a>
                 <a href="/Mission">Mission</a>
                  <a href="/Projects">Projects</a>
                   <a href="/Residential">Residential Painting</a>
                    <a href="/Commercial">Commercial Painting</a>
                     <a href="/Powerwashing">PowerWashing</a>
                      <a href="/Contact">Contact Us</a>
            </li>
        </ul>
    </nav>
)}

export default SideDrawer;