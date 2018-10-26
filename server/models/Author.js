const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const AuthorSchema = new schema({
    name : String,
})


module.exports = mongoose.model("Author", AuthorSchema);