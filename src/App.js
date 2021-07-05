import React, { useState, useEffect } from "react";
import TodoList from "./todo/TodoList";
import Context from "./context";
import Loader from './Loader';
import Modal from './modal/Modal';

const AddTodoForm = React.lazy(() => import('./todo/AddTodoForm'));

function App() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
      .then(response => response.json())
      .then(todos => {
        setTimeout(() => {
          setTodos(todos);
          setLoading(false);
        }, 2000)
      })
  }, [])


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
    setTodos(todos.concat([
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
        <Modal />

        <React.Suspense fallback={<p>Loading...</p>}>
          <AddTodoForm onCreate={addTodo} />
        </React.Suspense>

        {loading && <Loader />}

        {todos.length ? (
          <TodoList todos={todos} onToggle={toggleTodo} />
        ) : (
          loading || <div>Oops, there is no tasks to do!</div>
        )}
      </div>
    </Context.Provider>
  );
}

export default App;
