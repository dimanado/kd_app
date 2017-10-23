import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Auth from 'Auth';
import logo from 'logo.png';
import 'Header.css';

export default function Header() {
  return (
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <Link to="/"><img src={logo} className="app-logo" alt="logo" /></Link>
        </Navbar.Brand>
      </Navbar.Header>
      {Auth.isUserLoggedIn() ? (
        <Nav pullRight>
          <NavItem eventKey={1}><Link to="/profile">Profile</Link></NavItem>
          <NavItem eventKey={2}><Link to="/logout">Log Out</Link></NavItem>
        </Nav>
      ) : (
        <Nav pullRight>
          <NavItem eventKey={1}><Link to="/login">Login</Link></NavItem>
          <NavItem eventKey={2}><Link to="/signup">Sign Up</Link></NavItem>
        </Nav>
      )}
    </Navbar>
  );
}
