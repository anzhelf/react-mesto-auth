import React from 'react';

function InfoTooltip({ name, isOpen, onClose, title }) {
  return (
    <div className={`popup popup_type_${name} ${isOpen ? 'popup_opened' : ''}`}>
      <div className={`popup__box popup__container popup__container_${name} `}>
        <button
          className="popup__close-icon"
          aria-label="Кнопка закрыть"
          onClick={onClose}>
        </button>
        <div className="popup__content">
          <h3 className="popup__title">{title}</h3>
        </div>
      </div>
    </div >
  )
}
export default InfoTooltip;