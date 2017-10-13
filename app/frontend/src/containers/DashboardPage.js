import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";
import User from "User";

class DashboardPage extends Component {
  componentWillMount() {
    this.setState({
      user: User.getUserInfo()
    });
  }

  render() {
    return (
      <Grid>
        <Row>
          <Col xs={12}>Hello, {this.state.user.email}</Col>
        </Row>
      </Grid>
    );
  }
}

export default DashboardPage;
