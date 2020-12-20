import React, { useState } from "react";
import { Button, Popover, PopoverHeader, PopoverBody } from "reactstrap";
//import "bootstrap/dist/css/bootstrap.min.css";
import axiosMethods from "../axiosMethods.js";
import "./Button.css";

const AddListButton = (props) => {
  const [popoverOpen, setPopoverOpen] = useState(false);
  const [name, setName] = useState("");

  const submitList = async (event) => {
    event.preventDefault();

    await axiosMethods.post("list", { name: name });
    toggle();
    setName("");
    props.handleNewList();
  };

  const toggle = () => setPopoverOpen(!popoverOpen);

  return (
    <div>
      <Button
        className="primary"
        id="Popover1"
        style={{
          fontSize: "3rem",
          padding: "1.5rem 1.2rem 0.5rem 1.2rem",
        }}
      >
        <p>+</p>
      </Button>
      <Popover
        placement="top"
        isOpen={popoverOpen}
        target="Popover1"
        toggle={toggle}
      >
        <PopoverHeader> Add new list</PopoverHeader>
        <PopoverBody>
          <form onSubmit={submitList}>
            <label for="title">
              List name:
              <br />
              <input
                type="text"
                id="title"
                placeholder="list name"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </label>
            <br />
            <br />
            <input type="submit" name="Submit" />
          </form>
        </PopoverBody>
      </Popover>
    </div>
  );
};

export default AddListButton;
