import type { Todo } from "../../types";
import { saveTodos } from "../../relatedScripts/localStorage";
import TodoItem from "../TodoItem/TodoItem";

interface TodoListProps {
  allTodos: Todo[];
  todos: Todo[];
  setTodosFromApp: React.Dispatch<React.SetStateAction<Todo[]>>;
}

function TodoList({ allTodos, todos, setTodosFromApp }: TodoListProps) {
  function changeStatus(id: string) {
    const changedList = allTodos.map((el) => {
      if (el.id === id) {
        return { ...el, status: !el.status };
      }
      return el;
    });

    saveTodos(changedList);
    setTodosFromApp(changedList);
  }

  function deleteToDoItem(id: string) {
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
