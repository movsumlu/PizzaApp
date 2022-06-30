import { FC, useState } from "react";

import { useDispatch } from "react-redux";
import { addPizzaToCard } from "store/card/slice";

import { GlobalSvgSelector } from "components/GlobalSvgSelector";

import { IPizza } from "types/interfaces";

import styles from "./style.module.scss";

const Select: FC<{ pizza: IPizza }> = ({ pizza }) => {
  const dispatch = useDispatch();

  const [selectedDough, setSelectedDough] = useState<string>(
    pizza.doughes[0].name
  );

  const [selectedSize, setSelectedSize] = useState<number>(pizza.sizes[0]);

  const onSelectDough = (event: any) =>
    setSelectedDough(event.target.innerText);

  const onSelectSize = (event: any) =>
    setSelectedSize(parseInt(event.target.innerText));

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
