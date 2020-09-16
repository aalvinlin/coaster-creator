import React from "react";
import { Route, Switch } from "react-router-dom";

import Editor from "./components/Editor";
import Load from "./components/Load";

import "./reset.css";
import "./index.css";

const App = () => {

  return (
    <>
      
      <Switch>
        
        <Route path="/create">
          <h1>Coaster Creator</h1>
          
        </Route>

        <Route path="/load">

          <TimelineView elements={elements} />

        </Route>

        <Route path="/help">
          
        </Route>

      </Switch>

    </>
  );
  }

export default App;