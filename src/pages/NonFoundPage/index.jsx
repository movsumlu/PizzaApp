import { Link } from "react-router-dom";

import s from "./style.module.scss";
import NonFoundPageImage from "../../assets/images/nonFoundPage.svg";

const NonFoundPage = () => (
  <div className={s.emptyCard}>
    <p>Страница не найдена, либо еще не создана.</p>
    <img src={NonFoundPageImage} alt="NonFoundPageImage" />
    <Link to="/PizzaApp/" className={s.returnButton}>
      <span>Перейти в меню</span>
    </Link>
  </div>
);

export { NonFoundPage };
