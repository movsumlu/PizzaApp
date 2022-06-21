import "./style.scss";

const typesOfSorting = [
  { name: "популярности ↑" },
  { name: "популярности ↓" },
  { name: "цена по возростанию" },
  { name: "цене по убыванию" },
  { name: "алфавиту от А до Я" },
  { name: "алфавиту от Я до А" },
];

const Sorting = () => {
  return (
    <div className="sorting">
      <div className="sorting__label">
        <b>Сортировка по:</b>
        <span>популярности ↓</span>
      </div>

      {false && (
        <div className="sorting__popup">
          <ul>
            {typesOfSorting.map(({ name }) => (
              <li key={name}>{name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export { Sorting };
