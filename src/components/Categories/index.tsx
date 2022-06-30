import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";

import { updateFilter } from "store/filters/slice";
import { selectorOfFiltersState } from "store/filters/selectors";

import { filteringPizzas } from "store/pizzas/slice";

import styles from "./style.module.scss";

type TCategory = {
  name: string;
};

const categories: TCategory[] = [
  {
    name: "Все",
  },
  {
    name: "Мясные",
  },
  {
    name: "Вегетарианские 🌱",
  },

  {
    name: "Острые 🌶️",
  },
];

const Categories: FC = () => {
  const dispatch = useDispatch();
  const { filter } = useSelector(selectorOfFiltersState);

  const onSelectFilter = (event: any) => {
    const typeOfSorting = event.target.innerText;

    dispatch(updateFilter(typeOfSorting));
    dispatch(filteringPizzas(typeOfSorting));
  };

  return (
    <div className={styles.categories}>
      <ul>
        {categories.map(({ name }) => (
          <li
            className={name === filter ? styles.active : ""}
            key={name}
            onClick={onSelectFilter}
          >
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export { Categories };
