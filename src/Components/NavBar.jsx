import React from 'react';
import { Navbar, Nav, Form, FormControl, Button, NavDropdown } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';

const NavBar = (props) => (
  <div>
    <Navbar bg="primary" variant="dark">
      <Navbar.Brand href="/">LSAMP Research Team</Navbar.Brand>
      <Nav className="mr-auto">
          <NavDropdown title="Staff" id="basic-nav-dropdown">
            <NavDropdown.Item href="/Cao">Dr. Cao</NavDropdown.Item>
            <NavDropdown.Item href="/Member2">Staff Member 2</NavDropdown.Item>
            <NavDropdown.Item href="Member3">Staff Member 3</NavDropdown.Item>
            <NavDropdown.Item href="Member4">Staff Member 4</NavDropdown.Item>
            <NavDropdown.Item href="Member5">Staff Member 5</NavDropdown.Item>
          </NavDropdown>
        <Nav.Link href="#features">Research</Nav.Link>
        <Nav.Link href="#pricing">Contact</Nav.Link>
      </Nav>
      {/* <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-light">Search</Button>
      </Form> */}
    </Navbar>
  </div>
)

export default NavBar