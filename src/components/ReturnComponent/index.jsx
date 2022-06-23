import { Link } from "react-router-dom";
import s from "./style.module.scss";

const ReturnComponent = ({ title, subtitle, srcOfImage }) => (
  <div className={s.returnComponent}>
    <h2>{title}</h2>
    <p>{subtitle}</p>
    <img src={srcOfImage} alt="emptyCartImage" />
    <Link to="/PizzaApp/" className={s.returnButton}>
      <span>Перейти в меню</span>
    </Link>
  </div>
);

export { ReturnComponent };
