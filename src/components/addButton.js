import React from "react";
import PropTypes from "prop-types";

import addIcon from "../assets/coin-ikoni.png";
import Button from "./Button.js";

class AddButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fontSize: "3rem",
    };
  }

  propTypes = {
    onAddNewTask: PropTypes.func.isRequired,
  };

  render() {
    return (
      <div style={{ display: "inline-block" }}>
        <Button
          onClick={this.props.onAddNewTask}
          style={{ fontSize: this.state.fontSize }}
        >
          {/* <img src={addIcon} alt="AddIcon" /> */}+
        </Button>
      </div>
    );
  }
}

export default AddButton;
