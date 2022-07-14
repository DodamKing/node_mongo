// import mongoose from "mongoose";
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const employSchema = new Schema({
    id : { 
        type : Number, 
        require : true
    },
    name : {
        type : String,
        require : true,
        default : 'noname',
    },
    addr : {city : String, detail : String},
    position : String,
    date : {type : Date, default : Date.now},
})

module.exports = mongoose.model('Employees', employSchema)