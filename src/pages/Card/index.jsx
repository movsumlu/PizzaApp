import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import { selectorOfCardState } from "store/card/selectors";
import { clearCard } from "store/card/slice";

import { ReturnComponent } from "components/ReturnComponent";
import { PizzaCardInline } from "components/PizzaCardInline";
import { GlobalSvgSelector } from "components/GlobalSvgSelector";

import emptyCartImage from "assets/images/emptyCart.svg";

import s from "./style.module.scss";

const Card = () => {
  const { card, count, totalPrice } = useSelector(selectorOfCardState);

  const dispatch = useDispatch();

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
    <div className={s.cart}>
      <div className={s.cart__top}>
        <h2 className={s.title}>
          <GlobalSvgSelector type="basket-icon" />
          Корзина
        </h2>
        <div className={s.buttonClear}>
          <GlobalSvgSelector type="bin-icon" />
          <span onClick={() => dispatch(clearCard())}>Очистить корзину</span>
        </div>
      </div>
      {card.map((pizza) => (
        <PizzaCardInline key={pizza.id} pizza={pizza} />
      ))}

      <div className={s.cart__bottom}>
        <div className={s.details}>
          <span>
            Всего пицц: <b>{count} шт.</b>
          </span>
          <span>
            Сумма заказа: <b>{totalPrice} ₽</b>
          </span>
        </div>

        <div className={s.buttons}>
          <Link to="/PizzaApp/" className={s.buttonGoBack}>
            <GlobalSvgSelector type="leftArrow-icon" />
            <span>Вернуться назад</span>
          </Link>

          <Link to="/PizzaApp/" className={s.buttonCheckout}>
            <span>Оплатить сейчас</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export { Card };
