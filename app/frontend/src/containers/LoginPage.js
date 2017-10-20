import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import LoginForm from "LoginForm";

class LoginPage extends Component {
  handleSubmit = () => {
    this.props.history.push("/");
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-4 mx-auto">
            <LoginForm handleSubmit={this.handleSubmit} />
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(LoginPage);
