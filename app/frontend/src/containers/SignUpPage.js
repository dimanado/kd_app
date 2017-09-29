import React, { Component } from 'react';
import { Grid, Row, Col} from 'react-bootstrap';
import toSnakeCase from 'toSnakeCase';
import convertObjectKeys from 'convertObjectKeys';
import Auth from 'Auth';
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
    this.onChange = this.onChange.bind(this);
  }

  onFormSubmit(e) {
    e.preventDefault();

    fetch("api/auth", {
      method: "post",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(convertObjectKeys(this.state.user, toSnakeCase))
    })
    .then(({data}) => {
      const tokens = data;
      Auth.authenticateUser(tokens);

      this.context.router.replace('/');
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
      <Grid>
        <Row>
          <Col xs={12} md={4} mdOffset={4}>
            <SignUpForm
              onFormSubmit={this.onFormSubmit}
              onChange={this.onChange}
              errors={this.state.errors}
              user={this.state.user}
            />
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default SignUpPage;
