function TodoItem({ id, text, status, changeStatus, deleteToDoItem }) {
  return (
    <li data-id={id}>
      <span>{text}</span>
      <input
        type="checkbox"
        checked={status}
        onChange={() => changeStatus(id)}
      />
      <button onClick={() => deleteToDoItem(id)}>Удалить</button>
    </li>
  );
}

export default TodoItem;
