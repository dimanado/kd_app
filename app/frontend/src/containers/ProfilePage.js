import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import MDSpinner from 'react-md-spinner';
import ProfileForm from 'ProfileForm';
import Auth from 'Auth';
import User from 'User';
import Api from 'Api';
import ImageForm from 'ImageForm';

class ProfilePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      profile: {
        firstName: '',
        lastName: '',
        age: 0,
        sex: '',
        userId: 0,
        avatar: ''
      },
      user: User.getUserInfo(),
      spinner: true
    };
  }

  componentDidMount() {
    Api.profileShow(this.state.user.id, Auth.getUserTokens())
    .then(data => {
      const profile = {
        ...data,
        userId: this.state.user.id
      };
      this.setState({ profile, spinner: false });
    })
    .catch(error => {
      console.log(error);
    });
  }

  handleSubmit = (avatar) => {
    Api.profileUpdate(this.state.user.id, { avatar }, Auth.getUserTokens())
    .then(response => {
      alert('Data updated.');
    })
    .catch(error => {
      console.log(error);
    });
  };

  render() {
    return (
      <Grid>
        <Row>
          {this.state.spinner ? (
            <Col md={2} mdOffset={5}>
              <MDSpinner size={70} />
            </Col>
          ) : (
            <div>
              <Col xs={12} md={4} mdOffset={1}>
                <div>Hello, {this.state.user.email}</div>
                <ProfileForm profile={this.state.profile} />
              </Col>
              <Col xs={12} md={3}>
                <ImageForm
                  avatar={this.state.profile.avatar}
                  handleSubmit={this.handleSubmit}
                />
              </Col>
            </div>
          )}
        </Row>
      </Grid>
    );
  }
}

export default ProfilePage;
