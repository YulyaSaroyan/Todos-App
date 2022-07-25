import { createSlice } from "@reduxjs/toolkit"

const taskSlice = createSlice({
    name: 'task',
    initialState: '',
    reducers: {
        changeTask: (state, action) => {
            return  action.payload.task
        }
    }
})

export const { changeTask } = taskSlice.actions

export const selectTask = state => state.task

export const taskReducer = taskSlice.reducer