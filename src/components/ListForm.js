import React from "react";

const ListForm = (props) => {
  const [value, setValue] = React.useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    alert("A list name was submitted: " + value);
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        List name:
        <br />
        <input
          type="text"
          placeholder="list name"
          value={value}
          onChange={handleChange}
        />
      </label>
      <br />
      <br />
      <input type="submit" value="Submit" />
    </form>
  );
};

export default ListForm;
