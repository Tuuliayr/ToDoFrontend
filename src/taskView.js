import React from "react";
import AddButton from "./components/AddButton.js";
import axiosMethods from "./axiosMethods.js";
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
    const response = await axiosMethods.get(path);
    if (response !== undefined) {
      this.setState({ tasks: response.data });
    }
  }

  async handleDelete(event) {
    event.stopPropagation();
    await axiosMethods.delete("/task" + event.target.id);

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
          name={"Tasks in " + this.state.listName.split("-").join(" ")}
          return={true}
        />
        <div className="addTaskButton">
          <AddButton />
        </div>
        <div className="tasks">{tasks}</div>
      </div>
    );
  }
}

export default TaskView;
