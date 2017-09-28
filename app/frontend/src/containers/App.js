import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import routes from 'routes';
import Header from 'Header';
import Footer from 'Footer';
import 'App.css';

class App extends Component {
  render() {
    const routesList = routes.childRoutes.map((route, i) => {
      return route.path === '/' ? <Route path={route.path} exact component={route.component} key={i} /> :
                                  <Route path={route.path} component={route.component} key={i} />;
    });

    return (
      <div>
        <Header />
        {routesList}
        <Footer />
      </div>
    );
  }
}

export default App;
