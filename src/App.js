import React, { useState } from "react";
import TodoList from "./todo/TodoList";
import Context from "./context";
import AddTodo from "./todo/AddTodo";

function App() {
  let [todos, setTodos] = useState([
    { id: 1, title: "Learn JS", completed: false },
    { id: 2, title: "Learn React", completed: true },
    { id: 3, title: "Learn HTML", completed: false },
  ]);

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const addTodo = (title) => {
    setTodos(
      todos.concat([
        {
          id: Date.now(),
          title,
          completed: false,
        },
      ])
    );
  };

  return (
    <Context.Provider value={{ removeTodo }}>
      <div className="wrapper">
        <h1>Simple React todo</h1>
        <AddTodo onCreate={addTodo} />
        {todos.length ? (
          <TodoList todos={todos} onToggle={toggleTodo} />
        ) : (
          <div>Ooooops, there is no tasks to do!</div>
        )}
      </div>
    </Context.Provider>
  );
}

export default App;
