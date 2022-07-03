import { FC, lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import MainLayout from "layouts/MainLayout";

import Home from "pages/Home";

import Loader from "components/Loader";

const Card = lazy(() => import("pages/Card"));
const Checkout = lazy(() => import("pages/Checkout"));
const NonFoundPage = lazy(() => import("pages/NonFoundPage"));

const App: FC = () => {
  return (
    <Routes>
      <Route path="/PizzaApp/" element={<MainLayout />}>
        <Route path="" element={<Home />} />

        <Route
          path="card"
          element={
            <Suspense fallback={<Loader />}>
              <Card />
            </Suspense>
          }
        />

        <Route
          path="checkout"
          element={
            <Suspense fallback={<Loader />}>
              <Checkout />
            </Suspense>
          }
        />

        <Route
          path="*"
          element={
            <Suspense fallback={<Loader />}>
              <NonFoundPage />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
};

export default App;
