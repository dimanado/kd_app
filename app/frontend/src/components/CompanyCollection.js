import React from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

export default function CompanyCollection({ id, companies, ...props }) {
  return (
    <ListGroup>
      <p>Your companies:</p>
      {companies.map((item, index) => {
        return (
          <ListGroupItem key={index} className="App-hoverable">{item.title}</ListGroupItem>
        )
      })}
    </ListGroup>
  );
}
