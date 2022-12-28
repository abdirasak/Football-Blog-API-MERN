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

  const NEW_API = API_URL + 'currUser'

  const response = await axios.get(NEW_API, config)

  return response.data
}

const authorService = {
  createArticle,
  getArticles
}

export default authorService