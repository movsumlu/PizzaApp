import { FC, useState, useMemo } from "react";

import { useDispatch } from "react-redux";
import { addPizzaToCard } from "store/card/slice";

import { AppDispatch } from "store";

import GlobalSvgSelector from "components/GlobalSvgSelector";

import { IDough, ISize, IPizza } from "types/interfaces";

import styles from "./style.module.scss";

const Select: FC<{ pizza: IPizza }> = ({ pizza }) => {
  const dispatch = useDispatch<AppDispatch>();

  const [selectedDough, setSelectedDough] = useState<IDough>(pizza.doughes[0]);
  const [selectedSize, setSelectedSize] = useState<ISize>(pizza.sizes[0]);

  const totalPriceOfPizza = useMemo(
    () =>
      (
        pizza.price *
        selectedDough.coeficient *
        selectedSize.coeficient
      ).toFixed(),
    [pizza, selectedDough, selectedSize]
  );

  return (
    <>
      <div className={styles.selectionSide}>
        <ul>
          {pizza.doughes.length &&
            pizza.doughes.map((dough) => (
              <li
                className={
                  dough.name === selectedDough.name ? styles.active : ""
                }
                key={dough.name}
                onClick={() => setSelectedDough(dough)}
              >
                {dough.name}
              </li>
            ))}
        </ul>
        <ul>
          {pizza.sizes.length &&
            pizza.sizes.map((size) => (
              <li
                className={size.name === selectedSize.name ? styles.active : ""}
                key={size.name}
                onClick={() => setSelectedSize(size)}
              >
                {size.name}
              </li>
            ))}
        </ul>
      </div>
      <div className={styles.bottomSide}>
        <div className={styles.price}>от {totalPriceOfPizza} ₽</div>
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

export default Select;
