import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Grocery } from "./components/grocery";

function App() {
  return (
    <div className="App">
      <Grocery />
    </div>
  );
}

export default App;
