import React from "react";
import OSHA_logo_black from "../images/OSHA_logo_black.png";
import { Nav, Navbar } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import '../sass/footer.scss';


const Footer = () => {
    return (
        <div className="footing">
            <div className="prefooter" style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "space-between"}}>
                <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "flex-start"}}>
                <div className="prefoo">
                <a><span ><FontAwesomeIcon icon={faPhone}/></span> 239-555-5555</a>
                <a><span ><FontAwesomeIcon icon={faEnvelope}/></span> andrewcharles@epicpaint.com</a>
               
                <img src={OSHA_logo_black} style={{height: "70px", width:"350px"}} alt="osha" />
                </div> 
                <div className="sortnav">
                    <div><h1>EPIC</h1></div>

                     <div className="sorting">
                            <h3>PAINTING &</h3>
                            <h3>POWERWASHING</h3>
                    </div>
                    </div>
                </div>             
            </div>
            <footer className="footer">
                <nav className="anavforfooter">
                    <a id="atagforfooter" href="/">HOME</a>
                    <a id="atagforfooter" href="/Mission">MISSION</a>
                    <a id="atagforfooter" href="/Projects">PROJECTS</a>
                    <a id="atagforfooter" href="/Contact">CONTACT</a>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;