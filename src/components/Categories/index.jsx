import "./style.scss";

const categories = [
  {
    name: "Все",
  },
  {
    name: "Мясные",
  },
  {
    name: "Вегетарианская",
  },
  {
    name: "Гриль",
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
          <li key={name}>{name}</li>
        ))}
      </ul>
    </div>
  );
};

export { Categories };
