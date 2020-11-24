import React from "react";

class ListNameButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { color: "pink" };
    this.handleClickEvent = this.handleClickEvent.bind(this);
  }

  handleClickEvent() {
    this.setState((state) => ({
      color: "green",
    }));
  }

  render() {
    return (
      <div
        style={{
          display: "inline-block",
          color: this.state.color,
        }}
      >
        <button
          className="listNameButton"
          color="green"
          title="List name"
        ></button>
      </div>
    );
  }
}

export default ListNameButton;
