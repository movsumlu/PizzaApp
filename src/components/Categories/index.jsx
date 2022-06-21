import "./style.scss";

const categories = [
  {
    name: "Все",
  },
  {
    name: "Мясные",
  },
  {
    name: "Вегетарианские",
  },

  {
    name: "Острые",
  },
  {
    name: "Закрытые",
  },
];

const Categories = () => {
  return (
    <div className="categories">
      <ul>
        {categories.map(({ name }) => (
          <li className={name === "Все" ? "active" : ""} key={name}>
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export { Categories };
