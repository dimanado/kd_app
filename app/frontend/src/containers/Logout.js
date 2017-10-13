import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import MDSpinner from "react-md-spinner";
import { Grid, Row, Col } from "react-bootstrap";
import Api from "Api";
import Auth from "Auth";
import User from "User";

class Logout extends Component {
  componentWillMount() {
    Api.logoutUser(Auth.getUserTokens())
      .catch(error => {
        console.log(error);
      })
      .then(() => {
        Auth.removeUserTokens();
        User.removeUserInfo();
        this.props.history.push("/");
      });
  }

  render() {
    return (
      <Grid>
        <Row>
          <Col xs={12} className="text-center">
            <MDSpinner size={70} />
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default withRouter(Logout);
