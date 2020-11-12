import React from "react";
import addIcon from "./assets/coin-ikoni.png";

class addButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clockwise: true,
    };
    this.handleClickEvent = this.handleClickEvent.bind(this);
  }

  handleClickEvent() {
    this.setState((state) => ({
      clockwise: !state.clockwise,
    }));
  }

  render() {
    return (
      <div style={{ display: "inline-block", width: this.props.w }}>
        <button onClick={this.handleClickEvent}>
          <img
            src={addIcon}
            onClick={this.handleClickEvent}
            className={this.state.clockwise ? "mittel-cw" : "mittel-ccw"}
            alt="mittel"
          />
          {this.state.clockwise
            ? "Turning clockwise"
            : "Turning counterclockwise"}
        </button>
      </div>
    );
  }
}

export default addButton;
