import { useState } from "react";

import s from "./style.module.scss";

const typesOfSorting = [
  { name: "популярности ↓" },
  { name: "популярности ↑" },
  { name: "цена по возростанию" },
  { name: "цене по убыванию" },
  { name: "алфавиту от А до Я" },
  { name: "алфавиту от Я до А" },
];

const Sorting = () => {
  const [showPopup, setShowPopup] = useState(false);

  const [selectedTypeOfSorting, setSelectedTypeOfSorting] =
    useState("популярности ↓");

  const onSelectTypeOfSorting = (event) => {
    setSelectedTypeOfSorting(event.target.innerText);
    setShowPopup(false);
  };

  return (
    <div className={s.sorting}>
      <div className={s.sorting__label}>
        <b>Сортировка по:</b>
        <span onClick={() => setShowPopup(!showPopup)}>
          {selectedTypeOfSorting}
        </span>
      </div>

      {showPopup && (
        <div className={s.sorting__popup}>
          <ul>
            {typesOfSorting.map(({ name }) => (
              <li onClick={onSelectTypeOfSorting} key={name}>
                {name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export { Sorting };
