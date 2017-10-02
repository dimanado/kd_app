import React, { Component } from 'react';
import { Grid, Row, Col} from 'react-bootstrap';
import ProfileForm from 'ProfileForm';
import axios from 'axios';
import Auth from 'Auth';
import User from 'User';
import MDSpinner from "react-md-spinner";

class ProfilePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      profile: {
        firstName: "",
        lastName: ""
      },
      user: User.getUserInfo(),
      spinner: true
    };

    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    const that = this;
    axios({ method: 'get', url: 'api/profiles/' + this.state.user.id,
      headers: Auth.getUserTokens()
    })
      .then(function (response) {
        const profile = {
          firstName: response.data.first_name,
          lastName: response.data.last_name
        };
        that.setState({profile, spinner: false});
      })
      .catch(function (error) {
      });
  }

  onFormSubmit(e) {
    e.preventDefault();

    axios({ method: 'put', url: 'api/profiles/' + this.state.user.id,
            headers: Auth.getUserTokens(),
            data: { profile: {first_name: this.state.profile.firstName,
                    last_name: this.state.profile.lastName }}
    })
      .then(function (response) {
        alert('Data updated.');
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  onChange(e) {
    const field = e.target.name;
    const profile = this.state.profile;
    profile[field] = e.target.value;

    this.setState({
      profile
    });
  }

  render() {
    if(this.state.spinner)
      return(
        <Grid>
          <Row>
            <Col xs={12} md={2} mdOffset={5}>
              <MDSpinner size={70} />
            </Col>
          </Row>
        </Grid>
      );
    else
      return (
        <Grid>
          <Row>
            <Col xs={12} md={4} mdOffset={1}>
              <div>Hello, {this.state.user.email}</div>
              <ProfileForm
                onFormSubmit={this.onFormSubmit}
                onChange={this.onChange}
                user={this.state.profile}
              />
            </Col>
          </Row>
        </Grid>
      );
  }
}

export default ProfilePage;