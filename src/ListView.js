import React from "react";
import "./App.css";
import axiosMethods from "./axiosMethods.js";
import ListNameButton from "./components/ListNameButton.js";
import AddListButton from "./components/AddListButton.js";
import TopBar from "./components/TopBar.js";

class ListView extends React.Component {
  state = { lists: [] };

  async componentDidMount() {
    const response = await axiosMethods.get("/lists");
    this.setState({ lists: response.data });
  }

  async handleDelete(event) {
    event.stopPropagation();

    await axiosMethods.delete("list" + event.target.id);

    this.componentDidMount();
  }

  handleNewList() {
    this.componentDidMount();
  }

  render() {
    const lists = this.state.lists.map((list) => {
      if (list.id === 1) {
        return (
          <ListNameButton
            name={list.name}
            id={list.id}
            canDelete={false}
            handleDelete={this.handleDelete.bind(this)}
          />
        );
      } else {
        return (
          <ListNameButton
            name={list.name}
            id={list.id}
            canDelete={true}
            handleDelete={this.handleDelete.bind(this)}
          />
        );
      }
    });
    return (
      <div>
        <TopBar className="topBarNoReturn" name="Lists" return={false} />
        <div className="addListButton">
          <AddListButton handleNewList={this.handleNewList.bind(this)} />
        </div>
        <div className="lists">
          <ListNameButton name={"All Tasks"} id={0} canDelete={false} />
          {lists}
        </div>
      </div>
    );
  }
}

export default ListView;
