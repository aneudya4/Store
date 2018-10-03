import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Main from "./containers/Main";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Main />
      </div>
    );
  }
}
export default App;
