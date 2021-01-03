import React from "react";
import "./App.css";
import HomePage from "./pages/homepage/homepage";
import { Switch, Route } from "react-router-dom";

const Hats = () => {
  return <h1>Hats</h1>;
};

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={HomePage}></Route>
        <Route path="/hats" exact component={Hats}></Route>
      </Switch>
    </div>
  );
}

export default App;
