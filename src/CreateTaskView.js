import React from "react";
import ReactDOM from "react-dom";
import ListDropDown from "./components/ListDropDown.js";
import PriDropDown from "./components/PriDropDown.js";
import TopBar from "./components/TopBar.js";
import axiosMethods from "./axiosMethods.js";
import Calendar from "./components/Calendar.js";

class CreateTaskView extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      listName: "",
      priority: "",
      listId: "",
      dueDate: "",
    };
  }

  handleListChange = (event) => {
    this.setState({ listName: event.target.value });
    const value = event.target.value;
    const id = event.target.options[value].id;
    console.log("id: " + id);
    this.setState({ listId: id });
  };

  handlePriChange = (event) => {
    this.setState({ priority: event.target.value });
    console.log(event.target.value);
  };

  handleDateSubmit = (date) => {
    console.log("on handle date submit");
    const dueDate = `${date.getFullYear().toString()}-${
      date.getMonth() + 1
    }-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    console.log("dueDate: " + dueDate);
    this.setState({ dueDate: dueDate });
  };

  handleSubmit = async (event) => {
    const data = await {
      name: document.getElementById("taskName").value,
      description: document.getElementById("desc").value,
      due_date: this.state.dueDate,
      priority: Number(this.state.priority),
      list_id: Number(this.state.listId),
    };
    await axiosMethods.post("task", data);

    event.preventDefault();
  };

  render() {
    return (
      <div>
        <TopBar className="topBar" name="Create Task" return={true} />
        <div className="createTaskForm">
          <form onSubmit={this.handleSubmit}>
            <p>Task name:</p>
            <input
              id="taskName"
              type="text"
              placeholder="Write task name..."
              style={{ marginBottom: "2rem" }}
            />
            <p>Description:</p>
            <input
              id="desc"
              type="text"
              placeholder="Write description..."
              style={{ marginBottom: "2rem" }}
            />
            <p>Deadline:</p>
            <Calendar handleDateSubmit={this.handleDateSubmit.bind(this)} />
            <br />
            <p>Add to list:</p>
            <ListDropDown handleclick={this.handleListChange.bind(this)} />
            <br />
            <p>Choose priority:</p>
            <PriDropDown handleclick={this.handlePriChange.bind(this)} />
            <br />
            <button type="submit">Create task</button>
            {/* <input type="text" value={this.state.priority} /> */}
            {/* <button onClick={this.handleChange.bind(this)}>Add task</button> */}
          </form>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<CreateTaskView />, document.getElementById("root"));
export default CreateTaskView;
