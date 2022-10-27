import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import articleReducer from '../features/articles/articleSlice';
import authorReducer from '../features/author/authorSlice';
export const store = configureStore({
  reducer: {
    auth: authReducer,
    article: articleReducer,
    author: authorReducer
  },
});
