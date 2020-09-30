import React from 'react';
import { Nav } from '../Nav';
import logo from '../../img/logo.svg'
import './Header.scss';

export const Header = () => {
  return (
    <header className="Header">
      <img src={logo} className="Header__logo" alt="logo" />

      <Nav />
    </header>
  );
}
