import React, { useState } from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";


const NavbarComp = () => {
    const [show, setShow] = useState(false);
    const showDropdown = (e) => {
        setShow(!show);
    }
    const hideDropdown = e => {
        setShow(false);
    }
    return (
        <div className="nav">
            <Navbar>
                <Nav.Link href="/">HOME</Nav.Link>
                <Nav.Link href="/Mission">MISSION</Nav.Link>
                <Nav.Link href="/Projects">PROJECTS</Nav.Link>
                <NavDropdown title="SERVICES" className="basic-nav-dropdown"
                    show={show}
                    onMouseEnter={showDropdown}
                    onMouseLeave={hideDropdown}>
                    <NavDropdown.Item className="droptop" href="#action/3.1">Residential Painting</NavDropdown.Item>
                    <NavDropdown.Item className="droptop" href="#action/3.2">Commercial Painting</NavDropdown.Item>
                    <NavDropdown.Item className="droptop" href="#action/3.4">Pressure Washing</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="/Contact">CONTACT</Nav.Link>
            </Navbar>
        </div>
    );
};

export default NavbarComp;
