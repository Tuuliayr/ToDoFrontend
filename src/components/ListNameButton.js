import React from "react";
import Button from "./Button.js";
import { withRouter } from "react-router-dom";
import DeleteButton from "./DeleteButton.js";

class ListNameButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { background: "#F78CF7" };
    this.handleClickEvent = this.handleClickEvent.bind(this);
  }

  handleClickEvent() {
    const path = "/list" + this.props.id + this.props.name;
    this.props.history.push(path);
  }

  render() {
    return (
      <div>
        <Button
          onClick={this.handleClickEvent}
          style={{
            width: "17rem",
            height: "10rem",
            borderRadius: "2.5rem",
            background: this.state.background,
          }}
        >
          <div className="deleteList">
            <DeleteButton onClick={this.props.handleDelete} />
          </div>
          {this.props.name}
        </Button>
      </div>
    );
  }
}

export default withRouter(ListNameButton);
