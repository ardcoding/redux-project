import { createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit"
import axios from "axios"

const POST_URL = ""

// create User
export const createTask = createAsyncThunk("createUser", async (formData) => {
  try {
    const response = await axios.post(POST_URL, formData)
    console.log(response.data)
    return response.data
  } catch (error) {
    return isRejectedWithValue(error.response)
  }
})

export const getTasks = createAsyncThunk("getTasks", async (_) => {
  try {
    const response = await axios.get(POST_URL, _)
    console.log(response.data)
    return response.data
  } catch (error) {
    return isRejectedWithValue(error.response)
  }
})

export const getTask = createAsyncThunk("getTask", async (id) => {
  try {
    const response = await axios.get(`POST_URL / $(id)`, id)
    console.log(response.data)
    return response.data
  } catch (error) {
    return isRejectedWithValue(error.response)
  }
})
