import React from 'react';
import { Navbar } from 'react-bootstrap';

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-10 mx-auto">
            <ul className="list-inline text-center">
              <li className="list-inline-item">
                <a href="#">
                  <span className="fa-stack fa-lg">
                    <i className="fa fa-circle fa-stack-2x"></i>
                    <i className="fa fa-vk fa-stack-1x fa-inverse"></i>
                  </span>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#">
                  <span className="fa-stack fa-lg">
                    <i className="fa fa-circle fa-stack-2x"></i>
                    <i className="fa fa-twitter fa-stack-1x fa-inverse"></i>
                  </span>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#">
                  <span className="fa-stack fa-lg">
                    <i className="fa fa-circle fa-stack-2x"></i>
                    <i className="fa fa-facebook fa-stack-1x fa-inverse"></i>
                  </span>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#">
                  <span className="fa-stack fa-lg">
                    <i className="fa fa-circle fa-stack-2x"></i>
                    <i className="fa fa-odnoklassniki fa-stack-1x fa-inverse"></i>
                  </span>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#">
                  <span className="fa-stack fa-lg">
                    <i className="fa fa-circle fa-stack-2x"></i>
                    <i className="fa fa-youtube-play fa-stack-1x fa-inverse"></i>
                  </span>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#">
                  <span className="fa-stack fa-lg">
                    <i className="fa fa-circle fa-stack-2x"></i>
                    <i className="fa fa-instagram fa-stack-1x fa-inverse"></i>
                  </span>
                </a>
              </li>
            </ul>
            <p className="copyright text-muted">&copy; 2014-2017, Следственный комитет Республики Беларусь. Все права защищены</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
