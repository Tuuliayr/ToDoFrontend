import React from "react";
import Button from "./Button.js";
import { withRouter } from "react-router-dom";
import DeleteButton from "./DeleteButton.js";
import axiosMethods from "../axiosMethods.js";

class TaskNameButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { background: "#FF83FF", checked: !!this.props.isDone };
    this.handleClickEvent = this.handleClickEvent.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
  }

  handleClickEvent() {
    const path = "/task" + this.props.id;
    this.props.history.push(path);
  }

  async handleCheck(event) {
    // don't let the button under to be clicked.
    event.stopPropagation();
    const response = await axiosMethods.patch("/patchTask", {
      is_done: !this.state.checked,
      id: this.props.id,
    });

    this.setState({ checked: !this.state.checked });

    console.log(response);
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
          <div className="taskHeadline">
            <input
              type="checkbox"
              onClick={this.handleCheck}
              defaultChecked={this.state.checked}
            ></input>
            <div className="taskName">{this.props.name}</div>
            <div className="deleteTask">
              <DeleteButton
                onClick={this.props.handleDelete}
                id={this.props.id}
              />
            </div>
          </div>
          <br />
          {"Pri: "}
          {this.props.priority}
          <br />
          <br />
          {"Due date: "}
          {this.props.dueDate}
          {"List: " + this.props.listId}
        </Button>
      </div>
    );
  }
}

export default withRouter(TaskNameButton);
