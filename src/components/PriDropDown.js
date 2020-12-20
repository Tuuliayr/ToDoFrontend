import React from "react";

class PriDropDown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "Select priority",
      priorities: [{ priority: "1" }, { priority: "2" }, { priority: "3" }],
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    const priorities = this.state.priorities.map((list) => (
      <option name={list.priority}>{list.priority}</option>
    ));
    return (
      <form>
        <label>
          <select onChange={this.props.handleclick}>
            <option>No priority</option>
            {priorities}
          </select>
        </label>
      </form>
    );
  }
}

export default PriDropDown;
