import React, { Component } from "react";
import { Route } from "react-router-dom";
import routes from "routes";
import Header from "Header";
import Footer from "Footer";
import SocialIcons from "SocialIcons";
import SearchForm from "SearchForm";
import UserInfo from "UserInfo";
import "App.css";

class App extends Component {
  render() {
    return (
      <div className="PIApp">
        <Header>
          <SocialIcons large className="d-flex justify-content-between" />
          <SearchForm />
          <UserInfo />
        </Header>

        {routes.map((route, i) => {
          console.log(route);
          return <Route {...route} key={i} />;
        })}

        <Footer />
      </div>
    );
  }
}

export default App;
