import { useState, useMemo } from 'react'
import './App.css'

import { loadTodos } from './relatedScripts/localStorage'
import TodoForm from './components/TodoForm/TodoForm'

function App() {
  const [todos, setTodos] = useState(loadTodos())
  const [filter, setFilter] = useState('all')

  const filteredTodos = useMemo(() => {
    if (filter === 'atWork') {
      return todos.filter((todo) => !todo.status)
    } else if (filter === 'completed') {
      return todos.filter((todo) => todo.status)
    }
    return todos
  }, [todos, filter])

  return (
    <>
      <div className="btn-filter-block">
        <button onClick={() => setFilter('all')}>Все</button>
        <button
          className="btn-filter__ToDoAtWork"
          onClick={() => setFilter('atWork')}
        >
          Активные
        </button>
        <button
          className="btn-filter__ToDoCompleted"
          onClick={() => setFilter('completed')}
        >
          Выполненные
        </button>
      </div>
      <TodoForm todos={filteredTodos} setTodosFromApp={setTodos} />
    </>
  )
}

export default App
