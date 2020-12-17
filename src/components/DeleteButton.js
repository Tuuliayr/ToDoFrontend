import React from "react";
import Button from "./Button.js";
import returnIcon from "../assets/delete.png";

const DeleteButton = (props) => {
  return (
    <div>
      <Button onClick={props.onClick} style={{ padding: "0.25rem" }}>
        <img
          src={returnIcon}
          id={props.id}
          alt="deleteIcon"
          style={{ height: "1.5rem" }}
        />
      </Button>
    </div>
  );
};

export default DeleteButton;
