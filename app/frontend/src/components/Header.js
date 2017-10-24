import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import Auth from 'Auth';
import logo from 'logo.png';
import 'Header.css';

export default function Header() {
  return (
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <Link to="/">
            <img src={logo} className="app-logo" alt="logo" />
          </Link>
        </Navbar.Brand>
      </Navbar.Header>
      {Auth.isUserLoggedIn() ? (
        <Nav pullRight>
          <LinkContainer to="/profile">
            <NavItem eventKey={1}>Profile</NavItem>
          </LinkContainer>
          <LinkContainer to="/logout">
            <NavItem eventKey={2}>Log Out</NavItem>
          </LinkContainer>
        </Nav>
      ) : (
        <Nav pullRight>
          <LinkContainer to="/login">
            <NavItem eventKey={1}>Login</NavItem>
          </LinkContainer>
          <LinkContainer to="/signup">
            <NavItem eventKey={2}>Sign Up</NavItem>
          </LinkContainer>
        </Nav>
      )}
    </Navbar>
  );
}
