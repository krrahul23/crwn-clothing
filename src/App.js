import React from "react";
import "./App.css";
import HomePage from "./pages/homepage/homepage";
import { Switch, Route } from "react-router-dom";
import ShopPage from "./pages/shop/shop";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={HomePage}></Route>
        <Route path="/shop" exact component={ShopPage}></Route>
      </Switch>
    </div>
  );
}

export default App;
