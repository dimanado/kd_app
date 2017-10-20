import React, { Component } from 'react';
import { Grid, Row, Col, Button, ListGroup, ListGroupItem} from 'react-bootstrap';
import MDSpinner from "react-md-spinner";
import ProfileForm from 'ProfileForm';
import Auth from 'Auth';
import User from 'User';
import Api from 'Api';
import CreateCompanyForm from 'CreateCompanyForm';
import { Route } from 'react-router-dom';


class ProfilePage extends Component {
  constructor(props) {
    super(props);

    this.match = props.match;

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
                <a href={`${this.match.url}/edit`}><Button bsSize="large" block>Edit profile</Button></a>
                <a href={`${this.match.url}/create-company`}><Button bsSize="large" block>Create company</Button></a>
                <a href="/join-to-company"><Button bsSize="large" block>Join to company</Button></a>
              </div>
            </Col>
            <Col xs={12} md={4}>
              <div>Hello, {this.state.user.email}</div>
              <Route exact path={`${this.match.url}/edit`} component={ProfileForm} />
              <Route exact path={`${this.match.url}/create-company`} component={CreateCompanyForm}/>
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
