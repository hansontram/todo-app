//format to pass into mongodb

const mongoose = require('mongoose')
const todoTaskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})
//specifying what database and collection to connect to 
module.exports = mongoose.model('TodoTask', todoTaskSchema,'tasks')