import { saveTodos } from "../../relatedScripts/localStorage";
import TodoItem from "../TodoItem/TodoItem";

function TodoList({ allTodos, todos, setTodosFromApp }) {
  function changeStatus(id) {
    const changedList = allTodos.map((el) => {
      if (el.id === id) {
        return { ...el, status: !el.status };
      }
      return el;
    });

    saveTodos(changedList);
    setTodosFromApp(changedList);
  }

  function deleteToDoItem(id) {
    const filteredList = allTodos.filter((el) => el.id !== id);

    saveTodos(filteredList);
    setTodosFromApp(filteredList);
  }

  //---------------------------------------------------------------------------------

  return (
    <ol>
      {todos.map((el) => (
        <TodoItem
          key={el.id}
          id={el.id}
          text={el.text}
          status={el.status}
          changeStatus={changeStatus}
          setTodosFromApp={setTodosFromApp}
          deleteToDoItem={deleteToDoItem}
        />
      ))}
    </ol>
  );
}

export default TodoList;
