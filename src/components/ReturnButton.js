import React from "react";
import Button from "./Button.js";
import PropTypes from "prop-types";

import returnIcon from "../assets/back_button.png";

class ReturnButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Button onClick={this.props.onReturn}>
          <img src={returnIcon} alt="returnIcon" style={{ height: "70px" }} />
        </Button>
      </div>
    );
  }
}

export default ReturnButton;
