import React from 'react';
import { Link } from 'react-router-dom';

function Register() {
  return (
    <div className="authorization">
      <div className="authorization__container">
        <h3 className="authorization__title">Регистрация</h3>
        <form className='authorization__form'
    /*
      onSubmit={onSubmit}
      className={`popup__form popup__form_${name} `}
      name={name}
      noValidate
      */ >
          <label className="authorization__label">
            <input
              className="authorization__input"
              placeholder="Email"
            /*onChange={handleNameProfile}
            value={nameProfile || ''}
            name="name"
            type="text"
            id="username"
            minLength="2"
            maxLength="40"
            placeholder="Имя"
            className="popup__input popup__input_type_name"
            required*/
            />
            <span className="username-input-error popup__input-error-name"></span>
          </label>

          <label className="authorization__label authorization__label-password">
            <input
              className="authorization__input"
              placeholder="Пароль"
            /*onChange={handleDescription}
            value={description || ''}
            name="about"
            type="text"
            id="biography"
            minLength="2"
            maxLength="200"
            placeholder="Работа"
            className="popup__input popup__input_type_job"
            required
            */
            />
            <span className="biography-input-error popup__input-error-job"></span>
          </label>

          <button className="authorization__save-button"
            // className={`popup__save-button popup__save-button_${name}`}
            type="submit"
            aria-label="Кнопка сохранить"
          >Зарегистрироваться</button>
          <span className='authorization__span'>Уже зарегистрированы? <a className='authorization__link' href='/sign-in'>Войти</a></span>
        </form>
      </div>
    </div>
  )
}
export default Register;