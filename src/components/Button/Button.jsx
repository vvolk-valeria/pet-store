import React from 'react'
import styles from './Button.module.scss'
// import PropTypes from 'prop-types';

// Компонент кнопки, який приймає текст та функцію-обробник кліку
const Button = ({ text, onClickHandler }) => {
  return (
    // Повертаємо кнопку з текстом та обробником подій onClick
    <button className={styles.btn} onClick={() => onClickHandler()}>
      {text}
    </button>
  )
}

// PropTypes використовуються для визначення типів переданих властивостей (props).
// В даному випадку, ми вказуємо, що 'text' повинен бути рядком (string) та обов'язковим.
// 'onClickHandler' також повинен бути функцією (func), але він є необов'язковим.

// Button.propTypes = {
//     text: PropTypes.string.isRequired,
//     onClickHandler: PropTypes.func
// };

// Експортуємо компонент 'Button' для використання в інших частинах додатку.
export default Button
