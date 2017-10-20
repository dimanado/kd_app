import React, { Component } from 'react';
import { Grid, Row, Col, Button } from 'react-bootstrap';
import MDSpinner from "react-md-spinner";
import ProfileForm from 'ProfileForm';
import Auth from 'Auth';
import User from 'User';
import Api from 'Api';
import CreateCompanyForm from 'CreateCompanyForm';
import SidebarLinks from 'SidebarLinks';
import CompanyCollection from 'CompanyCollection';
import { Route } from 'react-router-dom';


class ProfilePage extends Component {
  constructor(props) {
    super(props);

    this.match = props.match;
    
    this.sidebarLinks = [
      {
        path: `${this.match.url}/edit`,
        name: 'Edit Profile'
      },
      {
        path: `${this.match.url}/create-company`,
        name: 'Create Company'
      }
    ];

    this.state = {
      profile: {
        firstName: "",
        lastName: "",
        userId: 0
      },
      user: User.getUserInfo(),
      userCompanies: [],
      spinner: true
    };
  }

  componentDidMount() {
    Api.profileShow(this.state.user.id, Auth.getUserTokens())
    .then(({data}) => {
      const profile = {
        firstName: data.first_name,
        lastName: data.last_name,
        userId: this.state.user.id
      };

      this.setState({profile, spinner: false, userCompanies: data.companies});
    })
    .catch((error) => {
      console.log(error);
    });
  }

  redirectToProfile = () => {
    this.props.history.push("/profile");
  }

  render() {
    return(
      <Grid>
        { this.state.spinner ? (
          <Row>
            <Col xs={12} md={2} mdOffset={5}>
              <MDSpinner size={70} />
            </Col>
          </Row>
        ) : (
          <Row>
            <Col xs={12} md={4}>
              <SidebarLinks links={this.sidebarLinks} />
            </Col>
            <Col xs={12} md={4}>
              <div>Hello, {this.state.user.email}</div>
              <Route exact path={`${this.match.url}/edit`} component={ProfileForm} />
              <Route exact path={`${this.match.url}/create-company`} render={() => <CreateCompanyForm handleSubmit={this.redirectToProfile} />}/>
            </Col>
            <Col xs={12} md={4}>
              <CompanyCollection companies={this.state.userCompanies} />
            </Col>
          </Row>
        )}
      </Grid>
    );
  }
}

export default ProfilePage;
