import { useState } from 'react'
import './TodoForm.css'

import uuid from 'react-uuid'
import { saveTodos } from '../../relatedScripts/localStorage'
import TodoList from '../TodoList/TodoList'

function TodoForm({ todos, setTodosFromApp }) {
  const [value, setValue] = useState('')

  function saveInLS() {
    if (value !== '') {
      const newId = uuid()
      const newTodoItem = {
        id: newId,
        text: value,
        status: false,
      }

      const updatedTodos = [...todos, newTodoItem]
      saveTodos(updatedTodos)
      setValue('')
      setTodosFromApp(updatedTodos)
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
      <TodoList todos={todos} setTodos={setTodosFromApp} />
    </div>
  )
}

export default TodoForm
