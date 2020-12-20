import React from "react";
import Button from "./Button.js";
import DeleteButton from "./DeleteButton.js";
import axiosMethods from "../axiosMethods.js";

class TaskNameButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      background: "#FF83FF",
      checked: !!this.props.isDone,
    };
    this.handleCheck = this.handleCheck.bind(this);
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
            <div className="taskName" style={{ "font-size": "1.25rem" }}>
              {this.props.name}
            </div>
            <div className="deleteTask">
              <DeleteButton
                onClick={this.props.handleDelete}
                id={this.props.id}
              />
            </div>
          </div>
          <br />
          {this.props.showPri && "Pri: "}
          {this.props.showPri && this.props.priority}
          <br />
          {!!this.props.dueDate && "Due date: "}
          <br />
          {this.props.dueDate}
        </Button>
      </div>
    );
  }
}

export default TaskNameButton;
