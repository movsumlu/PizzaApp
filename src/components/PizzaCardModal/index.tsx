import { FC } from "react";

import Select from "components/Select";

import { IPizza } from "types/interfaces";

import styles from "./style.module.scss";

const PizzaCardModal: FC<{
  pizza: IPizza;
  active: boolean;
  setIsModalActive: (setActiveModal: boolean) => void;
}> = ({ pizza, active, setIsModalActive }) => {
  return (
    <div
      className={active ? `${styles.modal} ${styles.active}` : styles.modal}
      onClick={() => setIsModalActive(false)}
    >
      <div
        className={
          active
            ? `${styles.modal__content} ${styles.active}`
            : styles.modal__content
        }
        onClick={(event) => event.stopPropagation()}
      >
        <span
          className={styles.closeIcon}
          onClick={() => setIsModalActive(false)}
        >
          ×
        </span>
        <div>
          <img src={pizza.imageUrl} alt="pizzaImage" />
        </div>
        <div>
          <h1>{pizza.title}</h1>
          <p className={styles.composition}>{pizza.composition}</p>
          <div className={styles.bottomSection}>
            <Select pizza={pizza} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PizzaCardModal;
