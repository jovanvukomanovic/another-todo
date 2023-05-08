import "./App.css";
import Jumbotron from "./components/Jumbotron";
import NewTodo from "./components/NewTodo";
import TodoList from "./components/TodoList";
import { useState } from "react";
import { useId } from "react";

function App() {
  const ID = useId();
  const [todos, setTodos] = useState([
    {
      id: 1,
      msg: "clean house",
      done: false,
    },
    {
      id: 2,
      msg: "buy bread",
      done: false,
    },
  ]);

  let markTodo = (index) => {
    const copyTodos = [...todos];
    copyTodos[index].done = !copyTodos[index].done;
    setTodos(() => copyTodos);
  };

  let deleteTodo = (index) => {
    let copyTodos = [...todos];
    copyTodos.splice(index, 1);
    setTodos(() => copyTodos);
  };

  let addTodo = (todo) => {
    // todo.id = Math.floor(Math.random() * (10000 - 10) - 10);
    todo.id = ID;
    setTodos(() => [...todos, todo]);
  };

  return (
    <div className="App wrapp">
      <Jumbotron />
      <NewTodo addTodo={addTodo} />
      <TodoList todos={todos} markTodo={markTodo} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
