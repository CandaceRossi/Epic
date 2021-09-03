import React from "react";
import OSHA_logo_black from "../images/OSHA_logo_black.png";
import houzzicon from "../images/houzzicon.png";
import twittericon from "../images/twittericon.png";
import instagramicon from "../images/instagramicon.png";
import { Nav, Navbar } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import '../sass/footer.scss';


const Footer = () => {
    return (
        <div className="footing">
            <div className="prefooter" style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center"}}>
                <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "flex-start"}}>
                <div className="prefoo">
                <a><span ><FontAwesomeIcon icon={faPhone}/></span> 239-555-5555</a>
                <a><span ><FontAwesomeIcon icon={faEnvelope}/></span> andrewcharles@epicpaint.com</a>
               
                <img src={OSHA_logo_black} alt="osha" />
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
                <a style={{display: "flex", height: "auto", margin: "0px", width: "54px"}}><img style={{margin: "0px", marginRight: "10px", width: "54px", height:"44px"}} src={houzzicon} alt="houzz" /></a>
                <a style={{display: "flex", height: "auto", margin: "0px", width: "54px"}}><img style={{margin: "0px", marginRight: "10px", width: "54px", height:"44px"}} src={instagramicon} alt="instagram" /></a>
                <a style={{display: "flex", height: "auto", margin: "0px", width: "44px"}}><img style={{margin: "0px", width: "44px", height:"44px"}} src={twittericon} alt="twitter" /></a>
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