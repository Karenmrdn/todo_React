import React, { useState } from "react";
import PropTypes from "prop-types";

const AddTodo = ({ onCreate }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (value.trim()) {
      onCreate(value);
      setValue("");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "1rem" }}>
      <input value={value} onChange={(event) => setValue(event.target.value)} />
      <button type="submit">Add todo</button>
    </form>
  );
};

AddTodo.propTypes = {
  onCreate: PropTypes.func.isRequired,
};

export default AddTodo;
