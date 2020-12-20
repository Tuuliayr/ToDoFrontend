import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import ListView from "./ListView.js";
import CreateTaskView from "./CreateTaskView.js";
import TaskView from "./TaskView.js";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="main">
          <Route exact path="/" component={ListView} />
          <Route
            exact
            path={"/list:listId([0-9]+):listName([0-9a-zA-ZdåäöÅÄÖ-]+)"}
            component={TaskView}
          />
          <Route exact path="/create-task" component={CreateTaskView} />
        </div>
      </Router>
    );
  }
}

export default App;
