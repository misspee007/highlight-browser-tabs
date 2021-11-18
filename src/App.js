import React from "react";
import "./App.css";

import Header from "./components/Header";
import Routes from "./Routes";

function App() {
  return (
    <div className="app">
      <div className="browser">
        <Header />

        <div className="viewport">
          <Routes />
        </div>
      </div>
    </div>
  );
}

export default App;
