import { Select } from "../Select";

import s from "./style.module.scss";

const PizzaCardModal = ({ active, setIsModalActive, pizza }) => {
  return (
    <div
      className={active ? `${s.modal} ${s.active}` : s.modal}
      onClick={() => setIsModalActive(false)}
    >
      <div
        className={
          active ? `${s.modal__content} ${s.active}` : s.modal__content
        }
        onClick={(event) => event.stopPropagation()}
      >
        <span className={s.closeIcon} onClick={() => setIsModalActive(false)}>
          X
        </span>
        <div>
          <img src={pizza.imageUrl} alt="pizzaImage" />
        </div>
        <div>
          <h1>{pizza.title}</h1>
          <p className={s.composition}>{pizza.composition}</p>
          <div className={s.bottomSection}>
            <Select pizza={pizza} />
          </div>
        </div>
      </div>
    </div>
  );
};

export { PizzaCardModal };
