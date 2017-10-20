import React from "react";
import "Footer.css";

export default function Footer() {
  return (
    <footer className="Footer">
      <hr />
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-10 mx-auto">
            <p className="copyright">
              &copy; 2017, Следственный комитет Республики Беларусь. Все права
              защищены
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
