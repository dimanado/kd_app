import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import routes from 'routes';
import Header from 'Header';
import Footer from 'Footer';
import SocialIcons from 'SocialIcons';
import SearchForm from 'SearchForm';
import 'App.css';

class App extends Component {
  render() {
    return (
      <div className="PIApp">
        <Header>
          <SocialIcons large className="d-flex justify-content-between" />
          <SearchForm />
        </Header>

        { routes.map((route, i) => <Route {...route} key={i} />) }

        <hr />

        <Footer />
      </div>
    );
  }
}

export default App;
