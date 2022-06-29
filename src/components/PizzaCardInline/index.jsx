import { useDispatch } from "react-redux";

import {
  minusPizzaToCard,
  addPizzaToCard,
  removePizzaFromCard,
} from "store/card/slice";

import { GlobalSvgSelector } from "components/GlobalSvgSelector";

import s from "./style.module.scss";

const PizzaCardInline = ({ pizza }) => {
  const dispatch = useDispatch();

  const { id, title, price, quantity } = pizza;

  return (
    <div className={s.cardInline}>
      <div className={s.imageWrapper}>
        <img src={pizza.imageUrl} alt="pizzaImage" />
      </div>
      <div className={s.description}>
        <h3>{title}</h3>
        <p>Тонкое, 22 см.</p>
      </div>
      <div className={s.buttonsWrapper}>
        <button
          className={s.minusButton}
          disabled={quantity === 1}
          onClick={() => dispatch(minusPizzaToCard(pizza))}
        >
          <GlobalSvgSelector type="minus_button-icon" />
        </button>
        <b>{quantity}</b>
        <button
          className={s.addButton}
          onClick={() => dispatch(addPizzaToCard(pizza))}
        >
          <GlobalSvgSelector type="plus_button-icon" />
        </button>
      </div>
      <div className={s.price}>
        <b>{price * quantity} ₽</b>
      </div>
      <div
        className={s.removeButton}
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
