import React from "react";
// { useState } from "react";
// import {
//   Dropdown,
//   DropdownToggle,
//   DropdownMenu,
//   DropdownItem,
// } from "reactstrap";

class DropDown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "Select priority",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("Your favorite flavor is: " + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Choose priority:
          <br />
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
    // render() {
    //   return (
    //     <Dropdown>
    //       <DropdownToggle
    //         dropDownValue={this.state.dropDownValue}
    //         onChange={this.handleChange}
    //       ></DropdownToggle>
    //       <DropdownMenu>
    //         <DropdownItem>1</DropdownItem>
    //         <DropdownItem>2</DropdownItem>
    //         <DropdownItem>3</DropdownItem>
    //       </DropdownMenu>
    //     </Dropdown>
    //   );
  }
}

// const DropDown = (props) => {
//   const [dropdownOpen, setDropdownOpen] = useState(false);

//   const toggle = () => setDropdownOpen((prevState) => !prevState);

//   return (
//     <Dropdown isOpen={dropdownOpen} toggle={toggle}>
//       <p>Choose priority:</p>
//       <DropdownToggle caret>Priority</DropdownToggle>
//       <DropdownMenu>
//         <DropdownItem>1</DropdownItem>
//         <DropdownItem>2</DropdownItem>
//         <DropdownItem>3</DropdownItem>
//       </DropdownMenu>
//     </Dropdown>
//   );
// };

export default DropDown;
