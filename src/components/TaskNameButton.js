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
  }

  handleClickEvent() {
    const path = "/task" + this.props.id;
    this.props.history.push(path);
  }

  async handleDelete(event) {
    event.stopPropagation();

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
    window.location.reload();
  }

  async handleCheck(event) {
    event.stopPropagation();
    // try {
    //   const response = await axios({

    //   })
    // }
    console.log("checked");
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
            <input type="checkbox" onClick={this.handleCheck}></input>
            <div className="taskName">{this.props.name}</div>
            <div className="deleteTask">
              <DeleteButton onClick={this.handleDelete.bind(this)} />
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
