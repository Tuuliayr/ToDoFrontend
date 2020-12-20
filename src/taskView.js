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
      console.log(response);
      this.setState({ tasks: response.data });
    }
  }

  async handleDelete(event) {
    event.stopPropagation();
    await axiosMethods.delete("/task" + event.target.id);

    this.componentDidMount();
  }

  render() {
    const tasks = this.state.tasks.map((task) => {
      let dueDate = "";
      if (task.due_date !== null) {
        const t = task.due_date.split(/[-T:Z.]/);
        const jsDate = new Date(
          Date.UTC(t[0], t[1] - 1, t[2], t[3], t[4], t[5])
        );
        dueDate = `${jsDate.getDate()}.${
          jsDate.getMonth() + 1
        }.${jsDate.getFullYear()} at ${jsDate.getUTCHours()}.${jsDate.getMinutes()}`;
      }
      return (
        <TaskNameButton
          name={task.name}
          id={task.id}
          dueDate={dueDate}
          priority={task.priority}
          listId={task.list_id}
          isDone={task.is_done}
          handleDelete={this.handleDelete.bind(this)}
        />
      );
    });

    return (
      <div>
        <TopBar
          className="topBar"
          name={"Tasks in " + this.state.listName}
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
