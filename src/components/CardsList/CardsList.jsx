import React from 'react' // Імпортуємо бібліотеку React
import Card from '../Card/Card' // Імпортуємо компонент Card
// import PropTypes from 'prop-types'; // Імпортуємо PropTypes для валідації властивостей компонента
import styles from './CardsList.module.scss' // Імпортуємо стилі для компонента

const CardsList = ({
  cards,
  onClickHandler,
  changeFavouriteHandler,
  favouritesCardsArr,
}) => {
  // Створюємо компоненти Card для кожного об'єкта в масиві cards
  const cardsComponents = cards.map(({ title, price, id, color, imgSrc }) => {
    return (
      <Card
        key={id}
        title={title}
        price={price}
        id={id}
        color={color}
        imgSrc={imgSrc}
        isFavourite={favouritesCardsArr.includes(id)}
        onClickHandler={onClickHandler}
        changeFavouriteHandler={changeFavouriteHandler}
      />
    )
  })

  return (
    // Відображаємо список компонентів Card у вигляді нумерованого списку
    <ul className={styles.list}>{cardsComponents}</ul>
  )
}

// CardsList.propTypes = {
//     cards: PropTypes.array.isRequired, // Властивість "cards" повинна бути масивом і обов'язковою
//     onClickHandler: PropTypes.func.isRequired, // Властивість "onClickHandler" повинна бути функцією і обов'язковою
//     changeFavouriteHandler: PropTypes.func.isRequired, // Властивість "changeFavouriteHandler" повинна бути функцією і обов'язковою
//     favouritesCardsArr: PropTypes.array // Властивість "favouritesCardsArr" є необов'язковою і також повинна бути масивом
// };

CardsList.defaultProps = {
  cards: [], // За замовчуванням, якщо властивість "cards" не передана, вона буде пустим масивом
  favouritesCardsArr: [], // За замовчуванням, якщо властивість "favouritesCardsArr" не передана, вона також буде пустим масивом
}

export default CardsList // Експортуємо компонент CardsList
