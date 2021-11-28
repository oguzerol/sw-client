import App from "./core/Layouts/App";
import Home from "./pages/Home";
import { Provider } from "react-redux";
import React from "react";
import ReactDOM from "react-dom";
import store from "./store";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const routes = (
  <Provider store={store}>
    <Router>
      <App>
        <Switch>
          <Route component={Home} exact path={"/"} />
        </Switch>
      </App>
    </Router>
  </Provider>
);

ReactDOM.render(routes, document.getElementById("root"));
