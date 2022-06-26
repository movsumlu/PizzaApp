import { Link } from "react-router-dom";

import { useSelector } from "react-redux";
import { selectorOfCardState } from "../../store/card/selectors";

import { GlobalSvgSelector } from "../GlobalSvgSelector";

import pizzaLogo from "../../assets/images/pizzaLogo.svg";
import s from "./style.module.scss";

const Header = () => {
  const { count, totalPrice } = useSelector(selectorOfCardState);

  return (
    <div className={s.header}>
      <Link to="/PizzaApp/">
        <div className={s.header__leftside}>
          <img
            className={s.header__logo}
            width="40"
            src={pizzaLogo}
            alt="pizzaLogo"
          />
          <div>
            <h1 className={s.header__title}>Pizza App</h1>
            <p className={s.header__subtitle}>доставка пиццы 24/7</p>
          </div>
        </div>
      </Link>

      <Link to="/PizzaApp/card">
        <div className={s.header__rightside}>
          <div className={s.header__buttonWrapper}>
            {totalPrice ? (
              <>
                <span className={s.price}>{totalPrice} ₽</span>
                <div className={s.delimiter} />
              </>
            ) : (
              ""
            )}
            <GlobalSvgSelector type="basket-icon" />
            {count ? <span>{count}</span> : ""}
          </div>
        </div>
      </Link>
    </div>
  );
};

export { Header };
