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
            <Route exact path="/Store" component={PhoneItems} />
            <Route exact path="/Store/accesories" component={AccesoriesItems} />
            <Route path="/Store/product/:PhoneId" component={ProductDetails} />
            <Route path="/Store/cart" component={Cart} />
          </Switch>
        </section>
      </React.Fragment>
    );
  }
}
export default App;
