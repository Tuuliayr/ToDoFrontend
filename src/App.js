import React from "react";
import "./App.sass";
import ListView from "./ListView.js";

//    JOTAIN MAHDOLLISIA VIEWEJÄ
//import TaskView from "./TaskView.js";
//import CreateTaskView from "./CreateTaskView.js";
//import CreateList???

class App extends React.Component {
  //state jossa tieto mikä view kyseessä???
  render() {
    return (
      <div className="container">
        <ListView />
      </div>
    );
  }
}

export default App;
