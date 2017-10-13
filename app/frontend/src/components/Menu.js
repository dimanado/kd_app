import React from "react";
import "Menu.css";

export default function Menu() {
  return (
    <nav className="Menu navbar navbar-expand-lg navbar-light">
      <button
        className="navbar-toggler navbar-toggler-right"
        type="button"
        data-toggle="collapse"
        data-target="#navbarResponsive"
        aria-controls="navbarResponsive"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        Меню
        <i className="fa fa-bars" />
      </button>

      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav mx-auto">
          <li className="nav-item About">
            <a className="nav-link" href="/about">
              О журнале
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/collegium">
              Ред. коллегия
            </a>
          </li>
          <li className="nav-item Board">
            <a className="nav-link" href="/board">
              Ред. совет
            </a>
          </li>
          <li className="nav-item ForAuthors">
            <a className="nav-link" href="/for-authors">
              Авторам
            </a>
          </li>
          <li className="nav-item EventsAndNews">
            <a className="nav-link" href="/events">
              События и новости
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/issue-content">
              В номере
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
