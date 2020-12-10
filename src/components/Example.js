/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React from "react";
import {
  Button,
  UncontrolledPopover,
  PopoverHeader,
  PopoverBody,
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// import PropTypes from "prop-types";
import "./Button.css";
import axios from "axios";

// import ListForm from "./ListForm.js";

const Example = (props) => {
  const [name, setname] = React.useState("");

  const handleChange = (event) => {
    setname(event.target.value);
  };

  const handleSubmit = (event) => {
    axios({
      method: "post",
      url: "/list",
      baseURL: "https://tamk-4a00ez62-3001-group10.herokuapp.com/api",
      data: { name: name },
    })
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
    console.log("In handle Submit");
    event.preventDefault();
  };

  return (
    <div>
      <Button
        className="primary"
        id="PopoverLegacy"
        type="button"
        style={{ fontSize: "3rem" }}
      >
        +pop
      </Button>
      <UncontrolledPopover
        trigger="legacy"
        placement="top"
        target="PopoverLegacy"
      >
        <PopoverHeader>Add new list</PopoverHeader>
        <PopoverBody>
          <form onSubmit={handleSubmit}>
            <label>
              List name:
              <br />
              <input
                type="text"
                placeholder="list name"
                value={name}
                onChange={handleChange}
              />
            </label>
            <br />
            <br />
            <input type="submit" name="Submit" />
          </form>
        </PopoverBody>
      </UncontrolledPopover>
    </div>
  );
};

export default Example;
