import React from "react";
import "./App.css";

export default function City(props) {
  return (
    <div ClassName="City">
      It is {props.temperature}°C in {props.city}
    </div>
  );
}
