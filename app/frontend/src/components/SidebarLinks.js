import React from 'react';
import { Button } from 'react-bootstrap';

export default function SidebarLinks({ id, links, ...props }) {
  return (
    <div className="well">
      {links.map((link, index) => { return (<a href={link.path} key={index}><Button bsSize="large" block>{link.name}</Button></a>) })}
    </div>
  );
}
