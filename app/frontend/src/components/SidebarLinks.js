import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function SidebarLinks({ id, links, ...props }) {
  return (
    <div className="well">
      {links.map((link, index) => {
        return (
          <Link to={link.path} key={index}>
            <Button bsSize="large" block>
              {link.name}
            </Button>
          </Link>
        );
      })}
    </div>
  );
}
