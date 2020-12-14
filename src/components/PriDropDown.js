import React from "react";

class PriDropDown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "Select priority",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <form>
        <label>
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="0">No priority</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </label>
      </form>
    );
  }
}

export default PriDropDown;
