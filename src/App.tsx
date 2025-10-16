import { useState, useEffect, useMemo } from "react";
import "./App.css";

import { loadTodos } from "./relatedScripts/localStorage";
import TodoForm from "./components/TodoForm/TodoForm";

function App() {
  const [todos, setTodos] = useState(loadTodos());
  const [filter, setFilter] = useState("all");
  const [countActive, setCountActive] = useState(0);

  useEffect(() => {
    const onlyActive = todos.filter((todo) => !todo.status).length;
    setCountActive(onlyActive);
  }, [todos]);

  const filteredTodos = useMemo(() => {
    if (filter === "atWork") {
      return todos.filter((todo) => !todo.status);
    } else if (filter === "completed") {
      return todos.filter((todo) => todo.status);
    }
    return todos;
  }, [todos, filter]);

  //---------------------------------------------------------------------------------

  return (
    <>
      <h2 className="count-active-status">Активных задач: {countActive}</h2>
      <div className="btn-filter-block">
        <button
          className={`btn-filter__ToDoAll ${filter === "all" ? "active" : ""}`}
          onClick={() => setFilter("all")}
        >
          Все
        </button>
        <button
          className={`btn-filter__ToDoAtWork ${
            filter === "atWork" ? "active" : ""
          }`}
          onClick={() => setFilter("atWork")}
        >
          Активные
        </button>
        <button
          className={`btn-filter__ToDoCompleted ${
            filter === "completed" ? "active" : ""
          }`}
          onClick={() => setFilter("completed")}
        >
          Выполненные
        </button>
      </div>
      <TodoForm
        allTodos={todos}
        todos={filteredTodos}
        setTodosFromApp={setTodos}
      />
    </>
  );
}

export default App;
