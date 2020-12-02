import React from "react";
import ReactDOM from "react-dom";
import "./App.sass";
import axios from "axios";

class CreateTaskView extends React.Component {
  state = { tasks: [] };

  async componentDidMount() {
    axios({
      method: "get",
      baseURL:
        "http://tamk-4a00ez62-3001-group10.herokuapp.com/api/create-task",
      url: "/",
    }).then((response) => {
      this.setState({ tasks: response.data });
    });
  }

  render() {
    return (
      <form>
        <p>Task name:</p>
        <input type="text" />
        <p>Deadline:</p>
        <input type="text" />
        <p>Add to list:</p>
        <input type="text" />
        <p>Add priority:</p>
        <input type="text" />
      </form>
    );
  }
}

ReactDOM.render(<CreateTaskView />, document.getElementById("root"));
export default CreateTaskView;
