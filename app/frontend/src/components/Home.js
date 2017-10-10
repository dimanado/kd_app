import React from 'react';
import Nav from 'Nav';
import Header from 'Header';
import Committees from 'Committees';

export default function Home() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <Nav />
        </div>

        <div className="col-12">
          <Header reverse hideLogo locale="en">
            <Committees />
          </Header>
        </div>
      </div>
    </div>
  );
}
