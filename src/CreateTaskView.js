import React from "react";
import ReactDOM from "react-dom";
import ListDropDown from "./components/ListDropDown.js";
import PriDropDown from "./components/PriDropDown.js";
import Calendar from "./components/CalendarButton.js";
import TopBar from "./components/TopBar.js";
import axios from "axios";

class CreateTaskView extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleChange = this.handleChange.bind(this);
    this.state = {
      name: "",
      priority: "",
      list_id: "",
    };
  }

  // handleChange = (event) => {
  //   this.setState({ [event.target.name]: event.target.value });
  // };

  handleSubmit = (event) => {
    axios({
      method: "post",
      url: "/task",
      baseURL: "https://tamk-4a00ez62-3001-group10.herokuapp.com/api",
      data: { name: "Tiskaapa", priority: event.priority.priority, list_id: 2 },
    })
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
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
              type="text"
              placeholder="Task name..."
              style={{ marginBottom: "2rem" }}
            />
            <p>Deadline:</p>
            <Calendar />
            <br />
            <p>Add to list:</p>
            <ListDropDown />
            <br />
            <p>Choose priority:</p>
            <PriDropDown
              // name={"priority"}
              value={this.state.priority}
              // onChange={this.handleChange.bind(this)}
            />
            <br />
            <button type="submit">Add</button>
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
