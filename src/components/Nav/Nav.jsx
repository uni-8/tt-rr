import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.scss';

export const Nav = () => {
  return (
    <nav className="Nav">
      <ul className="Nav__list">
        <li>
          <NavLink
            to="/"
            exact
            className="Nav__link"
            activeClassName="Nav__link--active"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className="Nav__link"
            activeClassName="Nav__link--active"
          >
            About us
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}
