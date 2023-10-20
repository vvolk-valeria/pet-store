import React from "react";
import styles from "./Card.module.scss";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useSelector } from "react-redux";
import { selectFavorites } from "../../redux/cards/selectors";
import { StarRating } from "../StarRatings/StarRatings";
import { Link } from "react-router-dom";

const Card = ({ item }) => {
  //= const isLogged = useSelector(selectIsLoggedIn);
  const favorites = useSelector(selectFavorites);

  const handleAddOrDeleteFavorite = () => {
    // if (!isLogged) {
    //   console.log('The user must be logged in to use this functionality!');
    //   return
    // toast.warn(
    //   'The user must be logged in to use this functionality!'
    // );
    // }
    if (!favorites.find((favorite) => favorite.id === item.id)) {
      console.log("This item has been successfully added to favorites!");
      // dispatch(addToFavorite(item._id));
      // toast.success(`This item has been successfully added to favorites!`);
      return;
    }
    console.log("This item was successfully removed from favorites!");
    // dispatch(deleteFromFavorite(item._id));
    // toast.success(`This item was successfully removed from favorites!`);
    return;
  };

  return (
    <li className={styles.item}>
      <Link to={`/catalogue/products/${item.id}`}>
        <div className={styles.img_cover}>
          {item.mainImage ? (
            <img
              className={styles.itemImg}
              src={item.mainImage.filePath}
              alt={item.name}
            />
          ) : null}
        </div>
        </Link>

        <div className={styles.cardInfo}>
          <h3 className={styles.title}>{item.name}</h3>
          {item.notAvailable ? (
            <p className={styles.cardStockNot}>Out of stock</p>
          ) : (
            <p className={styles.cardStockIn}>In stock</p>
          )}

          {item.rating ? (
            <p className={styles.cardRating}>
              {StarRating(item.rating)}
              <span className={styles.cardRating_left}>
                Rating: {item.rating}
              </span>
            </p>
          ) : null}

          {item.priceWithDiscount ? (
            <div className={styles.cardPriceBox}>
              <p className={styles.cardPrice}>$ {item.priceWithDiscount}</p>{" "}
              <p className={styles.cardPriceNot}>$ {item.price}</p>
            </div>
          ) : (
            <div className={styles.cardPriceBox}>
              <p className={styles.cardPrice}>$ {item.price}</p>
            </div>
          )}

          <div className={styles.cardButtons}>
            {  item.notAvailable ? (<button
              type="button"
              className={styles.btnDisabled}  >
              Add to card
            </button>)
            :(<button
              type="button"
              className={styles.normalStyle}
            >
              Add to card
            </button>
            // {/*  onClickHandler={() => onClickHandler(id)} */}
            )}

            <button
              type="button"
              onClick={handleAddOrDeleteFavorite}
              className={styles.favouriteBox}
            >
              {!favorites.find((favorite) => favorite.id === item.id) ? (
                <AiOutlineHeart size={44} />
              ) : (
                <AiFillHeart size={44} />
              )}
            </button>
          </div>
        </div>
    </li>
  );
};

export default Card;
