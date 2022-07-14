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
    date : {type : Date, default : getCurrentDate().toDateString},
})


function getCurrentDate() {
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth();
    var today = date.getDate();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var milliseconds = date.getMilliseconds();
    return new Date(Date.UTC(year, month, today, hours, minutes, seconds, milliseconds));
}

module.exports = mongoose.model('Employee', employSchema)