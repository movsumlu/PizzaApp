import axios from "axios";

import { useState, useEffect } from "react";

import { Categories } from "./components/Categories";
import { Header } from "./components/Header";
import { PizzaCard } from "./components/PizzaCard";
import { PizzaCardSkeleton } from "./components/PizzaCardSkeleton";
import { Sorting } from "./components/Sorting";

const App = () => {
  const [pizzas, setPizzas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://62b2b163c7e53744afd01e9f.mockapi.io/pizzas`)
      .then((response) => {
        const pizzas = response.data;
        setPizzas(pizzas);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="app">
      <div className="wrapper">
        <Header />

        <div className="content">
          <div className="content__top">
            <Categories />
            <Sorting />
          </div>

          <h2 className="content__title">Все пиццы</h2>

          <div className="content__items">
            {isLoading
              ? [...new Array(12)].map((_, index) => (
                  <PizzaCardSkeleton key={index} />
                ))
              : pizzas.map((pizza) => (
                  <PizzaCard pizza={pizza} key={pizza.id} />
                ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
