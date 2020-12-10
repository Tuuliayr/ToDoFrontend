import React from "react";
import ReactDOM from "react-dom";
import ListDropDown from "./components/ListDropDown.js";
import PriDropDown from "./components/PriDropDown.js";
import TopBar from "./components/TopBar.js";

// import axios from "axios";

class CreateTaskView extends React.Component {
  state = { lists: [] };

  // async componentDidMount() {
  //   axios({
  //     method: "get",
  //     baseURL:
  //       "https://tamk-4a00ez62-3001-group10.herokuapp.com/api/create-task",
  //     url: "/",
  //   }).then((response) => {
  //     this.setState({ tasks: response.data });
  //   });
  // }

  render() {
    return (
      <div>
        <TopBar className="topBar" return={true} />
        <div className="createTaskForm">
          <form>
            <p>Task name:</p>
            <input type="text" style={{ marginBottom: "2rem" }} />
            <p>Deadline:</p>
            <input type="text" style={{ marginBottom: "2rem" }} />
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
