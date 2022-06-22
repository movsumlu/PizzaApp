import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";

import { App } from "./App";
import "./style/main.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
