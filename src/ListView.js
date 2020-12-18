import React from "react";
import "./App.css";
import axios from "axios";
import ListNameButton from "./components/ListNameButton.js";
import AddListButton from "./components/AddListButton.js";
import TopBar from "./components/TopBar.js";

class ListView extends React.Component {
  state = { lists: [] };

  async componentDidMount() {
    axios({
      method: "get",
      baseURL: "https://tamk-4a00ez62-3001-group10.herokuapp.com/api/",
      url: "/lists",
    }).then((response) => {
      this.setState({ lists: response.data });
    });
  }

  async handleDelete(event) {
    event.stopPropagation();

    try {
      const response = await axios({
        method: "delete",
        baseURL: "https://tamk-4a00ez62-3001-group10.herokuapp.com/api",
        url: "/list" + event.target.id,
      });
      console.log(response);
    } catch (err) {
      console.log(err);
    }
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
        <div className="lists">
          <ListNameButton name={"Kaikki"} id={0} canDelete={false} />
          {lists}
        </div>
        <div className="addListButton">
          <AddListButton />
        </div>
      </div>
    );
  }
}

export default ListView;
