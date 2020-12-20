import React from "react";
import axiosMethods from "../axiosMethods.js";

class ListDropDown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lists: [],
    };
  }

  async componentDidMount() {
    const response = await axiosMethods.get("/lists");
    response.data.splice(0, 1);
    this.setState({ lists: response.data });
  }

  render() {
    const lists = this.state.lists.map((list) => (
      <option name={list.name} id={list.id}>
        {list.name}
      </option>
    ));
    return (
      <form>
        <label>
          <select onChange={this.props.handleChange}>
            <option>No list</option>
            {lists}
          </select>
        </label>
      </form>
    );
  }
}

export default ListDropDown;
