import { useState } from "react";
import s from "./style.module.scss";

const typesOfDough = [
  { name: "тонкое" },
  { name: "традиционное" },
  { name: "толстое" },
];

const PizzaCard = ({ pizza }) => {
  const [selectedDough, setSelectedDough] = useState("тонкое");
  const [selectedSize, setSelectedSize] = useState(pizza.sizes[0]);

  return (
    <div className={s.pizzaCard__wrapper}>
      <div className={s.pizzaCard}>
        <img
          className={s.pizzaCard__image}
          src={pizza.imageUrl}
          alt="pizzaImage"
        />
        <h4 className={s.pizzaCard__title}>{pizza.title}</h4>

        <div className={s.pizzaCard__select}>
          <ul>
            {typesOfDough.map(({ name }) => (
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
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                fill="white"
              />
            </svg>
            <span>Добавить</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export { PizzaCard };
