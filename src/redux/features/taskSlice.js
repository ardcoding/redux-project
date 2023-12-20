import { createSlice } from "@reduxjs/toolkit"
import { createTask, deleteTask, getTask, getTasks } from "./taskAction"

const taskSlice = createSlice({
  name: "task",
  initialState: {
    task: {},
    tasks: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(createTask.pending, (state, action) => {
      state.loading = true
    })
    builder.addCase(createTask.fulfilled, (state, action) => {
      state.loading = false
      state.tasks = action.payload
    })
    builder.addCase(createTask.rejected, (state, action) => {
      state.loading = false
      state.error = action.payload
    })
    builder.addCase(getTasks.pending, (state, action) => {
      state.loading = true
    })
    builder.addCase(getTasks.fulfilled, (state, action) => {
      state.loading = false
      state.tasks = action.payload
    })
    builder.addCase(getTasks.rejected, (state, action) => {
      state.loading = false
      state.error = action.payload
    })
    builder.addCase(getTask.pending, (state, action) => {
      state.loading = true
    })
    builder.addCase(getTask.fulfilled, (state, action) => {
      state.loading = false
      state.tasks = action.payload
    })
    builder.addCase(getTask.rejected, (state, action) => {
      state.loading = false
      state.error = action.payload
    })
    builder.addCase(deleteTask.pending, (state, action) => {
      state.loading = true
    })
    builder.addCase(deleteTask.fulfilled, (state, action) => {
      state.loading = false
      state.error = action.payload
    })
    builder.addCase(deleteTask.rejected, (state, action) => {
      state.loading = false
      state.error = action.payload
    })
  },
})

export default taskSlice.reducer
