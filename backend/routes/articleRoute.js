const express = require('express')
const router = express.Router()
const { getArticles, getArticle, postArticle, editArticle, deleteArticle, getArticlesByUser} = require('../controllers/articlesController');
const {protect} = require('../middleware/authMiddleware')

router.get('/', getArticles)
router.get('/userAricles', protect, getArticlesByUser)
router.get('/:id', getArticle)
router.post('/', protect, postArticle)
router.put('/:id',protect, editArticle)
router.delete('/:id', protect, deleteArticle)


module.exports = router