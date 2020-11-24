import React from "react";
import addIcon from "../assets/coin-ikoni.png";

class AddButton extends React.Component {
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
            className={this.state.clockwise ? "add-cw" : "add-ccw"}
            alt="mittel"
          />
        </button>
      </div>
    );
  }
}

export default AddButton;
