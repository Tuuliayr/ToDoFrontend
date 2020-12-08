/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React from "react";
import {
  Button,
  UncontrolledPopover,
  PopoverHeader,
  PopoverBody,
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import "./Button.sass";
import ListForm from "./ListForm.js";

const Example = (props) => {
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
          <ListForm />
        </PopoverBody>
      </UncontrolledPopover>
    </div>
  );
};

export default Example;
