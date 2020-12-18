import React from "react";
import Button from "./Button.js";
import { withRouter } from "react-router-dom";
import DeleteButton from "./DeleteButton.js";
import axios from "axios";

class TaskNameButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { background: "#FF83FF", checked: !!this.props.isDone };
    this.handleClickEvent = this.handleClickEvent.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
    axios.defaults.baseURL =
      "https://tamk-4a00ez62-3001-group10.herokuapp.com/api";
  }

  handleClickEvent() {
    const path = "/task" + this.props.id;
    this.props.history.push(path);
  }

  async handleCheck(event) {
    // don't let the button under to be clicked.
    event.stopPropagation();
    try {
      const response = await axios.patch("/patchTask", {
        is_done: !this.state.checked,
        id: this.props.id,
      });
      console.log(response);
    } catch (err) {
      console.log(err);
    }
    this.setState({ checked: !this.state.checked });

    console.log("checked: " + this.state.checked);
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
          {"List: " + this.props.listId}
        </Button>
      </div>
    );
  }
}

export default withRouter(TaskNameButton);
