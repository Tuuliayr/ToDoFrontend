import React from "react";
import axios from "axios";

const ListForm = (props) => {
  const [name, setname] = React.useState("");

  const handleChange = (event) => {
    setname(event.target.value);
  };

  const handleSubmit = (event) => {
    axios({
      method: "post",
      url: "/list",
      baseURL: "https://tamk-4a00ez62-3001-group10.herokuapp.com/api",
      data: { name: name },
    })
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
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
          value={name}
          onChange={handleChange}
        />
      </label>
      <br />
      <br />
      <input type="submit" name="Submit" />
    </form>
  );
};

export default ListForm;
