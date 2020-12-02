import React from "react";
import "./App.sass";
import ListView from "./ListView.js";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

//    JOTAIN MAHDOLLISIA VIEWEJÄ
import TaskView from "./TaskView.js";
//import CreateTaskView from "./CreateTaskView.js";
//import CreateList???

class App extends React.Component {
  //state jossa tieto mikä view kyseessä???
  render() {
    return (
      <Router>
        <div className="container">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/tasks">Tasks</Link>
          </li>
          <li>
            <Link to="/create-task">Create task</Link>
          </li>

          <Route exact path="/" component={ListView} />
          <Route exact path="/tasks" component={TaskView} />
          <Route exact path="/create-task" component={TaskView} />
        </div>
      </Router>
    );
  }
}

export default App;
