import React, { useState } from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import '../sass/navbars.scss';


const NavbarComp = () => {
    const [show, setShow] = useState(false);
    const showDropdown = (e) => {
        setShow(!show);
    }
    const hideDropdown = e => {
        setShow(false);
    }

    return (
        <header className="navbootstrap">
            <Navbar>
                <Nav.Link href="/">HOME</Nav.Link>
                <Nav.Link href="/Mission">MISSION</Nav.Link>
                <Nav.Link href="/Projects">PROJECTS</Nav.Link>
                <NavDropdown title="SERVICES" className="basic-nav-dropdown"
                    show={show}
                    onMouseEnter={showDropdown}
                    onMouseLeave={hideDropdown}>
                    <NavDropdown.Item className="droptop" href="/Residential">Residential Painting</NavDropdown.Item>
                    <NavDropdown.Item className="droptop" href="/Commercial">Commercial Painting</NavDropdown.Item>
                    <NavDropdown.Item className="droptop" href="/Powerwashing">Powerwashing</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="/Contact">CONTACT</Nav.Link>
            </Navbar>
        </header>
    );
}

export default NavbarComp;
