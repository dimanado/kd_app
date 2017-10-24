import React from "react";
import { Link } from "react-router-dom";
import "UserInfo.css";

export default function UserInfo() {
  return (
    <div className="UserInfo text-right">
      <Link to="/">Иван Петров</Link>
    </div>
  );
}
