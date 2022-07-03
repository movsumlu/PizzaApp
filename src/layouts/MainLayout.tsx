import { FC } from "react";
import { Outlet } from "react-router-dom";

import Header from "components/Header";

const MainLayout: FC = () => {
  return (
    <div className="app">
      <div className="wrapper">
        <Header />
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
