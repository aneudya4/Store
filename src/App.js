import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import PhoneItems from "./components/PhoneItems";
import ProductDetails from "./containers/ProductDetails";
import Cart from "./containers/Cart";

import "./sass/App.scss";
import AccesoriesItems from "./components/AccesoriesItems";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="products">
          <Switch>
            <Route exact path="/store" component={PhoneItems} />
            <Route exact path="/accesories" component={AccesoriesItems} />
            <Route path="/product/:PhoneId" component={ProductDetails} />
            <Route path="/cart" component={Cart} />
          </Switch>
        </section>
      </React.Fragment>
    );
  }
}
export default App;
