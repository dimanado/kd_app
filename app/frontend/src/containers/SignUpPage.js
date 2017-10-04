import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Grid, Row, Col } from 'react-bootstrap';
import SignUpForm from 'SignUpForm';

class SignUpPage extends Component {
  handleSubmit = () => {
    this.props.history.push("/");
  }

  render() {
    return (
      <Grid>
        <Row>
          <Col xs={12} md={4} mdOffset={4}>
            <SignUpForm handleSubmit={this.handleSubmit} />
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default withRouter(SignUpPage);
