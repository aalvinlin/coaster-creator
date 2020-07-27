import React from "react";
import TimelineView from "./components/TimelineView";

import "./reset.css";
import "./index.css";

const App = () => {

  let elements = ["one", "two"];

  return (
    <>
      <h1>Coaster Creator</h1>
      <TimelineView elements={elements} />
    </>
  );
  }

export default App;