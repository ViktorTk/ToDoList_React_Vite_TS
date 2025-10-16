import { useState } from "react";
import "./TodoForm.css";

import uuid from "react-uuid";
import type { Todo } from "../../types";
import { saveTodos } from "../../relatedScripts/localStorage";
import TodoList from "../TodoList/TodoList";

interface TodoFormProps {
  allTodos: Todo[];
  todos: Todo[];
  setTodosFromApp: React.Dispatch<React.SetStateAction<Todo[]>>;
}

function TodoForm({ allTodos, todos, setTodosFromApp }: TodoFormProps) {
  const [value, setValue] = useState("");

  function saveInLS() {
    if (value !== "") {
      const newId = uuid();
      const newTodoItem = {
        id: newId,
        text: value,
        status: false,
      };

      const updatedTodos = [...allTodos, newTodoItem];
      saveTodos(updatedTodos);
      setValue("");
      setTodosFromApp(updatedTodos);
    }
  }

  //---------------------------------------------------------------------------------

  return (
    <div className="add-todo-block">
      <input
        type="text"
        placeholder="Введите текст задачи:"
        value={value}
        onChange={(event) => setValue(event.target.value)}
        onKeyDown={(event) => {
          if (event.key === "Enter") saveInLS();
        }}
      />
      <button className="add-todo-block__btn-add-todo" onClick={saveInLS}>
        Добавить
      </button>
      <TodoList
        allTodos={allTodos}
        todos={todos}
        setTodosFromApp={setTodosFromApp}
      />
    </div>
  );
}

export default TodoForm;
