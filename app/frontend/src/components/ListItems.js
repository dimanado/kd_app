import React from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

export default function ListItems({ items, onItemClick, listTitle, ...props }) {
  return (
    <div>
      <h3>{listTitle}</h3>
      <ListGroup>
        {items.map((item, index) => {
          return (
            <ListGroupItem onClick={onItemClick.bind(this, item)} key={index} className="App-hoverable">{item.title}</ListGroupItem>
          )
        })}
      </ListGroup>
    </div>
  );
}
