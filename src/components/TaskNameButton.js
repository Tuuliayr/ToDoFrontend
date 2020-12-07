import React from "react";
import Button from "./Button.js";
import { withRouter } from "react-router-dom";

class TaskNameButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { background: "#F78CF7" };
    this.handleClickEvent = this.handleClickEvent.bind(this);
  }

  handleClickEvent() {
    const path = "/task" + this.props.id;
    this.props.history.push(path);
  }

  render() {
    return (
      <div>
        <Button
          onClick={this.handleClickEvent}
          style={{
            width: "17rem",
            height: "8rem",
            borderRadius: "2.5rem",
            background: this.state.background,
          }}
        >
          {this.props.name}
          <br />
          <br />
          {"Pri: "}
          {this.props.priority}
          <br />
          {"List: " + this.props.listId}
        </Button>
      </div>
    );
  }
}

export default withRouter(TaskNameButton);
