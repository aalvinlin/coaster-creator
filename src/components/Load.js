import React, { useState } from "react";

const Load = () => {

  const currentCoaster = useState(null);

  return (
    <>
      <h1>Load a Saved Coaster</h1>

      <div className="savedList">

        <ul>
          {localStorage.map(coaster => <li>{coaster}</li>)}
        </ul>

      </div>

      <div className="layoutPreview">

        <h2>{ currentCoaster.name }</h2>

      </div>

      <button>Load</button>
    </>
  );
  }

export default Load;