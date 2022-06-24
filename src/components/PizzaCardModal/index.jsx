import s from "./style.module.scss";

const PizzaCardModal = ({ active, setActive }) => (
  <div
    className={active ? `${s.modal} ${s.active}` : s.modal}
    onClick={() => setActive(false)}
  >
    <div
      className={active ? `${s.modal__content} ${s.active}` : s.modal__content}
      onClick={(event) => event.stopPropagation()}
    />
  </div>
);

export { PizzaCardModal };
