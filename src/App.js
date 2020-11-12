import React from "react";
import "./App.css";
import TopBar from "./components/TopBar.js";
import AddButton from "./components/AddButton.js";

class App extends React.Component {
  render() {
    return (
      <div>
        <TopBar />
        <AddButton w={(100 / 2).toString() + "%"} />
      </div>
    );
  }
}

export default App;
