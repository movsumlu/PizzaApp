import { Categories } from "./components/Categories";
import { Header } from "./components/Header";

const App = () => {
  return (
    <div className="app">
      <div className="wrapper">
        <Header />

        <div className="content">
          <Categories />
        </div>
      </div>
    </div>
  );
};

export default App;
