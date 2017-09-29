import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Grid, Row, Col } from 'react-bootstrap';
import { signUpUser } from 'api';
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

    signUpUser(this.state.user)
    .then(({data, headers}) => {
      Auth.setUserTokens(headers);

      this.props.history.push("/");
    })
    .catch((error) => {
      console.log(error);
    });
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

export default withRouter(SignUpPage);
