const express = require('express')
//DEFINE SCHEMA FILE WHICH SPECIFY TYPE OF QUERIES 
const schema = require('./schema/schema')

const graphqlHTTP = require('express-graphql')

const app = express();



app.use('/graphql', graphqlHTTP({
    schema : schema,
}))

app.listen(8000 , function() {
    console.log("server starts listening on 8000")
})