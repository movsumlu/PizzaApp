import { Link } from "react-router-dom";

import s from "./style.module.scss";
import emptyCartImage from "../../assets/images/empty-cart.svg";

const EmptyCard = () => (
  <div className={s.emptyCard}>
    <h2>Ой, пусто!</h2>
    <p>Для того, чтобы заказать пиццу, перейди в меню.</p>
    <img src={emptyCartImage} alt="emptyCartImage" />
    <Link to="/PizzaApp/" className={s.returnButton}>
      <span>Вернуться в меню</span>
    </Link>
  </div>
);

export { EmptyCard };
