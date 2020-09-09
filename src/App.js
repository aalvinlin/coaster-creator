import React from "react";
import { Route, Switch } from "react-router-dom";

import TimelineView from "./components/TimelineView";

import "./reset.css";
import "./index.css";

const App = () => {

  let elements = ["one", "two"];

  return (
    <>
      
      <Switch>
        
        <Route path="/create">
          <h1>Coaster Creator</h1>
          <TimelineView elements={elements} />
        </Route>

        <Route path="/load">

        </Route>

        <Route path="/help">
          
        </Route>

      </Switch>

    </>
  );
  }

export default App;