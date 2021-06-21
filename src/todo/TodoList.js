import React from "react";
import TodoItem from "./TodoItem";
import PropTypes from "prop-types";

const styles = {
  ul: {
    listStyle: "none",
    margin: 0,
    padding: 0,
  },
};

const TodoList = ({ todos, onToggle }) => {
  return (
    <ul style={styles.ul}>
      {todos.map((todo, index) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          index={index}
          onToggle={onToggle}
        />
      ))}
    </ul>
  );
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  onToggle: PropTypes.func,
};

export default TodoList;
