import React from "react";
import Button from "./Button.js";
import { withRouter } from "react-router-dom";
import DeleteButton from "./DeleteButton.js";
import axios from "axios";

class TaskNameButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { background: "#FF83FF" };
    this.handleClickEvent = this.handleClickEvent.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleClickEvent() {
    const path = "/task" + this.props.id;
    this.props.history.push(path);
  }

  async handleDelete(event) {
    try {
      const response = await axios({
        method: "delete",
        baseURL: "https://tamk-4a00ez62-3001-group10.herokuapp.com/api",
        url: "/task" + this.props.id,
      });
      console.log(response);
    } catch (err) {
      console.log(err);
    }
    event.preventDefault();
    event.stopPropagation();
  }

  render() {
    return (
      <div>
        <Button
          onClick={this.handleDelete}
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
