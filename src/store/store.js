import { taskReducer } from './features/task/taskSlice'
import { todosReducer } from './features/todos/todosSlice'
import { configureStore } from '@reduxjs/toolkit'


const store = configureStore({
    reducer: {
        todos: todosReducer,
        task: taskReducer
    }
})

export default store