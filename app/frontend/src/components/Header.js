import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap'
import logo from '../images/logo.png';
import 'Header.css';

class Header extends Component {
  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <img src={logo} className="app-logo" alt="logo" />
          </Navbar.Brand>
        </Navbar.Header>
        <Nav pullRight>
          <NavItem eventKey={1} href="/signin">Sign In</NavItem>
          <NavItem eventKey={2} href="/signup">Sign Up</NavItem>
        </Nav>
      </Navbar>
    );
  }
}

export default Header;
