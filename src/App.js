import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Main from "./containers/Main";
import ProductDetails from "./containers/ProductDetails";
import Header from "./containers/Header";
import Cart from "./containers/Cart";

import "./sass/App.scss";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/product/:id" component={ProductDetails} />
          <Route path="/cart" component={Cart} />
        </Switch>
      </React.Fragment>
    );
  }
}
export default App;
