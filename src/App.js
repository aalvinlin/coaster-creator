import React from "react";
import TimelineView from "./components/TimelineView";

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