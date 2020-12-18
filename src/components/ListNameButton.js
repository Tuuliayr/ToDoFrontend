import React from "react";
import Button from "./Button.js";
import { withRouter } from "react-router-dom";
import DeleteButton from "./DeleteButton.js";

class ListNameButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { background: "#F78CF7", canDelete: this.props.canDelete };
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
            {this.props.canDelete && (
              <DeleteButton
                onClick={this.props.handleDelete}
                id={this.props.id}
              />
            )}
          </div>
          {this.props.name}
        </Button>
      </div>
    );
  }
}

export default withRouter(ListNameButton);
