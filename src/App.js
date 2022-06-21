import { Categories } from "./components/Categories";
import { Header } from "./components/Header";
import { PizzaCard } from "./components/PizzaCard";
import { Sorting } from "./components/Sorting";

const App = () => {
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
            <PizzaCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
