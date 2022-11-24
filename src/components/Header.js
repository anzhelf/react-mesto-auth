import React, { useState, useEffect } from 'react';
import logo from '../images/logo.svg';
import { Link, useHistory } from 'react-router-dom';

function Header({ onLogged }) {
  const history = useHistory();
  const email = localStorage.getItem('email');

  const [textLink, setTextLink] = useState('Test');

  useEffect(() => {
    onClickTextLink();
  }, [])


  function onClickTextLink() {
    const isDomain = window.location.pathname;
    if (isDomain === '/sign-up') {
      setTextLink('Регистрация');
    }
    else {
      setTextLink('Войти');
    }
  };

  function signOut() {
    localStorage.removeItem('token');
    history.push('/login');
  }
  function onClickLink() {
    const isDomain = window.location.pathname;
    let link;
    if (isDomain === '/sign-in') {
      link = '/sign-up';
    }
    else {
      link = '/sign-in';
    }
    return link;
  }

  return (
    <header className="header content">
      <img
        className="header__logo"
        src={logo}
        alt="Логотип с надписью место россия"
      />
      <div className='header__box'>
        <span className='header__email'>{onLogged && email}</span>
        <Link
          to={onClickLink}
          onClick={onLogged ? signOut : onClickTextLink}
          className={
            `header__link ${onLogged ?
              'header__link-authorization'
              : ''}`}>{onLogged ? 'Выйти' : textLink}</Link>
      </div>
    </header>
  );
}
export default Header;