import React from 'react';
import 'Nav.css';

export default function Nav() {
  const navItemStyle = {
    height: 66,
    lineHeight: '36px'
  };

  return (
    <nav className="Nav navbar navbar-expand-lg navbar-light">
      <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        Меню
        <i className="fa fa-bars"></i>
      </button>

      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav mx-auto">
          <li className="nav-item">
            <a className="nav-link" href="/about">О журнале</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/collegium">Ред. коллегия</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/board">Ред. совет</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/for-authors">Авторам</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/events">События и новости</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/issue-content">В номере</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
