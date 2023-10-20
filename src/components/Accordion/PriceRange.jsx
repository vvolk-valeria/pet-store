import css from "./Accordion.module.scss";
import { useState } from "react";
import ReactSlider from "react-slider";

const MIN = 0;
const MAX = 12000;

export const PriceRange = () => {
  const [prices, setPrices] = useState([MIN, MAX]);

  const handleSubmit = () => {
    console.log("prices", prices);
  };

  return (
    <>
      <ReactSlider
        className={css.slider}
        ariaLabel={["Lower thumb", "Upper thumb"]}
        value={prices}
        min={MIN}
        max={MAX}
        onChange={setPrices}
      />

      <div className={css.slider_box}>
        <ul className={css.slider_input_box}>
          <li className={css.slider_item}>
            <input
              readOnly
              type="text"
              value={prices[0]}
              className={css.slider_input}
            />
          </li>

          <li className={css.slider_item}>
            <input
              readOnly
              type="text"
              value={prices[1]}
              className={css.slider_input}
            />
          </li>
        </ul>
        <button type="button" className={css.slider_btn} onClick={handleSubmit}>
          OK
        </button>
      </div>
    </>
  );
};
