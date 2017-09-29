import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Alert } from 'react-bootstrap';
import { logoutUser } from 'api';
import Auth from 'Auth';

class Logout extends Component {
  componentWillMount() {
    logoutUser(Auth.getUserTokens())
    .then(() => {
      Auth.removeUserTokens();
      this.props.history.push('/');
    })
    .catch((error) => {
      console.log(error);
    });
  }

  render() {
    return (
      <Alert bsStyle="info">
        Logging out...
      </Alert>
    );
  }
}

export default withRouter(Logout);
