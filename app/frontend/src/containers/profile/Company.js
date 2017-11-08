import React, { Component } from 'react';
import ListItems from 'ListItems';
import { Button } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import { Grid, Row, Col } from 'react-bootstrap';
import MDSpinner from 'react-md-spinner';
import Api from 'Api';
import Auth from 'Auth';
import CreateCompanyForm from 'CreateCompanyForm';

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
    .then(({data}) => {
      let company = {
        id: data.id,
        title: data.title,
        ownershipTypeId: data.ownership_type.id,
        companyTypeId: data.company_type.id,
        status: data.status,
        userStatus: '',
        is_sole: data.is_sole
      };

      this.setState({ company, spinner: false });
    })
    .catch(error => {
      console.log(error);
    });
  }

  render() {
    return (
      this.state.spinner ? (
        <Row>
          <Col md={2} mdOffset={5}>
            <MDSpinner size={70} />
          </Col>
        </Row>
      ) : (
        <Row>
          <Col xs={12} md={8}>
          <CreateCompanyForm
            userId={this.props.userId}
            handleSubmit={this.props.handleSubmit}
            company={this.state.company}
          />
          </Col>
        </Row>
      )
    );
  }
}

export default withRouter(Company);