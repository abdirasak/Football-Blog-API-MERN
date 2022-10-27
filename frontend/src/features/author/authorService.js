import axios from 'axios'

const API_URL = '/api/articles/'

// Create new Article
const createArticle = async (articleData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.post(API_URL, articleData, config)

  return response.data
}

const authorService = {
  createArticle,

}

export default authorService