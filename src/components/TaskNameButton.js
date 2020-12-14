import React from "react";
import Button from "./Button.js";
import { withRouter } from "react-router-dom";
import DeleteButton from "./DeleteButton.js";

class TaskNameButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { background: "#FF83FF" };
    this.handleClickEvent = this.handleClickEvent.bind(this);
  }

  handleClickEvent() {
    const path = "/task" + this.props.id;
    this.props.history.push(path);
  }

  handleDelete(event) {
    console.log("on delete");
    event.stopPropagation();
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
            <div className="taskName">{this.props.name}</div>
            <div className="deleteTask">
              <DeleteButton onClick={this.handleDelete} />
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
