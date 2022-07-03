import { BrowserRouter as Router } from "react-router-dom";
import ReactDOM from "react-dom/client";

import { Provider } from "react-redux";
import { store } from "store";

import App from "App";

import "style/main.scss";

const root = ReactDOM.createRoot(document.getElementById("root") as Element);

root.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>
);
