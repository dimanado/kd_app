import React, { Component } from 'react';
import { Grid, Row, Col, Button, ListGroup, ListGroupItem} from 'react-bootstrap';
import MDSpinner from "react-md-spinner";
import ProfileForm from 'ProfileForm';
import Auth from 'Auth';
import User from 'User';
import Api from 'Api';

class ProfilePage extends Component {
  constructor(props) {
    super(props);

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
              <div className="well">
                <a href="/create-company"><Button bsSize="large" block>Create company</Button></a>
                <a href="/join-to-company"><Button bsSize="large" block>Join to company</Button></a>
              </div>
            </Col>
            <Col xs={12} md={4}>
              <div>Hello, {this.state.user.email}</div>
              <ProfileForm
                profile={this.state.profile}/>
            </Col>
            <Col xs={12} md={4}>
              <p>Your companies:</p>
              <ListGroup>
                {this.state.userCompanies.map((item, index) => {
                  return (
                    <ListGroupItem key={index} className="App-hoverable">{item.title}</ListGroupItem>
                  )
                })}
              </ListGroup>
            </Col>
          </Row>
        )}
      </Grid>
    );
  }
}

export default ProfilePage;
