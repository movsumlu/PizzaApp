import { useDispatch, useSelector } from "react-redux";

import { updateFilter } from "store/filters/slice";
import { selectorOfFiltersState } from "store/filters/selectors";

import { filteringPizzas } from "store/pizzas/slice";

import s from "./style.module.scss";

const categories = [
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

const Categories = () => {
  const dispatch = useDispatch();
  const { filter } = useSelector(selectorOfFiltersState);

  const onSelectFilter = (event) => {
    const typeOfSorting = event.target.innerText;

    dispatch(updateFilter(event.target.innerText));
    dispatch(filteringPizzas(typeOfSorting));
  };

  return (
    <div className={s.categories}>
      <ul>
        {categories.map(({ name }) => (
          <li
            className={name === filter ? s.active : ""}
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
