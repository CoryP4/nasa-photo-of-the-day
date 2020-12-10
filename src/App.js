import React from "react";
import { BrowserRouter, Route } from "react-router-dom"
import "./App.css";

import Home from "./Components/Homepage"
import Picture from "./Components/Picture"

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Route component={Home} path="/" exact />
        <Route component={Picture} path="/Picture" />
      </div>
    </BrowserRouter>
  );
}

export default App;
