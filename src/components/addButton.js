import React from "react";
import { withRouter } from "react-router-dom";
import Button from "./Button.js";

class AddButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClickEvent = this.handleClickEvent.bind(this);
  }

  handleClickEvent() {
    this.props.history.push("/create-task");
  }
  render() {
    return (
      <div style={{ display: "inline-block", marginRight: "50px" }}>
        <Button
          onClick={this.handleClickEvent}
          style={{ fontSize: "3rem", padding: "1.5rem 1.2rem" }}
        >
          +
        </Button>
      </div>
    );
  }
}

export default withRouter(AddButton);
