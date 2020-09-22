import React from "react";

const Load = () => {

  return (
    <>
      <h1>Load a Saved Coaster</h1>

      <div className="savedList">

        <ul>
          {localStorage.map(coaster => <li>{coaster}</li>)}
        </ul>

      </div>

      <div className="layoutPreview">

      </div>

      <button>Load</button>
    </>
  );
  }

export default Load;