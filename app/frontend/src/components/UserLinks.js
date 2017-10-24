import React from "react";
import { Link } from "react-router-dom";
import "UserLinks.css";

export default function UserLinks() {
  return (
    <div className="UserLinks text-right">
      <Link to="/login">Войти</Link>
      <span className="separator">|</span>
      <Link to="/signup">Регистрация</Link>
    </div>
  );
}
