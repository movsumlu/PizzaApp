import { FC } from "react";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";
import { selectorOfCardState } from "store/card/selectors";

import { GlobalSvgSelector } from "components/GlobalSvgSelector";

import pizzaLogo from "assets/images/pizzaLogo.svg";
import styles from "./style.module.scss";

const Header: FC = () => {
  const { count, totalPrice } = useSelector(selectorOfCardState);

  return (
    <div className={styles.header}>
      <Link to="/PizzaApp/">
        <div className={styles.header__leftside}>
          <img
            className={styles.header__logo}
            width="40"
            src={pizzaLogo}
            alt="pizzaLogo"
          />
          <div>
            <h1 className={styles.header__title}>Pizza App</h1>
            <p className={styles.header__subtitle}>доставка пиццы 24/7</p>
          </div>
        </div>
      </Link>

      <Link to="/PizzaApp/card">
        <div className={styles.header__rightside}>
          <div className={styles.header__buttonWrapper}>
            {totalPrice ? (
              <>
                <span className={styles.price}>{totalPrice} ₽</span>
                <div className={styles.delimiter} />
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
