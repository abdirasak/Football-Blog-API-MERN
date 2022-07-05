// @desc    Get articles
// @route   GET /api/articles
// @access  Public
exports.getArticles = async(req, res) => {
    res.status(200).json({msg: 'Get list of articles'})
}

// @desc    Get signle article
// @route   GET /api/articles/:id
// @access  Public
exports.getArticle = async(req, res) => {
    res.status(200).json({msg: `Get single article ${req.params.id}`})
}

// @desc    POST post artcle
// @route   POST /api/articles
// @access  Private
exports.postArticle = async(req, res) => {
    res.status(200).json({msg: 'Add article'})
}

// @desc    PUT update article
// @route   PUT /api/articles/:id
// @access  Private
exports.editArticle = async(req, res) => {
    res.status(200).json({msg: `Edit article ${req.params.id}`})
}

// @desc    Delete delete article by id
// @route   DELETE /api/:id
// @access  Private
exports.deleteArticle = async(req, res) => {
    res.status(200).json({msg: `Delete article ${req.params.id}`})
}
