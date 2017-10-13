import React from "react";
import "Footer.css";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-10 mx-auto">
            <p className="copyright text-muted">
              &copy; 2014-2017, Следственный комитет Республики Беларусь. Все
              права защищены
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
