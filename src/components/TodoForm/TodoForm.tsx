import { useState } from "react";
import "./TodoForm.css";

import uuid from "react-uuid";
import { loadTodos, saveTodos } from "../../relatedScripts/localStorage";
import TodoList from "../TodoList/TodoList";

function TodoForm() {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState(loadTodos());

  function saveInLS() {
    if (value !== "") {
      const dataFromLS = loadTodos();
      const newId = uuid();

      const newTodoItem = {
        id: newId,
        text: value,
        status: false,
      };
      dataFromLS.push(newTodoItem);
      saveTodos(dataFromLS);
      setValue("");
      setTodos(loadTodos());
    }
  }

  return (
    <div className="add-todo-block">
      <input
        type="text"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <button onClick={saveInLS}>click!</button>
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default TodoForm;
