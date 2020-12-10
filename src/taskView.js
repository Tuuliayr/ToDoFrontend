import React from "react";
import AddButton from "./components/AddButton.js";
import axios from "axios";
import TaskNameButton from "./components/TaskNameButton.js";
import TopBar from "./components/TopBar.js";

class TaskView extends React.Component {
  state = { tasks: [], listName: "All Tasks" };

  async componentDidMount() {
    const id = this.props.match.params.listId;
    let path = "/";
    if (id > 0) {
      path = "/list" + id;
      //get name for the list
      axios({
        method: "get",
        baseURL: "https://tamk-4a00ez62-3001-group10.herokuapp.com/api",
        url: "/findList" + id,
      }).then((response) => {
        this.setState({ listName: response.data });
      });
    }
    //get tasks for the list
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
        <TopBar
          className="topBar"
          name={"Tasks in " + this.state.listName}
          return={true}
        />
        <div className="tasks">{tasks}</div>
        <div className="addTaskButton">
          <AddButton />
        </div>
      </div>
    );
  }
}

export default TaskView;
