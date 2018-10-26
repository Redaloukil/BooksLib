const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const BookSchema = new schema({
    name : String,
    authorID : String,
})


module.exports = mongoose.model("Book", BookSchema);