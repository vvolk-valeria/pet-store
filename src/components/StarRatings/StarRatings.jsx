import css from "./StarRatings.module.scss";
import { useState } from "react";
import { AiFillStar } from "react-icons/ai";

export const StarRate = () => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  return (
    <>
      {[...Array(5)].map((_, index) => {
        const currentRate = index + 1;
        return (
          <label
            key={index}
            onMouseEnter={() => {
              setHover(currentRate);
            }}
            onMouseLeave={() => {
              setHover(0);
            }}
          >
            <input
              type="radio"
              name="rate"
              value={currentRate}
              onClick={() => setRating(currentRate)}
            />
            <AiFillStar
              size={16}
              color={currentRate <= (hover || rating) ? "red" : "grey"}
            />
          </label>
        );
      })}
    </>
  );
};


export const StarRating = (n) => {
  return (
    <>
      {[...Array(n)].map((_, index) => {
        return (
          <label key={index} >
            <AiFillStar size={16} className={css.icon}/>
          </label>
        );
      })}
    </>
  );
};

