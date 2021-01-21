import React from "react";
import "./App.scss";
import { Keyboard } from "./components/keyboard/keyboard";

// css vars and defaults
// theme

function App() {
  return (
    <div className="App">
      <div className={"container"}>
        <Keyboard />
      </div>
    </div>
  );
}

export default App;
