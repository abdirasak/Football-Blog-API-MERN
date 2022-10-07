const Article = require('../models/articleModel')
const User = require('../models/userModel')



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

// @desc    Get All articles of the logged in user
// @route   GET /api/articles/currUser
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

// @desc    Articles can be added by logged in user only 
// @route   POST /api/articles
// @access  Private
exports.postArticle = async (req, res) => {
    if (!req.body) {
        res.status(400)
        throw new Error('Please add all fields')
    }

    const addArticle = await Article.create({
        user: req.user.id,
        league: req.body.league,
        team: req.body.team,
        title: req.body.title,
        article: req.body.article,
        articleImage: req.file.path
    })
    res.status(200).json({ data: addArticle })
}

// @desc    Articles can be updated by owner or admin
// @route   PUT /api/articles/:id
// @access  Private
exports.editArticle = async (req, res) => {

    try {
        //find article by id
        const article = await Article.findById(req.params.id)

        //check if article exists 
        if (!article) {
            res.status(400)
            throw new Error('Article not found')
        }

        // check if the loged in user matches the article user
        if (article.user.toString() !== req.user.id && req.user.role !== "admin") {
            res.status(401)
            throw new Error('User not authorised to edit this article')
        }

        const updateArticle = await Article.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        })

        res.status(200).json({ data: updateArticle })

    } catch (error) {
        res.status(400).json({
            message: "Article Not Found",
            err: error.message,
        })
    }

}

// @desc    Article  can be deleted by admin or owner
// @route   DELETE /api/articles/:id
// @access  Private
exports.deleteArticle = async (req, res) => {
    try {
        const article = await Article.findById(req.params.id)

        //check if article exists 
        if (!article) {
            res.status(400)
            throw new Error('Article not found')
        }

        // check if the logged in user id matches the article user
        if (article.user.toString() !== req.user.id && req.user.role !== "admin") {
            res.status(401)
            throw new Error('Not outhorised to delete this article')
        }

        //Delete article
        await article.remove()
        res.status(200).json({ id: req.params.id })

    } catch (error) {
        res.status(400).json({
            message: "Article Not Found",
            err: error.message,
        })
    }
}
