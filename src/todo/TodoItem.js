import React, { useContext } from "react";
import PropTypes from "prop-types";
import Context from "../context";

const styles = {
  li: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: ".5rem 1rem",
    border: "solid 1px grey",
    marginBottom: ".5rem",
    borderRadius: ".5rem",
  },
  input: {
    marginRight: "1rem",
  },
  button: {
    borderRadius: "1rem",
    background: "red",
    borderColor: "red",
    color: "white",
  },
};

const TodoItem = ({ todo, index, onToggle }) => {
  const { removeTodo } = useContext(Context);
  const classes = [];

  if (todo.completed) {
    classes.push("done");
  }

  return (
    <li style={styles.li}>
      <span className={classes.join(" ")}>
        <input
          type="checkbox"
          checked={todo.completed}
          style={styles.input}
          onChange={() => onToggle(todo.id)}
        />
        <b>{index + 1}.</b> {todo.title}
      </span>
      <button onClick={() => removeTodo(todo.id)} style={styles.button}>
        &times;
      </button>
    </li>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.object,
  index: PropTypes.number,
  completed: PropTypes.bool,
  onToggle: PropTypes.func,
};

export default TodoItem;
