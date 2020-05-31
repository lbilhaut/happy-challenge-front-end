import React from "react";
import logo from "./images/Logo-whiteBG-small.png";
import "./App.css";
import PhoneNumber from "./PhoneNumber";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>~App in development~</p>
        <img src={logo} alt="logo" />
        <h1>Connect with your friends & make your life better</h1>
        <PhoneNumber user={"challenger"}></PhoneNumber>
        <PhoneNumber user={"defender"}></PhoneNumber>
        <a
          className="App-link"
          href="https://happychallenge.fun/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn more about the Happy Challenge Project!
        </a>
      </header>
    </div>
  );
}

export default App;
