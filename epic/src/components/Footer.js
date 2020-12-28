import React from "react";
import OSHA_logo_black from "../images/OSHA_logo_black.png";
import { Nav, Navbar } from "react-bootstrap";


const Footer = () => {
    return (
        <div className="footing">
            <div className="prefooter" style={{ height: "100%", display: "flex", alignItems: "center", justifyContent: "space-between"}}>
                <div style={{ height: "100%", display: "flex", alignItems: "center", justifyContent: "flex-start"}}>
                <div style-={{width: "100%"}}>
                <div className="prefoo">
                <p>239-555-5555</p>
                <p>andrewcharles@epicpaint.com</p>
               
                <img src={OSHA_logo_black} style={{height: "70px", width:"350px", marginLeft: "-10px"}} alt="osha" />
                </div>
                
                </div> 
                </div>
                <div> <div className="sortnav">
                            <div><h1>EPIC</h1></div>

                            <div className="sorting">
                                <h3>PAINTING &</h3>
                                <h3>POWERWASHING</h3>
                            </div>
                        </div></div>
            </div>
            <div className="footer">
                <Navbar className="atagsonfooter">
                    <Nav.Link href="/">HOME</Nav.Link>
                    <Nav.Link href="/Mission">MISSION</Nav.Link>
                    <Nav.Link href="/Projects">PROJECTS</Nav.Link>
                    <Nav.Link href="/Contact">CONTACT</Nav.Link>
                </Navbar>

            </div>
        </div>
    );
};

export default Footer;