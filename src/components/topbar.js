import React from "react";
import ReturnButton from "./ReturnButton.js";

class TopBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { background: "#9B6BB3", color: "white" };
  }

  render() {
    return (
      <div
        className="topBar"
        style={{
          backgroundColor: this.state.background,
          color: this.state.color,
        }}
      >
        <ReturnButton />
        {/* <ReturnButton className="return" onReturn={this.handleReturn} /> */}
        <h1>Top Nav Bar</h1>
      </div>
    );
  }
}

export default TopBar;
