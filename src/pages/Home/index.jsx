import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Categories } from "../../components/Categories";
import { PizzaCard } from "../../components/PizzaCard";
import { PizzaCardModal } from "../../components/PizzaCardModal";
import { PizzaCardSkeleton } from "../../components/PizzaCardSkeleton";
import { Sorting } from "../../components/Sorting";

import { fetchPizzas } from "../../store/pizzas/asyncThunks";
import { selectorOfPizzaState } from "../../store/pizzas/selectors";

import s from "./style.module.scss";

const Home = () => {
  const [isModalActive, setIsModalActive] = useState(false);

  const { pizzas, loading } = useSelector(selectorOfPizzaState);

  const pizzasCards = pizzas.map((pizza) => (
    <PizzaCard pizza={pizza} key={pizza.id} setActive={setIsModalActive} />
  ));

  const pizzasCardsSkeletons = [...new Array(12)].map((_, index) => (
    <PizzaCardSkeleton key={index} />
  ));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPizzas());
  }, [dispatch]);

  return (
    <div className={s.cardWrapper}>
      <div className={s.cardWrapper__top}>
        <Categories />
        <Sorting />
      </div>

      <h2 className={s.cardWrapper__title}>Все пиццы</h2>

      <div className={s.cardWrapper__items}>
        {loading ? pizzasCardsSkeletons : pizzasCards}
      </div>

      <PizzaCardModal active={isModalActive} setActive={setIsModalActive} />
    </div>
  );
};

export { Home };
