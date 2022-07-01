import { FC, useState, MouseEvent } from "react";

import { useDispatch } from "react-redux";
import { addPizzaToCard } from "store/card/slice";

import { AppDispatch } from "store";

import { GlobalSvgSelector } from "components/GlobalSvgSelector";

import { IPizza } from "types/interfaces";

import styles from "./style.module.scss";

const Select: FC<{ pizza: IPizza }> = ({ pizza }) => {
  const dispatch = useDispatch<AppDispatch>();

  const [selectedDough, setSelectedDough] = useState<string>(
    pizza.doughes[0].name
  );

  const [selectedSize, setSelectedSize] = useState<number>(pizza.sizes[0]);

  const onSelectDough = (event: MouseEvent) => {
    const selectedLIElement = event.target as HTMLElement;
    setSelectedDough(selectedLIElement.innerText);
  };

  const onSelectSize = (event: MouseEvent) => {
    const selectedLIElement = event.target as HTMLElement;
    setSelectedSize(parseInt(selectedLIElement.innerText));
  };

  return (
    <>
      <div className={styles.selectionSide}>
        <ul>
          {pizza.doughes.map(({ name }) => (
            <li
              className={name === selectedDough ? styles.active : ""}
              key={name}
              onClick={onSelectDough}
            >
              {name}
            </li>
          ))}
        </ul>
        <ul>
          {pizza.sizes.map((size) => (
            <li
              className={size === selectedSize ? styles.active : ""}
              key={size}
              onClick={onSelectSize}
            >
              {size}
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.bottomSide}>
        <div className={styles.price}>от {pizza.price} ₽</div>
        <button
          className={styles.buttonAdd}
          onClick={() => dispatch(addPizzaToCard(pizza))}
        >
          <GlobalSvgSelector type="plus-icon" />
          <span>Добавить</span>
        </button>
      </div>
    </>
  );
};

export { Select };
