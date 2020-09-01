import React from "react";

const ElementPicker = () => {

  const elements = [];

  return (
    <>
      <div className="elementPicker">
        {elements.map(element => element)}
      </div>
    </>
  );
  }

export default ElementPicker;