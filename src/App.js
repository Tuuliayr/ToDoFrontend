import React from "react";
import "./App.css";
import TopBar from "./components/TopBar.js";
import AddButton from "./components/AddButton.js";
import axios from "axios";
import ListNameButton from "./components/ListNameButton.js";

class App extends React.Component {
  state = { tasks: [] };

  async componentDidMount() {
    axios({
      method: "get",
      baseURL: "http://localhost:8080/tasks",
      url: "/",
    }).then((response) => {
      this.setState({ tasks: response.data });
    });
  }

  render() {
    const li = this.state.tasks.map((task) => (
      <li>{JSON.stringify(task.name)}</li>
    ));
    return (
      <div>
        <TopBar />
        <ul>{li}</ul>
        <AddButton />
        <ListNameButton />
      </div>
    );
  }
}

export default App;
