import React from "react";
import "./App.sass";
import ListView from "./ListView.js";
import CreateTaskView from "./CreateTaskView.js";
import TopBar from "./components/TopBar.js";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
//    JOTAIN MAHDOLLISIA VIEWEJÄ
import TaskView from "./TaskView.js";
//import CreateTaskView from "./CreateTaskView.js";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="container">
          <TopBar />
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/create-task">Create task</Link>
          </li>
          <Route exact path="/" component={ListView} />
          <Route exact path={"/list:listId([0-9]+)"} component={TaskView} />
          <Route exact path="/create-task" component={CreateTaskView} />
        </div>
      </Router>
    );
  }
}

export default App;
