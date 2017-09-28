import React, { Component } from 'react';
import logo from 'logo.png';

class HomePage extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Kemlivy Damavik</h2>
        </div>
      </div>
    );
  }
}

export default HomePage;
