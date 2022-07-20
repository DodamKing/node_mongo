const mongoose = require('mongoose')
const Schema = mongoose.Schema

const musicSchema = new Schema({
    file: Buffer,
    createdAt: {
        type: Date,
        default: Date().toLocaleString()
    },
    updatedAt : {
        type : Date,
        default : Date().toLocaleString()
    },
}, 
);

module.exports = mongoose.model('Music', musicSchema)