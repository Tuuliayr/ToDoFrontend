import React from "react";
import "./App.css";
import AddButton from "./components/addButton.js";
import TopBar from "./components/TopBar.js";

class App extends React.Component {
  render() {
    return (
      <div>
        <TopBar />
      </div>
    );
  }
}

export default App;
