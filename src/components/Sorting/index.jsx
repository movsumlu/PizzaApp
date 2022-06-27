import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { selectorOfFiltersState } from "../../store/filters/selectors";
import { updateSortingType } from "../../store/filters/slice";

import { sortingPizzas } from "../../store/pizza/slice";

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

  const { sortingType } = useSelector(selectorOfFiltersState);

  const [showPopup, setShowPopup] = useState(false);

  const onSelectTypeOfSorting = (event) => {
    const typeOfSorting = event.target.innerText;

    dispatch(updateSortingType(typeOfSorting));
    dispatch(sortingPizzas(typeOfSorting));
    setShowPopup(false);
  };

  return (
    <div className={s.sorting}>
      <div className={s.sorting__label}>
        <b>Сортировка по:</b>
        <span onClick={() => setShowPopup(!showPopup)}>{sortingType}</span>
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
