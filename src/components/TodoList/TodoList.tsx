import { useState } from 'react'

import type { Todo } from '../../types'
import { saveTodos } from '../../relatedScripts/localStorage'
import TodoItem from '../TodoItem/TodoItem'

function TodoList({ todos, setTodos }) {
  function changeStatus(id) {
    const changedList = todos.map((el) => {
      if (el.id === id) {
        return { ...el, status: !el.status }
      }
      return el
    })

    saveTodos(changedList)
    setTodos(changedList)
  }

  function deleteToDoItem(id) {
    const filteredList = todos.filter((el) => el.id !== id)

    saveTodos(filteredList)
    setTodos(filteredList)
  }

  return (
    <ol>
      {todos.map((el) => (
        <TodoItem
          key={el.id}
          id={el.id}
          text={el.text}
          status={el.status}
          changeStatus={changeStatus}
          deleteToDoItem={deleteToDoItem}
        />
      ))}
    </ol>
  )
}

export default TodoList
