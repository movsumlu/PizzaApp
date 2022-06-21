import { Categories } from "./components/Categories";
import { Header } from "./components/Header";
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
        </div>
      </div>
    </div>
  );
};

export default App;
