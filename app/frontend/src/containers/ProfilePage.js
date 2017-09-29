import React, { Component } from 'react';
import { Grid, Row, Col} from 'react-bootstrap';
import ProfileForm from 'ProfileForm';
import axios from 'axios';

class ProfilePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        firstName: "",
        lastName: ""
      }
    };

    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    const that = this;
    axios({ method: 'get', url: 'api/profiles/1',
      headers: {"Content-Type": "application/json"}
    })
      .then(function (response) {
        const user = {
          firstName: response.data.first_name,
          lastName: response.data.last_name
        };
        that.setState({user});
      })
      .catch(function (error) {
      });

  }

  onFormSubmit(e) {
    e.preventDefault();

    axios({ method: 'put', url: 'api/profiles/1',
            headers: {"Content-Type": "application/json"},
            data: { profile: {first_name: this.state.user.firstName,
                    last_name: this.state.user.lastName }}
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  onChange(e) {
    const field = e.target.name;
    const user = this.state.user;
    user[field] = e.target.value;

    this.setState({
      user
    });
  }

  render() {
    return (
      <Grid>
        <Row>
          <Col xs={12}>
            <ProfileForm
              onFormSubmit={this.onFormSubmit}
              onChange={this.onChange}
              user={this.state.user}
            />
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default ProfilePage;