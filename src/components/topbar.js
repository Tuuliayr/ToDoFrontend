import React from "react";

class TopBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { background: "palevioletred", color: "white" };
  }

  render() {
    return (
      <div className="topBar">
        <h1
          style={{
            backgroundColor: this.state.background,
            color: this.state.color,
          }}
        >
          Top Nav Bar
        </h1>
      </div>
    );
  }
}

export default TopBar;
