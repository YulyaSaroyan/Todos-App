import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

import axios from 'axios'

export const fetchingTodos = createAsyncThunk(
    'todos/fetchingTodos',
    async function() {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos')
        const data = await response.data
        return data
    }
)

const todosSlice = createSlice({
    name: 'todos',
    initialState: [],
    reducers: {
        addTodo: (state, action) => {
            return (
                [
                    {
                        id: new Date().getTime().toString(),
                        title: action.payload.title,
                        completed: false,
                        isInEditMode: false
                    },
                    ...state
                ]
            ) 
        },
        deleteTodo: (state, action) => {
            return [...state.filter(todo => todo.id !== action.payload.id)]
        },
        isCompleteTodo: (state, action) => {
            return [...state.map(todo => todo.id === action.payload.id ? {...todo, completed: action.payload.value} : todo)]
        },
        isInEditModeTodo: (state, action) => {
            return [...state.map(todo => todo.id === action.payload.id ? {...todo, isInEditMode: action.payload.isEdit} : todo)]
        },
        startEditingTodoTask: (state, action) => {
            return [...state.map(todo => todo.id === action.payload.id ? {...todo, title: action.payload.value} : todo)]
        },
        stopEditingTodoTask: (state, action) => {
            return [...state.map(todo => todo.id === action.payload.id ? {...todo, title: action.payload.task, isInEditMode: action.payload.isEdit} : todo)]
        }
    },
    extraReducers: {
        [fetchingTodos.fulfilled]: (state, action) => {
            console.log('I am here')
            return [...state, ...action.payload]
        }
    }
})

export const { addTodo, deleteTodo, isCompleteTodo, isInEditModeTodo, startEditingTodoTask, stopEditingTodoTask } = todosSlice.actions

export const selectTodos = state => state.todos

export const todosReducer = todosSlice.reducer


