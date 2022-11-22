import React from 'react';
import logo from '../images/logo.svg';
import { Link, NavLink, BrowserRouter } from 'react-router-dom';

function Header() {
  const link = '/sign-up';
  const textLink = 'Регистрация'
  return (
    <header className="header content">
      <img
        className="header__logo"
        src={logo}
        alt="Логотип с надписью место россия"
      />
      <a href="/sign-up" className="header__link">{textLink}</a>
    </header>
  );
}
export default Header;