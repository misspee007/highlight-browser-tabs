import React, { useState } from "react";

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

export default Tab;
