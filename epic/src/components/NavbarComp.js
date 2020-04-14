import React from "react";
import { Nav, Navbar } from "react-bootstrap";


const NavbarComp = () => {
    return (
        <div className="nav">
            <Navbar>
                <Nav.Link href="/">HOME</Nav.Link>
                <Nav.Link href="/Contact">CONTACT</Nav.Link>
                <Nav.Link href="/About">ABOUT</Nav.Link>
                <Nav.Link href="/ShoppingCart"> SHOPPING CART </Nav.Link>
            </Navbar>
        </div>
    );
};

export default NavbarComp;
