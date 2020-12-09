import React from "react";
import "./App.sass";
import AddButton from "./components/AddButton.js";
import axios from "axios";
import TaskNameButton from "./components/TaskNameButton.js";
import TopBar from "./components/TopBar.js";

class TaskView extends React.Component {
  state = { tasks: [] };

  async componentDidMount() {
    const id = this.props.match.params.listId;
    let path = "/";
    if (id > 0) {
      path = "/list" + id;
    }
    axios({
      method: "get",
      baseURL: "https://tamk-4a00ez62-3001-group10.herokuapp.com/api",
      url: path,
    }).then((response) => {
      this.setState({ tasks: response.data });
    });
  }

  render() {
    const tasks = this.state.tasks.map((task) => (
      <TaskNameButton
        name={task.name}
        id={task.id}
        priority={task.priority}
        listId={task.list_id}
      />
    ));
    return (
      <div>
        <TopBar return={true} />
        <div className="body">
          {tasks}
          <AddButton />
        </div>
      </div>
    );
  }
}

export default TaskView;
