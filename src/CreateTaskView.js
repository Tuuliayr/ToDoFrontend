import React from "react";
import ReactDOM from "react-dom";
import ListDropDown from "./components/ListDropDown.js";
import PriDropDown from "./components/PriDropDown.js";
import Calendar from "./components/CalendarButton.js";
import TopBar from "./components/TopBar.js";
import axios from "axios";

// import axios from "axios";

class CreateTaskView extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = (event) => {
    // axios({
    //   method: "post",
    //   url: "/list",
    //   baseURL: "https://tamk-4a00ez62-3001-group10.herokuapp.com/api",
    //   data: { name: name },
    // })
    //   .then((response) => console.log(response))
    //   .catch((err) => console.log(err));
    // event.preventDefault();
  };

  render() {
    return (
      <div>
        <TopBar return={true} />
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
            <PriDropDown />
            <br />
            <input type="submit" name="Submit" />
          </form>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<CreateTaskView />, document.getElementById("root"));
export default CreateTaskView;
