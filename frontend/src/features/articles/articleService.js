import axios from 'axios'

const API_URL = '/api/articles'

// Get all article
const getArticles = async () => {
  const response = await axios.get(API_URL)
  return response.data
}

const articleService = {
  getArticles,
}

export default articleService