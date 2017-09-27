import React, { Component } from 'react';
import toSnakeCase from 'toSnakeCase';
import convertObjectKeys from 'convertObjectKeys';
import SignUpForm from 'SignUpForm';

class SignUpPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        email: "",
        password: "",
        passwordConfirmation: ""
      }
    }

    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onChange = this.onChange.bind(this)
  }

  onFormSubmit(e) {
    e.preventDefault();

    const reqBody = {
      user: {
        ...convertObjectKeys(this.state.user, toSnakeCase)
      }
    }

    fetch("auth", {
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

  getValidationState() {
    const length = this.state.value.length;
    if (length > 10) return "success";
    else if (length > 5) return "warning";
    else if (length > 0) return "error";
  }

  render() {
    return (
      <SignUpForm
        onFormSubmit={this.onFormSubmit}
        onChange={this.onChange}
        errors={this.state.errors}
        user={this.state.user}
      />
    );
  }
}

export default SignUpPage;
