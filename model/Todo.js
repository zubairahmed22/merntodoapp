const mongoose = require("mongoose")

const TodoSchema = new  mongoose.Schema({
    content:{
        type: String,
        required:true,
    },

}) 

module.exports = new mongoose.model("TODO",TodoSchema)