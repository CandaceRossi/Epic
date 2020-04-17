import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";


const TopNavComp = () => {
    return (
        <div className="topNav">
            <p>Servicing South West Florida Area</p>
            <a>Phone: (239)-826-4326 </a>
            <input placeholder="Search..."></input>
            {/* <Navbar>

                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>

                <Nav.Link href="/">HOME</Nav.Link>
                <Nav.Link href="/Contact">CONTACT</Nav.Link>
                <Nav.Link href="/About">ABOUT</Nav.Link>
                <Nav.Link href="/ShoppingCart"> SHOPPING CART </Nav.Link>
            </Navbar> */}
        </div>
    );
};

export default TopNavComp;