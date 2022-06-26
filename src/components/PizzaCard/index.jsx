import { useState } from "react";

import { useDispatch } from "react-redux";
import { addPizzaToCard } from "../../store/card/slice";

import { GlobalSvgSelector } from "../GlobalSvgSelector";

import s from "./style.module.scss";

const PizzaCard = ({ pizza, setActive }) => {
  const [selectedDough, setSelectedDough] = useState(pizza.dough[0].name);
  const [selectedSize, setSelectedSize] = useState(pizza.sizes[0]);

  const dispatch = useDispatch();

  return (
    <div className={s.pizzaCard__wrapper}>
      <div className={s.pizzaCard}>
        <img
          className={s.pizzaCard__image}
          src={pizza.imageUrl}
          alt="pizzaImage"
          onClick={() => setActive(true)}
        />
        <h4 className={s.pizzaCard__title}>{pizza.title}</h4>

        <div className={s.pizzaCard__select}>
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
        <div className={s.pizzaCard__bottom}>
          <div className={s.pizzaCard__price}>от {pizza.price} ₽</div>
          <button className={s.buttonAdd}>
            <GlobalSvgSelector type="plus-icon" />
            <span onClick={() => dispatch(addPizzaToCard(pizza))}>
              Добавить
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export { PizzaCard };
