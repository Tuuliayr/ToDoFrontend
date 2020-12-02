import React from "react";
import PropTypes from "prop-types";

import Button from "./Button.js";

const AddButton = (props) => {
  return (
    <div style={{ display: "inline-block" }}>
      <Button onClick={props.onAddNew} style={{ fontSize: "3rem" }}>
        +
      </Button>
    </div>
  );
};

AddButton.propTypes = {
  onAddNew: PropTypes.node.isRequired,
};

export default AddButton;
