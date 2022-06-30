import { Route, Routes } from "react-router-dom";

import { Header } from "components/Header";

import { Home } from "pages/Home";
import { Card } from "pages/Card";
import { NonFoundPage } from "pages/NonFoundPage";

const App = () => {
  return (
    <div className="app">
      <div className="wrapper">
        <Header />

        <Routes>
          <Route path="PizzaApp" element={<Home />} />
          <Route path="PizzaApp/card" element={<Card />} />
          <Route path="*" element={<NonFoundPage />} />
        </Routes>
      </div>
    </div>
  );
};

export { App };
