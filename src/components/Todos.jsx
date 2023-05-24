import React from "react";

const Todos = ({ todos, deleteTodo, doneTodo }) => {
  return todos.length > 0 ? (
    <ul className="todos">
      {todos.map((todo) => (
        <li key={todo.id} className="todos-item">
          <span
            className={
              todo.status ? "todos-text todos-text-done" : "todos-text"
            }
          >
            {todo.name}
          </span>
          <div className="todos-buttons">
            <button onClick={() => deleteTodo(todo.id)}>❌</button>
            <button onClick={() => doneTodo(todo.id)} disabled={todo.status}>
              ✅
            </button>
          </div>
        </li>
      ))}
    </ul>
  ) : null;
};

export default Todos;
