import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Grid, Row, Col } from 'react-bootstrap';
import CreateCompanyForm from 'CreateCompanyForm';

class CreateCompanyPage extends Component {
  handleSubmit = () => {
    this.props.history.push("/profile");
  }

  render() {
    return (
      <Grid>
        <Row>
          <Col xs={12} md={4} mdOffset={4}>
            <p><a href="/profile"><b>Back to profile</b></a></p>
            <CreateCompanyForm handleSubmit={this.handleSubmit} />
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default withRouter(CreateCompanyPage);
