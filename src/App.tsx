import { useState } from "react";
import "./App.css";

import TodoForm from "./components/TodoForm/TodoForm";

function App() {
  return (
    <>
      <div className="btn-filter-block">
        <button>Все</button>
        <button className="btn-filter__ToDoAtWork">Активные</button>
        <button className="btn-filter__ToDoCompleted">Выполненные</button>
      </div>
      <TodoForm />
    </>
  );
}

export default App;
