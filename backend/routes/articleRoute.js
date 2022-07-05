const express = require('express')
const router = express.Router()
const { getArticles, getArticle, postArticle, editArticle, deleteArticle} = require('../controllers/articlesController');

router.get('/', getArticles)
router.get('/:id', getArticle)
router.post('/', postArticle)
router.put('/:id', editArticle)
router.delete('/:id', deleteArticle)


module.exports = router