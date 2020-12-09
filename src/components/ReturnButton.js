import React from "react";
import Button from "./Button.js";
import returnIcon from "../assets/return_button.png";
import { useHistory } from "react-router-dom";

const ReturnButton = (props) => {
  const history = useHistory();

  return (
    <div>
      <Button onClick={() => history.goBack()}>
        <img src={returnIcon} alt="returnIcon" style={{ height: "70px" }} />
      </Button>
    </div>
  );
};

export default ReturnButton;
