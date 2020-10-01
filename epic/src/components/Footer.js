import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";


const Footer = () => {
    return (
        <div className="footer">
            <Navbar>
                <Nav.Link href="/">HOME</Nav.Link>
                <Nav.Link href="/Mission">MISSION</Nav.Link>
                <Nav.Link href="/Projects">PROJECTS</Nav.Link>
                <Nav.Link href="/Contact">CONTACT</Nav.Link>
            </Navbar>

        </div>
    );
};

export default Footer;