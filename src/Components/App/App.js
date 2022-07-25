import { useDispatch, useSelector } from 'react-redux'
import { fetchingTodos, selectTodos } from '../../store/features/todos/todosSlice'
import { useEffect } from 'react'

import TodoForm from '../TodoForm/TodoForm'
import Todo from '../Todo/Todo'

import './App.css'

function App() {

  const todos = useSelector(selectTodos)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchingTodos())
  }, [])

  return (
    <div className="App">
      <TodoForm/>
      {
        todos.map(todo => <Todo key={todo.id} todo={todo}/>)
      }
    </div>
  )
}

export default App
