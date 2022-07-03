import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";

import { updateFilter } from "store/filters/slice";
import { filteringPizzas } from "store/pizzas/slice";

import { selectorOfFiltersState } from "store/filters/selectors";
import { AppDispatch } from "store";

import { typesOfFilter } from "types/typesOfFilter";

import styles from "./style.module.scss";

const Categories: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { filter } = useSelector(selectorOfFiltersState);

  const onSelectFilter = (type: string, label: string) => {
    dispatch(updateFilter(label));
    dispatch(filteringPizzas(type));
  };

  return (
    <div className={styles.categories}>
      <ul>
        {typesOfFilter.map(({ type, label }) => (
          <li
            className={label === filter ? styles.active : ""}
            key={label}
            onClick={() => onSelectFilter(type, label)}
          >
            {label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
