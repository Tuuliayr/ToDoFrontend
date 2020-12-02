import React from "react";
import "./App.sass";
import AddButton from "./components/AddButton.js";
import axios from "axios";
import ListNameButton from "./components/ListNameButton.js";

class ListView extends React.Component {
  state = { lists: [] };

  async componentDidMount() {
    axios({
      method: "get",
<<<<<<< HEAD
      baseURL: "https://tamk-4a00ez62-3001-group10.herokuapp.com/api/lists",
=======
      baseURL: "http://tamk-4a00ez62-3001-group10.herokuapp.com/api/lists",
>>>>>>> refs/remotes/origin/main
      url: "/",
    }).then((response) => {
      this.setState({ lists: response.data });
    });
  }

  handleCreate = () => {
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
          <AddButton className="addButton" onAddNew={this.handleCreate} />
        </body>
      </div>
    );
  }
}

export default ListView;
