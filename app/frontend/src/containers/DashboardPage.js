import React, { Component } from 'react';
import { Grid, Row, Col} from 'react-bootstrap';

class DashboardPage extends Component {
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
