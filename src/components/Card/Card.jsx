import React from 'react'
// import PropTypes from 'prop-types'
import styles from './Card.module.scss'
import FavouriteIcon from './FavouriteIcon'
import Button from '../Button/Button'
const NOIMGSRC =
  'https://e7.pngegg.com/pngimages/829/733/png-clipart-logo-brand-product-trademark-font-not-found-logo-brand.png'

const Card = ({
  title,
  price,
  id,
  color,
  available,
  rating,
  imgSrc,
  onClickHandler,
  changeFavouriteHandler,
  isFavourite,
}) => {
  const isFavouriteClass = isFavourite ? styles.isFavourite : ''
  return (
    <li className={styles.item}>
      <img
        className={styles.itemImg}
        src={imgSrc ? imgSrc : NOIMGSRC}
        alt="eat for your pets"
      />
      <div className={styles.cardInfo}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.cardStock}>
          <span>In stock{available}</span>
        </p>
        <p className={styles.cardRating}>Rating: {rating}</p>
        <p className={styles.cardPrice}>$ {price}</p>
        <div className={styles.cardButtons}>
          <Button
            className={styles.normalStyle}
            text="Add to card"
            onClickHandler={() => onClickHandler(id)}
          />
          <button
            onClick={() => {
              changeFavouriteHandler(id)
            }}
            className={styles.favouriteBox}
          >
            <FavouriteIcon
              classes={`${styles.favouriteIcon} ${isFavouriteClass}`}
            />
          </button>
        </div>
      </div>
    </li>
  )
}

// Card.propTypes = {
//   title: PropTypes.string.isRequired,
//   price: PropTypes.number.isRequired,
//   id: PropTypes.number.isRequired,
//   color: PropTypes.string.isRequired,
//   imgSrc: PropTypes.string,
//   onClickHandler: PropTypes.func.isRequired,
//   changeFavouriteHandler: PropTypes.func.isRequired,
//   isFavourite: PropTypes.bool,
// }

Card.defaultProps = {
  imgSrc: '',
  isFavourite: false,
}
export default Card
