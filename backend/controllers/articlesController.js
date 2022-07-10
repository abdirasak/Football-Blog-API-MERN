const Article = require('../models/articleModel')

// @desc    Get All articles or by query
// @route   GET /api/articles
// @access  Public
exports.getArticles = async(req, res) => {
    try {
        const artcles = await Article.find(req.query)
        res.status(200).json({count: artcles.length, data: artcles}) 
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
exports.getArticle = async(req, res) => {
    try {
        const article = await Article.findById(req.params.id)
        res.status(200).json({article})
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
exports.postArticle = async(req, res) => {
    try {
        const addStudent = await Article.create(req.body)
        res.status(200).json({data: addStudent})
    } catch (error) {
        res.status(401).json({
            message: "Artcile not created",
            err: errorr.message,
        })
    }
    
}

// @desc    PUT update article
// @route   PUT /api/articles/:id
// @access  Private
exports.editArticle = async(req, res) => {
    try {
        const updatedpost = await Article.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.status(200).json(updatedpost) 
    } catch (error) {
        res.status(400).json({
            message: "Article Not Found",
            err: error.message,
        })
    }  
}

// @desc    Delete article by id
// @route   DELETE /api/:id
// @access  Private
exports.deleteArticle = async(req, res) => {
    try {
        await Article.findByIdAndRemove(req.params.id)
        res.status(200).json({id: req.params.id})
    } catch (error) {
        res.status(400).json({
            message: "Article Not Found",
            err: error.message,
        })
    }
}
