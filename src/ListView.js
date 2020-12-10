import React from "react";
import "./App.css";
import axios from "axios";
import ListNameButton from "./components/ListNameButton.js";
import Example from "./components/Example";
import TopBar from "./components/TopBar.js";

class ListView extends React.Component {
  state = { lists: [] };

  async componentDidMount() {
    axios({
      method: "get",
      baseURL: "https://tamk-4a00ez62-3001-group10.herokuapp.com/api/",
      url: "/lists",
    }).then((response) => {
      this.setState({ lists: response.data });
    });
  }

  render() {
    const lists = this.state.lists.map((list) => (
      <ListNameButton name={list.name} id={list.id} />
    ));
    return (
      <div>
        <TopBar className="topBarNoReturn" name="Lists" return={false} />
        <div className="lists">
          <ListNameButton name={"Kaikki"} id={0} />
          {lists}
        </div>
        <div className="addListButton">
          <Example />
        </div>
      </div>
    );
  }
}

export default ListView;
