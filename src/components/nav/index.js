import React from "react";
import "./index.scss";

const Nav = (
  {
    links
  }
) => {

  return (
    <nav className="nav">
      <ul>
      {
        links.map(navItem => (
          <li className="navItem" key={navItem.name}>
            <a
              href={navItem.href}
              name={navItem.alt}>
              {navItem.name}
            </a>
          </li>
        ))
      }
      </ul>
    </nav>
  )
};

export default Nav;