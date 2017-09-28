import React, { Component } from 'react';
import LoginForm from 'LoginForm';

class LoginPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        email: "",
        password: ""
      }
    }

    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onFormSubmit(e) {
    e.preventDefault();

    const reqBody = {
      user: {
        ...this.state.user
      }
    }

    fetch("auth/sign_in", {
      method: "post",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(reqBody)
    })
    .then((data) => {
      if (data.headers.get('Authorization')) {
        this.props.onUserSignUp(this.state.user);
      }
    })
  }

  onChange(e) {
    const field = e.target.name;
    const user = this.state.user;
    user[field] = e.target.value;

    this.setState({
      user
    });
  }

  render() {
    return (
      <LoginForm
        onFormSubmit={this.onFormSubmit}
        onChange={this.onChange}
        user={this.state.user}
      />
    );
  }
}

export default LoginPage;
