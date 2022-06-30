import { FC } from "react";
import { Link } from "react-router-dom";

import styles from "./style.module.scss";

const ReturnComponent: FC<{
  title: string;
  subtitle: string;
  srcOfImage: string;
}> = ({ title, subtitle, srcOfImage }) => (
  <div className={styles.returnComponent}>
    <h2>{title}</h2>
    <p>{subtitle}</p>
    <img src={srcOfImage} alt="emptyCartImage" />
    <Link to="/PizzaApp/" className={styles.returnButton}>
      <span>Перейти в меню</span>
    </Link>
  </div>
);

export { ReturnComponent };
