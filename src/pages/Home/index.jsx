import axios from "axios";

import { useState, useEffect } from "react";

import { Categories } from "../../components/Categories";
import { PizzaCard } from "../../components/PizzaCard";
import { PizzaCardSkeleton } from "../../components/PizzaCardSkeleton";
import { Sorting } from "../../components/Sorting";

import s from "./style.module.scss";

const Home = () => {
  const [pizzas, setPizzas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://62b2b163c7e53744afd01e9f.mockapi.io/pizzas`)
      .then((response) => {
        const pizzas = response.data;
        setPizzas(pizzas);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error.message || error);
      });
  }, []);

  return (
    <div className={s.cardWrapper}>
      <div className={s.cardWrapper__top}>
        <Categories />
        <Sorting />
      </div>

      <h2 className={s.cardWrapper__title}>Все пиццы</h2>

      <div className={s.cardWrapper__items}>
        {isLoading
          ? [...new Array(12)].map((_, index) => (
              <PizzaCardSkeleton key={index} />
            ))
          : pizzas.map((pizza) => <PizzaCard pizza={pizza} key={pizza.id} />)}
      </div>
    </div>
  );
};

export { Home };
