const express = require('express');
//DEFINE SCHEMA FILE WHICH SPECIFY TYPE OF QUERIES 
const schema = require('./schemas/schema');
const graphqlHTTP = require('express-graphql');
const mongoose = require('mongoose');



const app = express();

//Connect to remote mongoDB database 
mongoose.connect("mongodb://redaloukil:redareda0@ds141813.mlab.com:41813/books_lib");
mongoose.connection.once('open' , () => {
    console.log("connected to database")  
})




app.use('/graphql', graphqlHTTP({
    schema ,
    graphiql:true
}))

app.listen(8000 , function() {
    console.log("server starts listening on 8000")
})