import { FC } from "react";
import { Route, Routes } from "react-router-dom";

import { MainLayout } from "layouts/MainLayout";

import { Home } from "pages/Home";
import { Card } from "pages/Card";
import { Checkout } from "pages/Checkout";
import { NonFoundPage } from "pages/NonFoundPage";

const App: FC = () => {
  return (
    <Routes>
      <Route path="/PizzaApp/" element={<MainLayout />}>
        <Route path="" element={<Home />} />
        <Route path="card" element={<Card />} />
        <Route path="checkout" element={<Checkout />} />

        <Route path="*" element={<NonFoundPage />} />
      </Route>
    </Routes>
  );
};

export { App };
