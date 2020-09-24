import React from "react";
import elements from "../trackData/elements";

const ElementPicker = () => {

  return (
    <>
      <div className="elementPicker">
        {elements.map(element => element)}
      </div>
    </>
  );
  }

export default ElementPicker;