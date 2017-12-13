import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import MDSpinner from 'react-md-spinner';
import Api from 'Api';
import Auth from 'Auth';
import CompanyForm from 'CompanyForm';

class Company extends Component {
  constructor(props) {
    super(props);

    this.state = {
      company: {},
      spinner: true
    };
  }

  componentDidMount() {
    Api.showCompany(this.props.companyId, Auth.getUserTokens())
    .then(data => {
      const company = Object.assign({}, data, {
        ownershipTypeId: data.ownershipType.id,
        companyTypeId: data.companyType.id,
        userStatus: data.userStatus
      });

      this.setState({ company, spinner: false });
    })
    .catch(error => {
      console.log(error);
    });
  }

  render() {
    return this.state.spinner ? (
      <Row>
        <Col md={2} mdOffset={5}>
          <MDSpinner size={70} />
        </Col>
      </Row>
    ) : (
      <Row>
        <Col xs={12} md={8}>
          <CompanyForm
            userId={this.props.userId}
            handleSubmit={this.props.handleSubmit}
            company={this.state.company}
          />
        </Col>
      </Row>
    );
  }
}

export default withRouter(Company);
