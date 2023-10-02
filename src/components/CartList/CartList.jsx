// Основна функція CartList - це приймати список карток товарів cards та функцію onClickHandler, яка викликається при кліку на картку. Вона мапить кожну картку у корзині на компонент CardInCart та виводить їх всі разом у вигляді списку. propTypes та defaultProps використовуються для задання типів властивостей і значень за замовчуванням для цього компонента.

// import PropTypes from 'prop-types'; // Імпорт PropTypes для визначення типів властивостей компонента
import styles from './CartList.module.scss' // Імпорт стилів для компонента
import CardInCart from '../CardInCart/CardInCart' // Імпорт компонента `CardInCart`, який представляє одну картку товару у корзині

const CartList = ({ cards, onClickHandler }) => {
  let cardsComponents = cards.map(({ title, price, id, color, imgSrc }) => {
    return (
      <CardInCart
        key={id}
        title={title}
        price={price}
        id={id}
        color={color}
        imgSrc={imgSrc}
        onClickHandler={onClickHandler}
      />
    )
  })

  return <ul className={styles.list}>{cardsComponents}</ul>
}

// CartList.propTypes = {
//     cards: PropTypes.array, // Властивість `cards` має бути масивом карток
//     onClickHandler: PropTypes.func.isRequired, // Властивість `onClickHandler` має бути функцією та є обов'язковою
// }

CartList.defaultProps = {
  cards: [], // За замовчуванням, якщо `cards` не передано, воно буде пустим масивом
}

export default CartList
