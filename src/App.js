import React from "react";
import "./App.css";

import { BrowserRouter, Route } from "react-router-dom"

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
