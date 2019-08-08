import React from "react";
import ReactDOM from "react-dom";
import PlayerCompare from './PlayerCompare/PlayerCompare';

function App() {
  return <PlayerCompare />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
