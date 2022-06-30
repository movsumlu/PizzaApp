import { FC } from "react";
import { IPizza } from "types/interfaces";

import { useDispatch } from "react-redux";

import {
  minusPizzaToCard,
  addPizzaToCard,
  removePizzaFromCard,
} from "store/card/slice";

import { GlobalSvgSelector } from "components/GlobalSvgSelector";

import styles from "./style.module.scss";

const PizzaCardInline: FC<{ pizza: IPizza }> = ({ pizza }) => {
  const dispatch = useDispatch();

  const { id, title, price, quantity } = pizza;

  return (
    <div className={styles.cardInline}>
      <div className={styles.imageWrapper}>
        <img src={pizza.imageUrl} alt="pizzaImage" />
      </div>
      <div className={styles.description}>
        <h3>{title}</h3>
        <p>Тонкое, 22 см.</p>
      </div>
      <div className={styles.buttonsWrapper}>
        <button
          className={styles.minusButton}
          disabled={quantity === 1}
          onClick={() => dispatch(minusPizzaToCard(pizza))}
        >
          <GlobalSvgSelector type="minus_button-icon" />
        </button>
        <b>{quantity}</b>
        <button
          className={styles.addButton}
          onClick={() => dispatch(addPizzaToCard(pizza))}
        >
          <GlobalSvgSelector type="plus_button-icon" />
        </button>
      </div>
      <div className={styles.price}>
        <b>{price * quantity} ₽</b>
      </div>
      <div
        className={styles.removeButton}
        onClick={() => dispatch(removePizzaFromCard(id))}
      >
        <button>
          <GlobalSvgSelector type="remove-icon" />
        </button>
      </div>
    </div>
  );
};

export { PizzaCardInline };
