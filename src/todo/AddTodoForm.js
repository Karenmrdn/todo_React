import React, { useState } from "react";
import PropTypes from "prop-types";

const useInputValue = (defaultValue = '') => {
  const [value, setValue] = useState(defaultValue);

  return {
    bind: {
      value,
      onChange: (event) => setValue(event.target.value)
    },
    clear: () => setValue(''),
    value: () => value
  }
}

const AddTodoForm = ({ onCreate }) => {
  const input = useInputValue('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (input.value().trim()) {
      onCreate(input.value());
      input.clear();
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "1rem" }}>
      <input {...input.bind} />
      <button type="submit">Add todo</button>
    </form>
  );
};

AddTodoForm.propTypes = {
  onCreate: PropTypes.func.isRequired,
};

export default AddTodoForm;
