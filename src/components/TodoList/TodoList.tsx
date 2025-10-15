import { useState } from "react";

import type { Todo } from "../../types";
import { saveTodos } from "../../relatedScripts/localStorage";
import TodoItem from "../TodoItem/TodoItem";

function TodoList({ todos, setTodos }: Todo) {
  const [allTodos, setAllTodos] = useState(todos);

  function changeStatus(id) {
    console.log("qweqweqwe");
    console.log(allTodos);

    const copyAllTodos = [...allTodos];
    const changedList = copyAllTodos.map((el) => {
      if (el.id === id) {
        el.status = !el.status;
      }
      return el;
    });

    setAllTodos(changedList);
    saveTodos(changedList);
    setTodos(changedList);

    // setAllTodos(
    //   allTodos.map((el) => {
    //     console.log("qweqweqwe");
    //     if (el.id === id) {
    //       el.status = !el.status;
    //     }
    //     setTodos(allTodos);
    //     saveTodos(allTodos);

    //     return el;
    //   })
    // );
  }

  function deleteToDoItem(id) {
    const copyAllTodos = [...allTodos];
    const filteredList = copyAllTodos.filter((el) => {
      return el.id !== id;
    });

    setAllTodos(filteredList);
    saveTodos(filteredList);
    setTodos(filteredList);
  }

  const arrTag = todos.map((el) => {
    return (
      <TodoItem
        key={el.id}
        id={el.id}
        text={el.text}
        status={el.status}
        changeStatus={changeStatus}
        deleteToDoItem={deleteToDoItem}
      />
    );
  });

  return <ol>{arrTag}</ol>;
}

export default TodoList;
