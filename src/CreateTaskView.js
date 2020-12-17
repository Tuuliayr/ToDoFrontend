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
      listName: "",
      priority: "",
      list_id: "",
      lists: [],
    };
  }

  async componentDidMount() {
    axios({
      method: "get",
      baseURL: "https://tamk-4a00ez62-3001-group10.herokuapp.com/api/",
      url: "/lists",
    }).then((response) => {
      this.setState({ lists: response.data });
    });
  }

  // handleChange = (event) => {
  //   this.setState({ [event.target.name]: event.target.value });
  //   console.log(event.target.name);
  //   console.log(event.target.value);
  // };

  handleListChange = (event) => {
    this.setState({ listName: event.target.value });
    console.log(event.target.value);
    console.log(event.target);
  };

  handlePriChange = (event) => {
    this.setState({ priority: event.target.value });
    console.log(event.target.value);
  };

  handleSubmit = (event) => {
    axios({
      method: "post",
      url: "/task",
      baseURL: "https://tamk-4a00ez62-3001-group10.herokuapp.com/api",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      data: {
        name: document.getElementById("taskName").value,
        priority: Number(this.state.priority),
        list_id: 3,
      },
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
              id="taskName"
              type="text"
              placeholder="Task name..."
              style={{ marginBottom: "2rem" }}
            />
            <p>Description:</p>
            <input
              id="desc"
              type="text"
              placeholder="Write describtion..."
              style={{ marginBottom: "2rem" }}
            />
            <p>Deadline:</p>
            <Calendar />
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
