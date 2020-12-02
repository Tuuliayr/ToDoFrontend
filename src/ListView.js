import React from "react";
import "./App.sass";
import TopBar from "./components/TopBar.js";
import AddButton from "./components/AddButton.js";
import axios from "axios";
import ListNameButton from "./components/ListNameButton.js";
import Example from "./components/Example";
class ListView extends React.Component {
  state = { lists: [] };

  async componentDidMount() {
    axios({
      method: "get",
      baseURL: "http://tamk-4a00ez62-3001-group10.herokuapp.com/api/lists",
      url: "/",
    }).then((response) => {
      this.setState({ lists: response.data });
      this.state.lists.push({ id: 0, name: "Kaikki" });
    });
  }

  changeToCreateView = () => {
    console.log("on chance to create view");
    // this.createTask({ likes: 0, text: "" });
  };

  render() {
    const lists = this.state.lists.map((list) => (
      <ListNameButton name={list.name} />
    ));
    return (
      <div>
        <TopBar />
        <body>
          {lists}
          <Example></Example>
          <AddButton className="addButton" onAddNew={this.changeToCreateView} />
        </body>
      </div>
    );
  }
}

export default ListView;
