import { FC, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Categories from "components/Categories";
import PizzaCard from "components/PizzaCard";
import PizzaCardModal from "components/PizzaCardModal";
import PizzaCardSkeleton from "components/PizzaCardSkeleton";
import Sorting from "components/Sorting";

import { AppDispatch } from "store";
import { fetchPizzas } from "store/pizzas/asyncThunks";

import { selectorOfPizzaState } from "store/pizzas/selectors";
import { selectorOfFiltersState } from "store/filters/selectors";

import { IPizza } from "types/interfaces";

import styles from "./style.module.scss";

const Home: FC = () => {
  const [isModalActive, setIsModalActive] = useState<boolean>(false);
  const [selectedPizza, setSelectedPizza] = useState<IPizza | null>(null);

  const { pizzas, loading } = useSelector(selectorOfPizzaState);
  const { filter } = useSelector(selectorOfFiltersState);

  const pizzasCards = pizzas.map((pizza: IPizza) => (
    <PizzaCard
      pizza={pizza}
      key={pizza.id}
      setIsModalActive={setIsModalActive}
      setSelectedPizza={setSelectedPizza}
    />
  ));

  const pizzasCardsSkeletons = [...new Array(12)].map((_, index) => (
    <PizzaCardSkeleton key={index} />
  ));

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchPizzas());
  }, [dispatch]);

  return (
    <div className={styles.cardWrapper}>
      <div className={styles.cardWrapper__top}>
        <Categories />
        <Sorting />
      </div>

      <h2 className={styles.cardWrapper__title}>{filter} пиццы</h2>

      <div className={styles.cardWrapper__items}>
        {loading ? pizzasCardsSkeletons : pizzasCards}
      </div>

      {selectedPizza && (
        <PizzaCardModal
          active={isModalActive}
          pizza={selectedPizza}
          setIsModalActive={setIsModalActive}
        />
      )}
    </div>
  );
};

export default Home;
