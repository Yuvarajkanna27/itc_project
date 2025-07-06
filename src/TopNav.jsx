import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import Dropdown from 'react-bootstrap/Dropdown';
import NavDropdown from 'react-bootstrap/NavDropdown';
// import NavItem from 'react-bootstrap/NavItem';
import { NavLink } from "react-router-dom";


function TopNav() {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg" className="sticky-top">
          {/* Place the Navbar.Toggle on the left side */}
          <Navbar.Toggle aria-controls="navbar-nav" className="me-2" />
          <Navbar.Brand className="ms-4" href="/" style={{ fontSize: "20px"}}>
            <strong>ITC HOTEL LIMITED</strong>
          </Navbar.Brand>
          <Navbar.Collapse className="me-4" id="navbar-nav">
            <Nav className="ms-auto" activeKey="/home"> {/* Align links to the right */}
              <Nav.Item>
                <NavLink to="/OurHotelPage" className="nav-link">Our Hotels</NavLink>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/CLubItc">Club ITC</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/Offers">Offers</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-3">Corporate</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-4">Investors</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-5">Relation</Nav.Link>
              </Nav.Item>
              <Nav.Item>
              {/* <Dropdown as={NavItem}>
                <Dropdown.Toggle >Login</Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item><Nav.Link href="/Register"></Nav.Link></Dropdown.Item>
                  <Dropdown.Item><Nav.Link href="/Login"></Nav.Link></Dropdown.Item>
                  <Dropdown.Item><Nav.Link href="/Reservetion"></Nav.Link></Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown> */}
              <NavDropdown title="Login" id="basic-nav-dropdown">
                <NavDropdown.Item href="/Register">Register</NavDropdown.Item>
                <NavDropdown.Item href="/Login">Login</NavDropdown.Item>
                <NavDropdown.Item href="/Reservetion">Find Reservetion</NavDropdown.Item>
            </NavDropdown>

              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default TopNav
