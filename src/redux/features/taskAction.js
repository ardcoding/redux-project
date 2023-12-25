import { createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit"
import axios from "axios"

const POST_URL = "http://localhost:5000"

// create User
export const createTask = createAsyncThunk("createTask", async (formData) => {
  try {
    const response = await axios.post(`${POST_URL}/project/create`,formData)
    console.log(response.data)
    return response.data
  } catch (error) {
    return isRejectedWithValue(error.response)
  }
})

export const getTasks = createAsyncThunk("getTasks", async (_) => {
  try {
    const response = await axios.get(`${POST_URL}/project/getall`)
    console.log(response.data)
    return response.data
  } catch (error) {
    return isRejectedWithValue(error.response)
  }
})

export const getTask = createAsyncThunk("getTask", async (id) => {
  try {
    const response = await axios.get(`${POST_URL}/project/get/${id}`)
    console.log(response.data)
    return response.data
  } catch (error) {
    return isRejectedWithValue(error.response)
  }
})

export const updateTask = createAsyncThunk(
  "updateTask",
  async (id, updateData) => {
    console.log(updateData)
    try {
      const response = await axios.put(
        `${POST_URL}/project/update/${id}`,
        updateData
      )
      console.log(response.data)
      return response.data
    } catch (error) {
      return isRejectedWithValue(error.response)
    }
  }
)

export const deleteTask = createAsyncThunk("deleteTask", async (id) => {
  try {
    const response = await axios.delete(`${POST_URL}/project/delete/${id}`)
    console.log(response.data)
    return response.data
  } catch (error) {
    return isRejectedWithValue(error.response)
  }
})
