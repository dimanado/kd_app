import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Main from '../components/Main';
import logo from '../images/logo.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Route path="/" exact component={Main} />
        <Footer />
      </div>
    );
  }
}

export default App;
