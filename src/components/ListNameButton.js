import React from "react";
import Button from "./Button.js";

class ListNameButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { background: "pink" };
    this.handleClickEvent = this.handleClickEvent.bind(this);
  }

  handleClickEvent() {
    this.setState((state) => ({
      background: "green",
    }));
  }

  render() {
    return (
      <div>
        <Button style={{ background: this.state.background }}>
          {this.props.name}
        </Button>
      </div>
    );
  }
}

export default ListNameButton;
