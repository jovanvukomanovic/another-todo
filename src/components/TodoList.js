import React from "react";
import Todo from "./Todo";

export default function TodoList({ todos, markTodo, deleteTodo }) {
  let allTodos = todos.map((todo, index) => {
    return (
      <Todo
        key={todo.id}
        todo={todo}
        index={index}
        markTodo={markTodo}
        deleteTodo={deleteTodo}
      />
    );
  });

  return (
    <div>
      <div className="container">
        <div className="row">{allTodos}</div>
      </div>
    </div>
  );
}
