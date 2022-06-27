import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { selectorOfFiltersState } from "../../store/filters/selectors";
import { updateSorting } from "../../store/filters/slice";

import { sortingPizzas } from "../../store/pizzas/slice";

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
  const dispatch = useDispatch();
  const { sorting } = useSelector(selectorOfFiltersState);

  const [showPopup, setShowPopup] = useState(false);

  const onSelectSorting = (event) => {
    const typeOfSorting = event.target.innerText;

    dispatch(updateSorting(typeOfSorting));
    dispatch(sortingPizzas(typeOfSorting));

    setShowPopup(false);
  };

  return (
    <div className={s.sorting}>
      <div className={s.sorting__label}>
        <b>Сортировка по:</b>
        <span onClick={() => setShowPopup(!showPopup)}>{sorting}</span>
      </div>

      {showPopup && (
        <div className={s.sorting__popup}>
          <ul>
            {typesOfSorting.map(({ name }) => (
              <li onClick={onSelectSorting} key={name}>
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
