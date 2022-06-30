import { FC } from "react";

import { Select } from "components/Select";

import { IPizza } from "types/interfaces";

import styles from "./style.module.scss";

const PizzaCard: FC<{
  pizza: IPizza;
  setIsModalActive: any;
  setSelectedPizza: any;
}> = ({ pizza, setIsModalActive, setSelectedPizza }) => {
  const onSelectPizza = () => {
    setIsModalActive(true);
    setSelectedPizza(pizza);
  };

  return (
    <div className={styles.pizzaCard__wrapper}>
      <div className={styles.pizzaCard}>
        <img
          className={styles.pizzaCard__image}
          src={pizza.imageUrl}
          alt="pizzaImage"
          onClick={onSelectPizza}
        />
        <h4 className={styles.pizzaCard__title}>{pizza.title}</h4>

        <Select pizza={pizza} />
      </div>
    </div>
  );
};

export { PizzaCard };
