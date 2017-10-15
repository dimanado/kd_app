import React from "react";

export default function MenuItem({ componentName, linkText, href }) {
  return (
    <li className={`nav-item ${componentName}`}>
      <a className="nav-link" href={href}>
        {linkText}
      </a>
    </li>
  );
}
