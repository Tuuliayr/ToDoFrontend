import React from "react";
import AddButton from "./components/AddButton.js";
import axios from "axios";
import TaskNameButton from "./components/TaskNameButton.js";
import TopBar from "./components/TopBar.js";

class TaskView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.listId,
      tasks: [],
      listName: this.props.match.params.listName,
    };
  }

  async componentDidMount() {
    let path = "/";
    if (this.state.id > 0) {
      path = "/list" + this.state.id;
    }
    //get tasks of the list
    try {
      axios({
        method: "get",
        baseURL: "https://tamk-4a00ez62-3001-group10.herokuapp.com/api",
        url: path,
      }).then((response) => {
        this.setState({ tasks: response.data });
      });
    } catch (err) {
      console.log(err);
    }
  }

  async handleDelete(event) {
    event.stopPropagation();

    try {
      const response = await axios({
        method: "delete",
        baseURL: "https://tamk-4a00ez62-3001-group10.herokuapp.com/api",
        url: "/task" + event.target.id,
      });
      console.log(response);
    } catch (err) {
      console.log(err);
    }

    this.componentDidMount();
  }

  render() {
    const tasks = this.state.tasks.map((task) => (
      <TaskNameButton
        name={task.name}
        id={task.id}
        dueDate={task.due_date}
        priority={task.priority}
        listId={task.list_id}
        isDone={task.is_done}
        handleDelete={this.handleDelete.bind(this)}
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
