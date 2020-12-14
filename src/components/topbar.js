import React from "react";
import ReturnButton from "./ReturnButton.js";

class TopBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      background: "#9B6BB3",
      color: "white",
      name: this.props.name,
    };
  }

  render() {
    return (
      <div
        className={this.props.className}
        style={{
          backgroundColor: this.state.background,
          color: this.state.color,
        }}
      >
        <div className="returnButton">
          {this.props.return && <ReturnButton />}
        </div>
        <h1>{this.state.name}</h1>
      </div>
    );
  }
}

export default TopBar;
