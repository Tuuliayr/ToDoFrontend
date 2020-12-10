import React from "react";
import ReactDOM from "react-dom";
import ListDropDown from "./components/ListDropDown.js";
import PriDropDown from "./components/PriDropDown.js";
import Calendar from "./components/CalendarButton.js";
import TopBar from "./components/TopBar.js";

// import axios from "axios";

class CreateTaskView extends React.Component {
  state = { lists: [] };

  render() {
    return (
      <div>
        <TopBar className="topBar" return={true} />
        <div className="createTaskForm">
          <form>
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
          </form>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<CreateTaskView />, document.getElementById("root"));
export default CreateTaskView;
