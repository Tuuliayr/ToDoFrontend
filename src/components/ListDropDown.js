import React from "react";
import axios from "axios";

class ListDropDown extends React.Component {
  //state = { lists: [] };

  constructor(props) {
    super(props);
    this.state = {
      lists: [],
    };
    this.handleChange = this.handleChange.bind(this);
  }

  async componentDidMount() {
    axios({
      method: "get",
      baseURL: "https://tamk-4a00ez62-3001-group10.herokuapp.com/api/",
      url: "/lists",
    }).then((response) => {
      this.setState({ lists: response.data });
    });
  }

  handleChange(event) {
    this.setState({ name: event.target.value });
  }

  render() {
    const lists = this.state.lists.map((list) => (
      <option name={list.name} id={list.id}>
        {list.name}
      </option>
    ));
    // const { lists } = this.state;
    return (
      // <select onChange={this.handleChange}>
      //   {this.state.lists.map((list) => {
      //     return <option name={this.props.name}> {this.props.name} </option>;
      //   })}
      // </select>
      <form>
        <label>
          <select onChange={this.props.handleclick}>
            <option>No list</option>
            {lists}
          </select>
        </label>
      </form>
    );
  }
}

export default ListDropDown;
