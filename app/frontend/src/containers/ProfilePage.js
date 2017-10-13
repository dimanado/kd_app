import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";
import MDSpinner from "react-md-spinner";
import ProfileForm from "ProfileForm";
import Auth from "Auth";
import User from "User";
import Api from "Api";

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
  }

  componentDidMount() {
    Api.profileShow(this.state.user.id, Auth.getUserTokens())
      .then(({ data }) => {
        const profile = {
          firstName: data.first_name,
          lastName: data.last_name
        };
        this.setState({ profile, spinner: false });
      })
      .catch(error => {
        console.log(error);
      });
  }

  onFormSubmit(e) {
    e.preventDefault();

    Api.profileUpdate(
      this.state.user.id,
      this.state.profile,
      Auth.getUserTokens()
    )
      .then(response => {
        alert("Data updated.");
      })
      .catch(error => {
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
    return (
      <Grid>
        <Row>
          {this.state.spinner ? (
            <Col xs={12} md={2} mdOffset={5}>
              <MDSpinner size={70} />
            </Col>
          ) : (
            <Col xs={12} md={4} mdOffset={1}>
              <div>Hello, {this.state.user.email}</div>
              <ProfileForm
                onFormSubmit={this.onFormSubmit.bind(this)}
                onChange={this.onChange.bind(this)}
                user={this.state.profile}
              />
            </Col>
          )}
        </Row>
      </Grid>
    );
  }
}

export default ProfilePage;
