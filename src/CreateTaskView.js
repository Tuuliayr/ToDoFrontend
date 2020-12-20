import React from "react";
import ReactDOM from "react-dom";
import ListDropDown from "./components/ListDropDown.js";
import PriDropDown from "./components/PriDropDown.js";
import TopBar from "./components/TopBar.js";
import axiosMethods from "./axiosMethods.js";
import Calendar from "./components/Calendar.js";
import Button from "./components/Button.js";
// import { withRouter } from "react-router-dom";

class CreateTaskView extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      listName: "name",
      priority: 0,
      listId: 1,
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
    this.setState({ dueDate: dueDate });
  };

  changeView = async () => {
    const data = await {
      name: document.getElementById("taskName").value,
      due_date: this.state.dueDate,
      priority: Number(this.state.priority),
      list_id: Number(this.state.listId),
    };

    await axiosMethods.post("task", data);

    this.props.history.goBack();
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    // const data = await {
    //   name: document.getElementById("taskName").value,
    //   due_date: this.state.dueDate,
    //   priority: Number(this.state.priority),
    //   list_id: Number(this.state.listId),
    // };
    // await axiosMethods.post("task", data);
    // const path = "/list" + 0 + "Kaikki";
    // this.props.history.push(path);
    // this.props.history.goBack();
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
            <p>Deadline:</p>
            <Calendar handleDateSubmit={this.handleDateSubmit.bind(this)} />
            <br />
            <p>Add to list:</p>
            <ListDropDown handleChange={this.handleListChange.bind(this)} />
            <br />
            <p>Choose priority:</p>
            <PriDropDown handleChange={this.handlePriChange.bind(this)} />
            <br />
            <Button onClick={this.changeView}>Create Task</Button>
          </form>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<CreateTaskView />, document.getElementById("root"));
export default CreateTaskView;
