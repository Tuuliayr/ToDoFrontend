import React from "react";
import PropTypes from "prop-types";

import "./Button.sass";

const Button = (props) => {
  return (
    <button className="primary" {...props}>
      {props.children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Button;
