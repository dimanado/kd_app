import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import Auth from 'Auth';
import geraldic from 'geraldic.png';
import 'Header.css';

export default function Header() {
  const navItemStyle = {
    height: 66,
    lineHeight: '36px'
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
        <div className="container">
          <a className="navbar-brand" href="/">Предварительное <br /> Расследование</a>
          <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            Menu
            <i className="fa fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item" style={navItemStyle}>
                <a className="nav-link" href="/about">О журнале</a>
              </li>
              <li className="nav-item" style={navItemStyle}>
                <a className="nav-link" href="/issue-content">В номере</a>
              </li>
              <li className="nav-item" style={navItemStyle}>
                <a className="nav-link" href="/for-authors">Авторам</a>
              </li>
              <li className="nav-item" style={navItemStyle}>
                <a className="nav-link" href="/policy">Редакционная политика</a>
              </li>
              <li className="nav-item" style={{
                flexBasis: 250
              }}>
                <a className="nav-link" href="/editorial-office">Редакционная коллегия и Редакционный совет</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <header className="masthead">
        <div className="line-bg">
          <div className="ornament-bg">
            <div className="container">
              <div className="row">
                <div className="col-lg-8 col-md-10 mx-auto">
                  <img className="site-logo" src={geraldic} alt="Следственный комитет Республики Беларусь" title="Следственный комитет Республики Беларусь" />
                  <div className="site-heading">
                    <h1>Предварительное расследование</h1>
                    <span className="subheading">Журнал Cледственного Комитета РБ</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
