import { FC, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import { selectorOfFiltersState } from "store/filters/selectors";
import { updateSorting } from "store/filters/slice";
import { sortingPizzas } from "store/pizzas/slice";

import { AppDispatch } from "store";
import { typesOfSorting } from "types/typesOfSorting";

import styles from "./style.module.scss";

const Sorting: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { sorting } = useSelector(selectorOfFiltersState);

  const [showPopup, setShowPopup] = useState(false);

  const onSelectSorting = (type: string, label: string) => {
    dispatch(updateSorting(label));
    dispatch(sortingPizzas(type));

    setShowPopup(false);
  };

  return (
    <div className={styles.sorting}>
      <div className={styles.sorting__label}>
        <b>Сортировка по:</b>
        <span onClick={() => setShowPopup(!showPopup)}>{sorting}</span>
      </div>

      {showPopup && (
        <div className={styles.sorting__popup}>
          <ul>
            {typesOfSorting.map(({ type, label }) => (
              <li onClick={() => onSelectSorting(type, label)} key={type}>
                {label}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Sorting;
