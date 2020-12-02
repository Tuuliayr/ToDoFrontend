import React from "react";
import Button from "./Button.js";

class ListNameButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { background: "#F78CF7" };
    //this.handleClickEvent = this.handleClickEvent.bind(this);
  }

  // handleClickEvent() {
  //   this.setState((state) => ({
  //     background: "green",
  //   }));
  // }

  render() {
    return (
      <div>
        <Button
          style={{
            width: "17rem",
            height: "10rem",
            borderRadius: "2.5rem",
            background: this.state.background,
          }}
        >
          {this.props.name}
          <br />
          <br />
          {"Pri: "}
          {this.props.priority}
        </Button>
      </div>
    );
  }
}

export default ListNameButton;
