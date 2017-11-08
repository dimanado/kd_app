import React, { Component } from 'react';
import ListItems from 'ListItems';
import { Button } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';

class Companies extends Component {

  onCompanyClick = (company) => {
    this.props.history.push(`/profile/company/${company.id}`);
  };

  onCreateClick = () => {
    this.props.history.push(`/profile/company`);
  };

  render() {
    return (
      <div>
      {this.props.companies.length > 0 && (
        <ListItems
          onItemClick={this.onCompanyClick}
          items={this.props.companies}
          listTitle="Your companies"
        />
      )}
        <Button bsSize="large" block onClick={this.onCreateClick}>
          {'Create'}
        </Button>
      </div>
    );
  }
}

export default withRouter(Companies);