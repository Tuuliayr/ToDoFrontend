import React from "react";
import "./App.sass";
import axios from "axios";
import ListNameButton from "./components/ListNameButton.js";
import Example from "./components/Example";
class ListView extends React.Component {
  state = { lists: [] };

  async componentDidMount() {
    axios({
      method: "get",
      baseURL: "https://tamk-4a00ez62-3001-group10.herokuapp.com/api/lists",
      url: "/",
    }).then((response) => {
      this.setState({ lists: response.data });
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
        <body>
          <ListNameButton name={"Kaikki"} id={0} />
          {lists}
          <Example></Example>
        </body>
      </div>
    );
  }
}

export default ListView;
