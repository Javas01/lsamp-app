// import React from 'react';
// import { Navbar, Nav, Form, FormControl, Button, NavDropdown } from 'react-bootstrap';
// import { Redirect } from 'react-router-dom';

// const NavBar = (props) => (
//   <div>
//     <Navbar bg="primary" variant="dark">
//       <Navbar.Brand href="/">LSAMP Research Team</Navbar.Brand>
//       <Nav className="mr-auto">
//           <NavDropdown title="Staff" id="basic-nav-dropdown">
//             <NavDropdown.Item href="/Cao">Dr. Cao</NavDropdown.Item>
//             <NavDropdown.Item href="/Member2">Staff Member 2</NavDropdown.Item>
//             <NavDropdown.Item href="./Member3">Staff Member 3</NavDropdown.Item>
//             <NavDropdown.Item href="Member4">Staff Member 4</NavDropdown.Item>
//             <NavDropdown.Item href="/Jawwaad">Jawwaad</NavDropdown.Item>
//           </NavDropdown>
//         <Nav.Link href="#features">Research</Nav.Link>
//         <Nav.Link href="#pricing">Contact</Nav.Link>
//       </Nav>
//       {/* <Form inline>
//         <FormControl type="text" placeholder="Search" className="mr-sm-2" />
//         <Button variant="outline-light">Search</Button>
//       </Form> */}
//     </Navbar>
//   </div>
// )

// export default NavBar

import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">LSAMP Research Team</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/research/">Research</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/Contact/">Contact</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Staff
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <NavLink href="Cao">Dr. Cao</NavLink>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  <NavLink href="https://master.d1wom0b5xch05x.amplifyapp.com/Jawwaad/">Jawwaad</NavLink>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  <NavLink href="/Member3/">Member 3</NavLink>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;