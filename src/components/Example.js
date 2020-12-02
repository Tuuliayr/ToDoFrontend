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
import "./Popover.sass";

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
        placement="bottom"
        target="PopoverLegacy"
      >
        <PopoverHeader>Lisää uusi lista</PopoverHeader>
        <PopoverBody>
          Legacy is a reactstrap special trigger value (outside of bootstrap's
          spec/standard). Before reactstrap correctly supported click and focus,
          it had a hybrid which was very useful and has been brought back as
          trigger="legacy". One advantage of the legacy trigger is that it
          allows the popover text to be selected while also closing when
          clicking outside the triggering element and popover itself.
        </PopoverBody>
      </UncontrolledPopover>
    </div>
  );
};

export default Example;
