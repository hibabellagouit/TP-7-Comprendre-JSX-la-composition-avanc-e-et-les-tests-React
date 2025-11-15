import React from "react";
import "./App.css";
import withTimestamp from "./withTimestamp";
import Greeting from "./Greeting";

// On enveloppe Greeting dans le HOC
const GreetingWithTimestamp = withTimestamp(Greeting);

function App() {
  return (
    <div className="app-container">
      <h1 className="title">TP React – HOC + CSS</h1>

      <div className="card">
        <GreetingWithTimestamp name="Alice" />
      </div>
    </div>
  );
}

export default App;
