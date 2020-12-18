import React, { useState } from "react";
import { Button, Popover, PopoverHeader, PopoverBody } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import "./Button.css";

const AddListButton = () => {
  const [popoverOpen, setPopoverOpen] = useState(false);
  const [name, setName] = useState("");

  const submitList = async (event) => {
    try {
      const response = await axios({
        method: "post",
        url: "/list",
        baseURL: "https://tamk-4a00ez62-3001-group10.herokuapp.com/api",
        data: { name: name },
      });
      console.log(response);
    } catch (err) {
      console.log(err);
    }
    event.preventDefault();
  };

  const toggle = () => setPopoverOpen(!popoverOpen);

  return (
    <div>
      <Button
        className="primary"
        id="Popover1"
        style={{
          fontSize: "3rem",
          padding: "1.5rem 1rem 0.5rem 1rem",
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
