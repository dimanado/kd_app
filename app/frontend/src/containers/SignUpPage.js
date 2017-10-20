import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import SignUpForm from "SignUpForm";

class SignUpPage extends Component {
  handleSubmit = () => {
    this.props.history.push("/");
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-4 mx-auto">
            <SignUpForm handleSubmit={this.handleSubmit} />
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(SignUpPage);
