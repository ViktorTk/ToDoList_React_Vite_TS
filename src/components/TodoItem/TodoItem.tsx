import { useState } from "react";
import "./TodoItem.css";

import { loadTodos, saveTodos } from "../../relatedScripts/localStorage";

function TodoItem({
  id,
  text,
  status,
  setTodosFromApp,
  changeStatus,
  deleteToDoItem,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(text);

  function handleEdit() {
    setIsEditing(true);
    setEditText(text);
  }

  function handleCancel() {
    setEditText(text);
    setIsEditing(false);
  }

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      handleSave();
    } else if (event.key === "Escape") {
      handleCancel();
    }
  }

  // Сохранить изменения
  function handleSave() {
    if (editText.trim() === "") return;

    // Обновляем задачу иммутабельно
    const updatedTodos = loadTodos().map((todo) => {
      if (todo.id === id) {
        return { ...todo, text: editText.trim() };
      }
      return todo;
    });

    saveTodos(updatedTodos);
    setTodosFromApp(updatedTodos);
    setIsEditing(false);
  }

  //---------------------------------------------------------------------------------

  return (
    <li data-id={id}>
      <div className="todo-item-block">
        {isEditing ? (
          <input
            type="text"
            value={editText}
            onChange={(event) => setEditText(event.target.value)}
            onBlur={handleSave}
            onKeyDown={handleKeyDown}
            autoFocus
          />
        ) : (
          <>
            <span onDoubleClick={handleEdit}>{text}</span>

            <div className="todo-item-block__setting_block">
              <label className="switch">
                <input
                  type="checkbox"
                  checked={status}
                  onChange={() => changeStatus(id)}
                />
                <span className="slider round"></span>
              </label>
              <button onClick={() => deleteToDoItem(id)}>Удалить</button>
            </div>
          </>
        )}
      </div>
    </li>
  );
}

export default TodoItem;
