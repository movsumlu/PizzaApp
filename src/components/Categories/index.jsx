import { useState } from "react";

import "./style.scss";

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
  {
    name: "Закрытые",
  },
];

const Categories = () => {
  const [selectedCategory, setSelectedCategory] = useState("Все");

  return (
    <div className="categories">
      <ul>
        {categories.map(({ name }) => (
          <li
            className={name === selectedCategory ? "active" : ""}
            key={name}
            onClick={(event) => {
              setSelectedCategory(event.target.innerText);
            }}
          >
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export { Categories };
