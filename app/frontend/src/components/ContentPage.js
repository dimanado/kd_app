import React from "react";
import "ContentPage.css";

export default function ContentPage({ pageTitle, aside, children }) {
  return (
    <div className="ContentPage container">
      <div className="row">
        <div className="col-lg-8 mr-auto">
          <h2>{pageTitle}</h2>
          <br />
          <div className="ContentPage-content">{children}</div>
        </div>
        <div className="col-lg-4">{aside}</div>
      </div>
    </div>
  );
}
