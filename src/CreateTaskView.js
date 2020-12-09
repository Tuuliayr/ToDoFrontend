import React from "react";
import ReactDOM from "react-dom";
import "./App.sass";
import ListDropDown from "./components/ListDropDown.js";
import PriDropDown from "./components/PriDropDown.js";
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
      <div className="form">
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
    );
  }
}

ReactDOM.render(<CreateTaskView />, document.getElementById("root"));
export default CreateTaskView;
