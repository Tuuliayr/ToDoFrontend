import React from "react";
import "./App.sass";
import TopBar from "./components/TopBar.js";
import AddButton from "./components/AddButton.js";
import axios from "axios";
import ListNameButton from "./components/ListNameButton.js";

class TaskView extends React.Component {
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

  handleCreate = () => {
    // this.createTask({ likes: 0, text: "" });
  };

  render() {
    const li = this.state.tasks.map((task) => (
      <li>{JSON.stringify(task.name)}</li>
    ));
    return (
      <div>
        <TopBar />
        <ul>{li}</ul>
        <AddButton onAddNew={this.handleCreate} />
        <ListNameButton />
      </div>
    );
  }
}

export default TaskView;
