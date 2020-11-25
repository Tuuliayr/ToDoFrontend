import React from "react";
import PropTypes from "prop-types";

import addIcon from "../assets/coin-ikoni.png";
import Button from "./Button.js";

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

  propTypes = {
    onAddNewTask: PropTypes.func.isRequired,
  };

  render() {
    return (
      <div style={{ display: "inline-block" }}>
        <Button onClick={this.props.onAddNewTask}>
          <img
            src={addIcon}
            // onClick={this.props.onAddNewTask}
            // className={this.state.clockwise ? "add-cw" : "add-ccw"}
            alt="mittel"
          />
        </Button>
      </div>
    );
  }
}

export default AddButton;
