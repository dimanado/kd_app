import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap'
import logo from 'logo.png';
import 'Header.css';

export default function Header() {
  return (
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="/"><img src={logo} className="app-logo" alt="logo" /></a>
        </Navbar.Brand>
      </Navbar.Header>
      <Nav pullRight>
        <NavItem eventKey={1} href="/login">Login</NavItem>
        <NavItem eventKey={2} href="/signup">Sign Up</NavItem>
      </Nav>
    </Navbar>
  );
}
