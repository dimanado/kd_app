import React, { Component } from 'react';
import { Grid, Row, Col} from 'react-bootstrap';
import Auth from 'Auth';
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

    fetch("api/auth/sign_in", {
      method: "post",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(this.state.user)
    })
    .then(({data}) => {
      const tokens = data;
      Auth.authenticateUser(tokens);

      this.context.router.replace('/');
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
      <Grid>
        <Row>
          <Col xs={12} md={4} mdOffset={4}>
            <LoginForm
              onFormSubmit={this.onFormSubmit}
              onChange={this.onChange}
              user={this.state.user}
            />
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default LoginPage;
