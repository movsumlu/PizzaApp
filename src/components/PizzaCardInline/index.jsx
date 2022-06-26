import { GlobalSvgSelector } from "../GlobalSvgSelector";
import "./style.scss";

const PizzaCardInline = ({ pizza }) => {
  return (
    <div className="card-inline">
      <div className="image-wrapper">
        <img src={pizza.imageUrl} alt="pizzaImage" />
      </div>
      <div className="description">
        <h3>{pizza.title}</h3>
        <p>Тонкое, 22 см.</p>
      </div>
      <div className="buttonWrapper">
        <button className="minusButton">
          <GlobalSvgSelector type="minus_button-icon" />
        </button>
        <b>{pizza.quantity}</b>
        <button className="addButton">
          <GlobalSvgSelector type="plus_button-icon" />
        </button>
      </div>
      <div className="price">
        <b>{pizza.price * pizza.quantity} ₽</b>
      </div>
      <div className="removeButton">
        <button>
          <GlobalSvgSelector type="remove-icon" />
        </button>
      </div>
    </div>
  );
};

export { PizzaCardInline };
