import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import authorService from './authorService'

const initialState = {
  articles: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: ''
}

// Create new Article
export const createArticle = createAsyncThunk(
  'articles/create',
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

// Get Articles
export const getArticles = createAsyncThunk(
  'article/getAll',
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await authorService.getArticles(token)
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
  },

  extraReducers: (builder) => {
    builder
      .addCase(createArticle.pending, (state) => {
        state.isLoading = true
      })
      .addCase(createArticle.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        console.log(action.payload)
        state.articles.data.push(action.payload.data)
      })
      .addCase(createArticle.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })

      .addCase(getArticles.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getArticles.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.articles = action.payload
      })
      .addCase(getArticles.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
  }
})

export const { reset } = authorSlice.actions
export default authorSlice.reducer

