import React from "react";
import ReactDOM from "react-dom";
import ListDropDown from "./components/ListDropDown.js";
import PriDropDown from "./components/PriDropDown.js";
import Calendar from "./components/CalendarButton.js";
import TopBar from "./components/TopBar.js";
import axios from "axios";

// const CreateTaskView = (props) => {
//   const [priority, setPriority] = React.useState("");

//   const handleChange = (event) => {
//     setPriority(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     this.isMounted = true;
//     axios({
//       method: "post",
//       url: "/task",
//       baseURL: "https://tamk-4a00ez62-3001-group10.herokuapp.com/api",
//       headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json",
//       },
//       data: {
//         name: "Tiskaapa",
//         priority: priority,
//         list_id: 2,
//       },
//     })
//       .then((result) => {
//         if (this.isMounted) {
//           this.setState({
//             news: result.data.hits,
//           });
//         }
//         return () => {
//           this.isMounted = false;
//         };
//       })
//       .then((response) => console.log(response))
//       .catch((err) => console.log(err));
//     event.preventDefault();
//   };

//   return (
//     <div>
//       <TopBar className="topBar" name="Create Task" return={true} />
//       <div className="createTaskForm">
//         <div onSubmit={handleSubmit}>
//           <p>Task name:</p>
//           <input
//             type="text"
//             placeholder="Task name..."
//             style={{ marginBottom: "2rem" }}
//           />
//           <p>Deadline:</p>
//           <Calendar />
//           <br />
//           <p>Add to list:</p>
//           <ListDropDown />
//           <br />
//           <p>Choose priority:</p>
//           <PriDropDown value={priority} onChange={handleChange} />
//           <br />
//           <button type="submit">Create task</button>
//           {/* <input type="text" value={this.state.priority} /> */}
//           {/* <button onClick={this.handleChange.bind(this)}>Add task</button> */}
//         </div>
//       </div>
//     </div>
//   );
// };

class CreateTaskView extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleChange = this.handleChange.bind(this);
    this.state = {
      name: "",
      priority: "",
      list_id: "",
      listName: "",
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
    console.log(event.target.value);
  };

  handleListChange = (event) => {
    this.setState({ listName: event.target.value });
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
        name: "Tiskaapa",
        priority: event.target.value, //201
        // priority: this.state.priority, //200
        list_id: 2,
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
              type="text"
              placeholder="Task name..."
              style={{ marginBottom: "2rem" }}
            />
            <p>Deadline:</p>
            <Calendar />
            <br />
            <p>Add to list:</p>
            <ListDropDown handleclick={this.handleChange.bind(this)} />
            <br />
            <p>Choose priority:</p>
            <PriDropDown handleclick={this.handleChange.bind(this)} />
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
