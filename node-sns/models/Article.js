const mongoose = require('mongoose')
const Schema = mongoose.Schema

const articleSchema = new Schema({
    _id: Number,
    title: String,
    author: Number,
    body: String,
    likes: Number,
    tags: [{type: String}],
    createdAt: {
        type: Date,
        default: Date().toLocaleString()
    },
    updatedAt : {
        type : Date,
        default : Date().toLocaleString()
    },
}, { 
    _id: false 
});

module.exports = mongoose.model('Article', articleSchema)