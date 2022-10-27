import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import authorService from './authorService'

const initialState = {
  athorArticles: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: ''
}

// Create new Article
export const createArticle = createAsyncThunk(
  'article/create',
  async (articleData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await authorService.createArticle(articleData, token)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

export const authorSlice = createSlice({
  name: 'author',
  initialState,
  reducers: {
    reset: (state) => initialState
  }
})

export const reset = authorSlice.actions
export default authorSlice.reducer

