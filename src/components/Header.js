import React from 'react';
import logo from '../images/logo.svg';
import { Link, NavLink, BrowserRouter } from 'react-router-dom';

function Header({ onLogged }) {
  const link = '/sign-up';
  const textLink = 'Регистрация';
  const login = 'shiYar@ya.ru';


  return (
    <header className="header content">
      <img
        className="header__logo"
        src={logo}
        alt="Логотип с надписью место россия"
      />
      <div className='header__box'>
        <span className='header__email'>{onLogged && login}</span>
        <Link to='/sign-in' className={`header__link ${onLogged ? 'header__link-authorization' : ''}`}>{onLogged ? 'Выход' : textLink}</Link>
      </div>
    </header>
  );
}
export default Header;