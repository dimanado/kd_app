import React, { Component } from 'react';
import { Grid, Row, Col} from 'react-bootstrap';
import LoginForm from 'LoginForm';

class DashboardPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Grid>
        <Row>
          <Col xs={12}>
            Hello,
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default DashboardPage;
