import React from "react";
import Button from "./Button.js";
import returnIcon from "../assets/delete.png";

const DeleteButton = (props) => {
  const handleDelete = () => {
    console.log("on delete");
  };

  return (
    <div>
      <Button onClick={handleDelete} style={{ padding: "0.25rem" }}>
        <img src={returnIcon} alt="deleteIcon" style={{ height: "1.5rem" }} />
      </Button>
    </div>
  );
};

export default DeleteButton;
