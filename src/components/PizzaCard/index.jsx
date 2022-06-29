import { Select } from "components/Select";

import s from "./style.module.scss";

const PizzaCard = ({ pizza, setIsModalActive, setSelectedPizza }) => {
  const onSelectPizza = () => {
    setIsModalActive(true);
    setSelectedPizza(pizza);
  };

  return (
    <div className={s.pizzaCard__wrapper}>
      <div className={s.pizzaCard}>
        <img
          className={s.pizzaCard__image}
          src={pizza.imageUrl}
          alt="pizzaImage"
          onClick={onSelectPizza}
        />
        <h4 className={s.pizzaCard__title}>{pizza.title}</h4>

        <Select pizza={pizza} />
      </div>
    </div>
  );
};

export { PizzaCard };
