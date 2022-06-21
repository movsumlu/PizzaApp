import "./style.scss";

const typesOfDough = [
  { name: "тонкое" },
  { name: "традиционное" },
  { name: "толстое" },
];

const sizes = [{ name: "22 см." }, { name: "30 см." }, { name: "40 см." }];

const PizzaCard = () => {
  return (
    <div className="pizza-card-wrapper">
      <div className="pizza-card">
        <img
          className="pizza-card__image"
          src="https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/6652fec1-04df-49d8-8744-232f1032c44b.jpg"
          alt="pizzaImage"
        />
        <h4 className="pizza-card__title">Цыпленок барбекю</h4>

        <div className="pizza-card__select">
          <ul>
            {typesOfDough.map(({ name }) => (
              <li className={name === "тонкое" ? "active" : ""} key={name}>
                {name}
              </li>
            ))}
          </ul>
          <ul>
            {sizes.map(({ name }) => (
              <li className={name === "22 см." ? "active" : ""} key={name}>
                {name}
              </li>
            ))}
          </ul>
        </div>
        <div className="pizza-card__bottom">
          <div className="pizza-card__price">от 275 ₽</div>
          <button className="button  button--add">
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                fill="white"
              />
            </svg>
            <span>Добавить</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export { PizzaCard };
