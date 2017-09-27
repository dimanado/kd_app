import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { Grid, Row, Col } from 'react-bootstrap';

import HomePage from 'HomePage';
import SignUpPage from 'SignUpPage';

import logo from 'logo.png';
import 'App.css';

class App extends Component {
  render() {
    return (
      <Grid className="App">
        <Row className="App-header">
          <Col xs={12} md={8}>
            <Link to="/">
              <img src={logo} className="App-logo" alt="logo" />
            </Link>
            <h2>Kemlivy Damavik</h2>
            <Link to="/">Home</Link>
            <Link to="/signup">Sign Up</Link>
          </Col>
        </Row>



        <Route exact path="/" component={HomePage} />
        <Route path="/signup" component={SignUpPage} />
      </Grid>
    );
  }
}

export default App;
