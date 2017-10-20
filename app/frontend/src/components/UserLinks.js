import React from "react";
import "UserLinks.css";

export default function UserLinks() {
  return (
    <div className="UserLinks text-right">
      <a href="/login">Войти</a>
      <span className="separator">|</span>
      <a href="/signup">Регистрация</a>
    </div>
  );
}
