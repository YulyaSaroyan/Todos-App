import { useDispatch, useSelector } from "react-redux"
import { addTodo } from "../../store/features/todos/todosSlice"
import { changeTask, selectTask } from "../../store/features/task/taskSlice"

import './TodoForm.css'

const TodoForm = () => {

    const task = useSelector(selectTask)
    const dispatch = useDispatch()

    return (
        <div className="TodoForm">
            <form onSubmit={e =>  {
                e.preventDefault()
                dispatch(addTodo({title: task}))
                dispatch(changeTask({ task: '' }))
            }}>
                <input type="text" placeholder="Add a task..." value={task} onChange={e => dispatch(changeTask({task: e.target.value}))}/>
                <button>Add</button>
            </form>
        </div>
    )
}

export default TodoForm