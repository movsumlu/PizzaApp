import { useState } from "react";

import { useDispatch } from "react-redux";
import { addPizzaToCard } from "../../store/card/slice";

import { GlobalSvgSelector } from "../GlobalSvgSelector";

import s from "./style.module.scss";

const Select = ({ pizza }) => {
  const dispatch = useDispatch();

  const [selectedDough, setSelectedDough] = useState(pizza.dough[0].name);
  const [selectedSize, setSelectedSize] = useState(pizza.sizes[0]);

  return (
    <>
      <div className={s.selectionSide}>
        <ul>
          {pizza.dough.map(({ name }) => (
            <li
              className={name === selectedDough ? s.active : ""}
              key={name}
              onClick={(event) => {
                setSelectedDough(event.target.innerText);
              }}
            >
              {name}
            </li>
          ))}
        </ul>
        <ul>
          {pizza.sizes.map((size) => (
            <li
              className={size === selectedSize ? s.active : ""}
              key={size}
              onClick={(event) => {
                setSelectedSize(parseInt(event.target.innerText));
              }}
            >
              {size}
            </li>
          ))}
        </ul>
      </div>
      <div className={s.bottomSide}>
        <div className={s.price}>от {pizza.price} ₽</div>
        <button
          className={s.buttonAdd}
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
