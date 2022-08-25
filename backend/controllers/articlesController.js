const Article = require('../models/articleModel')
const User = require('../models/userModel')
const multer = require('multer')


// @desc    Get All articles or by query
// @route   GET /api/articles
// @access  Public
exports.getArticles = async (req, res) => {
    try {
        const artcles = await Article.find()
        res.status(200).json({ count: artcles.length, data: artcles })
    } catch (error) {
        res.status(404).json({
            message: "Articles not found",
            err: error.message,
        })
    }
}

// @desc    Get All articles of the loged in user
// @route   GET /api/articles
// @access  Private
exports.getArticlesByUser = async (req, res) => {

    try {
        const artcles = await Article.find({ user: req.user.id })
        res.status(200).json({ count: artcles.length, data: artcles })
    } catch (error) {
        res.status(404).json({
            message: "Articles not found",
            err: error.message,
        })
    }
}

// @desc    Get article by id
// @route   GET /api/articles/:id
// @access  Public
exports.getArticle = async (req, res) => {
    try {
        const article = await Article.findById(req.params.id)
        res.status(200).json({ article })
    } catch (error) {
        res.status(404).json({
            message: "Article Not Found",
            err: error.message,
        })
    }
}

// @desc    POST post artcle
// @route   POST /api/articles
// @access  Private
exports.postArticle = async (req, res) => {
    console.log(req.file);
    if (!req.body) {
        res.status(400)
        throw new Error('Please add all fields')
    }

    const addStudent = await Article.create({
        user: req.user.id,
        league: req.body.league,
        team: req.body.team,
        title: req.body.title,
        article: req.body.article,
        articleImage: req.file.path
    })
    res.status(200).json({ data: addStudent })
}

// @desc    PUT update article
// @route   PUT /api/articles/:id
// @access  Private
exports.editArticle = async (req, res) => {
    const article = await Article.findById(req.params.id)

    if (!article) {
        res.status(400)
        throw new Error('Goal not found')
    }

    // Check for user
    if (!req.user) {
        res.status(401)
        throw new Error('User not found')
    }

    // Make sure the logged in user matches the goal user
    if (article.user.toString() !== req.user.id) {
        res.status(401)
        throw new Error('User not authorized')
    }

    const updateArticle = await Article.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })

    res.status(200).json(updateArticle)
}

// @desc    Delete article by id
// @route   DELETE /api/:id
// @access  Private
exports.deleteArticle = async (req, res) => {
    try {
        await Article.findByIdAndRemove(req.params.id)
        res.status(200).json({ id: req.params.id })
    } catch (error) {
        res.status(400).json({
            message: "Article Not Found",
            err: error.message,
        })
    }
}
