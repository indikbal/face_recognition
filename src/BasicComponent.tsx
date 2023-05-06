import * as React from "react";
import * as ReactDOM from "react-dom";
import { SampleApp } from "./sample-app/react-ts-sample";

// Update the UI with status
function displayStatus(message: string) {
  document.getElementById("status")!.innerHTML = message;
}

export default class BasicComponent extends React.Component<{}> {
  onLivenessCheckPressed() {
    SampleApp.onLivenessCheckPressed();
  }
  render() {
    return (
      <div>
        <div className="wrapping-box-container text-center">
          <div id="controls" className="controls">
            <div id="custom-logo-container">
              <img id="facetec-logo" src="../images/logo.png" />
            </div>
            <div>
              <img className="faceid" src="../images/face-id.png" />
              <p id="status">Initializing...</p>
            </div>

            <button
              id="liveness-button"
              className="big-button"
              onClick={() => this.onLivenessCheckPressed()}
            >
              Start Liveness Check
            </button>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<BasicComponent />, document.getElementById("root"));
