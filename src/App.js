import React, { useState } from "react";
import "./App.css";

function Tab({ children }) {
  const [highlight, setHighlight] = useState({ left: 0, opacity: 0 });

  function moveHighlight(e) {
    setHighlight({
      left: e.nativeEvent.layerX - 150,
    });
  }

  function removeHighlight(e) {
    setHighlight({
      opacity: 0,
      left: e.nativeEvent.layerX - 150,
    });
  }

  return (
    <div
      className="tab"
      onMouseMove={moveHighlight}
      onMouseOut={removeHighlight}
    >
      <div className="highlight" style={highlight} />
      {children}
    </div>
  );
}

function App() {
  return (
    <div className="app">
      <div className="browser">
        <div className="tabs">
          <Tab>
            <a>Home</a>
          </Tab>
          <Tab>
            <a>About</a>
          </Tab>
          <Tab>
            <a>Blog</a>
          </Tab>
        </div>

        <div className="viewport">Page</div>
      </div>
    </div>
  );
}

export default App;
