import React from "react";

const Editor = () => {


  let elements = ["one", "two"];


  return (
    <>
      <div className="editorContainer">

          <div className="editorSidebar">

            <div className="partsPicker">

            </div>

            <div className="trackTypePicker">
                
            </div>

          </div>

          <div className="editorMain">

            <div className="timelineView">
              <TimelineView elements={elements} />
            </div>

            <div className="currentPartContainer">

                <div className="currentPartPreview">
                
                </div>

                <div className="currentPartSettings">
                  <h2>Settings</h2>

                  <div className="settingsContainer">

                  </div>

                </div>
                
            </div>

          </div>

      </div>

    </>
  );
  }

export default Editor;