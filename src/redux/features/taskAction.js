import { createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit"
import axios from "axios"

const POST_URL = "http://localhost:8000"

// create User
export const createTask = createAsyncThunk("createTask", async (formData) => {
  try {
    const response = await axios.post(`${POST_URL}/projects`, formData)
    console.log(response.data)
    return response.data
  } catch (error) {
    return isRejectedWithValue(error.response)
  }
})

export const getTasks = createAsyncThunk("getTasks", async (_) => {
  try {
    const response = await axios.get(`${POST_URL}/projects`)
    console.log(response.data)
    return response.data
  } catch (error) {
    return isRejectedWithValue(error.response)
  }
})

export const getTask = createAsyncThunk("getTask", async (id) => {
  try {
    const response = await axios.get(`${POST_URL}/projects/${id}`)
    console.log(response.data)
    return response.data
  } catch (error) {
    return isRejectedWithValue(error.response)
  }
})

export const updateTask = createAsyncThunk(
  "updateTask",
  async (id, updateData) => {
    try {
      const response = await axios.put(`${POST_URL}/projects/${id}`, updateData)
      console.log(response.data)
      return response.data
    } catch (error) {
      return isRejectedWithValue(error.response)
    }
  }
)

export const deleteTask = createAsyncThunk("deleteTask", async (id) => {
  try {
    const response = await axios.delete(`${POST_URL}/projects/${id}`)
    console.log(response.data)
    return response.data
  } catch (error) {
    return isRejectedWithValue(error.response)
  }
})
