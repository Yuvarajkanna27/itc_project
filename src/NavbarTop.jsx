import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
//brand logo image
import Brand1 from '../src/img1/Brand1.svg';
import Brand2 from '../src/img1/Brand2.svg';
import Brand3 from '../src/img1/Brand3.svg';
import Brand4 from '../src/img1/Brand4.svg';
import Brand5 from '../src/img1/Brand5.svg';
import Brand6 from '../src/img1/Brand6.svg';
import TopNav from './TopNav';

function NavbarTop() {
  return (
    <div>
      <TopNav />
      <Navbar bg="light" variant="white" expand="lg" >
          {/* Place the Navbar.Toggle on the left side */}
          <Navbar.Toggle aria-controls="navbar-nav" className="me-2" />
          <Navbar.Brand className="ms-4" href="#home" style={{ fontSize: "15px" }}>
            <img className="mx-2" src={Brand1} width="25px" alt="ITC Hotel" />
            <img className="mx-2" src={Brand2} width="30px" alt="ITC Hotel" />
            <img className="mx-2" src={Brand3} width="30px" alt="ITC Hotel" />
            <img className="mx-2" src={Brand4} width="25px" alt="ITC Hotel" />
            <img className="mx-2" src={Brand5} width="25px" alt="ITC Hotel" />
            <img className="mx-2" src={Brand6} width="35px" alt="ITC Hotel" />
          </Navbar.Brand>
          <Navbar.Collapse className="me-4" id="navbar-nav">
            <Nav className="ms-auto" activeKey="/home"> {/* Align links to the right */}
              <Nav.Item>
                <Nav.Link href="/Destinations">Destination</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/Meeting">Meetings</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="Wedding">Weddings</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/SleepBoutique">Sleep Boutique</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-4">New & Upcoming Hotel</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-5">Contact Us</Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default NavbarTop;
