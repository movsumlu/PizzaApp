import { FC, MouseEvent } from "react";
import { useDispatch, useSelector } from "react-redux";

import { updateFilter } from "store/filters/slice";
import { filteringPizzas } from "store/pizzas/slice";

import { selectorOfFiltersState } from "store/filters/selectors";
import { AppDispatch } from "store";

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
  const dispatch = useDispatch<AppDispatch>();
  const { filter } = useSelector(selectorOfFiltersState);

  const onSelectFilter = (event: MouseEvent) => {
    const selectedLIElement = event.target as HTMLElement;
    const typeOfFilter = selectedLIElement.innerText;

    dispatch(updateFilter(typeOfFilter));
    dispatch(filteringPizzas(typeOfFilter));
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
