import React from "react";
import "./App.sass";
import AddButton from "./components/AddButton.js";
import axios from "axios";
import ListNameButton from "./components/ListNameButton.js";

class CreateTaskView extends React.Component {
  state = { tasks: [] };

  async componentDidMount() {
    axios({
      method: "get",
      baseURL:
        "http://tamk-4a00ez62-3001-group10.herokuapp.com/api/create-task",
      url: "/",
    }).then((response) => {
      this.setState({ tasks: response.data });
    });
  }

  handleCreate = () => {
    // this.createTask({ likes: 0, text: "" });
  };

  render() {
    const tasks = this.state.tasks.map((task) => (
      <ListNameButton name={task.name} priority={task.priority} />
    ));
    return (
      <div>
        <body>
          {tasks}
          <AddButton onAddNew={this.handleCreate} />
        </body>
      </div>
    );
  }
}

export default CreateTaskView;
