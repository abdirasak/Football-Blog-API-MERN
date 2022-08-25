const mongoose = require('mongoose')

const articleSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    league: {
        type: String,
        required: [true, 'Please add league title']
    },

    team: {
        type: String,
        required: [true, 'Please add team name']
    },

    title: {
        type: String,
        required: [true, 'Please add title']
    },

    article: {
        type: String,
        required: [true, 'Please add article']
    },

    articleImage: {
        type: String,
        required: [true, 'Please add an image']
    }
})

module.exports = mongoose.model('Article', articleSchema)