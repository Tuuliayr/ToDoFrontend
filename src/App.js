import React from "react";
import "./App.css";
import TopBar from "./components/TopBar.js";
import AddButton from "./components/AddButton.js";
import ListNameButton from "./components/ListNameButton.js";

class App extends React.Component {
  render() {
    return (
      <div>
        <TopBar />
        <AddButton w={(100 / 2).toString() + "%"} />
        <ListNameButton />
      </div>
    );
  }
}

export default App;
