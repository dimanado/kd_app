import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Table } from 'react-bootstrap';
import MDSpinner from "react-md-spinner";
import Auth from 'Auth';
import User from 'User';
import Api from 'Api';
import CreateCompanyForm from 'CreateCompanyForm';

class CompanyPage extends Component {
  constructor(props) {
    super(props);

    console.log(props);

    this.match = props.match;

    this.state = {
      company: props.company,
      user: User.getUserInfo(),
      spinner: true
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.company) {
      this.setState({company: nextProps.company});
    }
  }

  render() {
    return (
      <Table responsive>
       <tbody>
         <tr>
           <th>Title</th>
           <th>{this.state.company.title}</th>
         </tr>
       </tbody>
       <tbody>
         <tr>
           <td>Status</td>
           <td>{this.state.company.status}</td>
         </tr>
         <tr>
           <td>Company Type</td>
           <td>{this.state.company.companyType.name}</td>
         </tr>
         <tr>
           <td>Ownership Type</td>
           <td>{this.state.company.ownershipType.name}</td>
         </tr>
       </tbody>
     </Table>
    )
  }
}


export default CompanyPage;
