import { FC } from "react";

import { Link, useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import { AppDispatch } from "store";
import { selectorOfCardState } from "store/card/selectors";
import { clearCard } from "store/card/slice";

import { ReturnComponent } from "components/ReturnComponent";
import { PizzaCardInline } from "components/PizzaCardInline";
import { GlobalSvgSelector } from "components/GlobalSvgSelector";

import { IPizza } from "types/interfaces";

import emptyCartImage from "assets/images/emptyCart.svg";

import styles from "./style.module.scss";

const Card: FC = () => {
  const { card, count, totalPrice } = useSelector(selectorOfCardState);

  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const onCheckoutOrder = () => {
    dispatch(clearCard());
    navigate("/PizzaApp/checkout");
  };

  if (!card.length) {
    return (
      <ReturnComponent
        title="Ой, пусто!"
        subtitle="Для того, чтобы заказать пиццу, перейди в меню."
        srcOfImage={emptyCartImage}
      />
    );
  }

  return (
    <div className={styles.cart}>
      <div className={styles.cart__top}>
        <h2 className={styles.title}>
          <GlobalSvgSelector type="basket-icon" />
          Корзина
        </h2>
        <div className={styles.buttonClear}>
          <GlobalSvgSelector type="bin-icon" />
          <span onClick={() => dispatch(clearCard())}>Очистить корзину</span>
        </div>
      </div>
      {card.map((pizza: IPizza) => (
        <PizzaCardInline key={pizza.id} pizza={pizza} />
      ))}

      <div className={styles.cart__bottom}>
        <div className={styles.details}>
          <span>
            Всего пицц: <b>{count} шт.</b>
          </span>
          <span>
            Сумма заказа: <b>{totalPrice} ₽</b>
          </span>
        </div>

        <div className={styles.buttons}>
          <Link to="/PizzaApp/" className={styles.buttonGoBack}>
            <GlobalSvgSelector type="leftArrow-icon" />
            <span>Вернуться назад</span>
          </Link>

          <span className={styles.buttonCheckout} onClick={onCheckoutOrder}>
            Оформить заказ
          </span>
        </div>
      </div>
    </div>
  );
};

export { Card };
