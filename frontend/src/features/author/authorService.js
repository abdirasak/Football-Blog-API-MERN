import axios from 'axios'

const API_URL = '/api/articles/'

// Create new Article
const createArticle = async (articleData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'multipart/form-data'
    },
  }

  const response = await axios.post(API_URL, articleData, config)

  return response.data
}

// Get user Articles
const getArticles = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.get(API_URL, config)

  return response.data
}

const authorService = {
  createArticle,
  getArticles
}

export default authorService