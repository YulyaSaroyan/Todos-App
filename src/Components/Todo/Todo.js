import { useDispatch} from "react-redux"

import { deleteTodo, startEditingTodoTask, isCompleteTodo, isInEditModeTodo, stopEditingTodoTask } from "../../store/features/todos/todosSlice"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

import './Todo.css'

const Todo = ({ todo }) => {

    const dispatch = useDispatch()

    return (
        <div className="Todo">
            <div className="TodoTask">
                {
                    todo.isInEditMode ? <input className="inputEdit" type="text" value={todo.title}  onChange={e => dispatch(startEditingTodoTask({id: todo.id, value: e.target.value}))} onBlur={e => dispatch(stopEditingTodoTask({id: todo.id, task: e.target.value, isEdit: false}))}/> : <p className={todo.completed ? 'taskIsDone' : ''}  onClick={() => dispatch(isInEditModeTodo({id: todo.id, isEdit: true}))}>{todo.title}</p>
                }
                {todo.isInEditMode ? '' : <input type="checkbox" className="inputChekbox" checked={todo.completed} onChange={e => dispatch(isCompleteTodo({id: todo.id, value: e.target.checked}))}/>}
                <FontAwesomeIcon icon={faTrash} className="Remove" onClick={() => dispatch(deleteTodo({id: todo.id}))}/>
            </div>
        </div>
    )
}

export default Todo