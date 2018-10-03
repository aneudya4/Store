import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Main from "./containers/Main";
import ProductDetails from "./containers/ProductDetails";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/product/:id" component={ProductDetails} />
        </Switch>
      </div>
    );
  }
}
export default App;
