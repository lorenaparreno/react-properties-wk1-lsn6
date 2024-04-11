import React from "react";
import ReactDOM from "react-dom";
import City from "./City.js";

import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Challenge</h1>
      <p>
        Send a property name and temperature to the City component and display
        the properties in the City component
      </p>

      <City temperature={25} city="New York" />
      <City temperature={30} city="London" />
      <City temperature={20} city="Paris" />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
