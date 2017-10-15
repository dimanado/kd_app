import React from "react";

export default function ContentPage({ pageTitle, aside, children }) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-8 mr-auto">
          <h2>{pageTitle}</h2>
          <br />
          {children}
        </div>
        <div className="col-lg-4">{aside}</div>
      </div>
    </div>
  );
}
