const graphql = require('graphql');
const _ = require('lodash')


//IMPORT GRAPH QL OBJECT FORM GRAPHQL PACKAGE
const {GraphQLObjectType , GraphQLString , GraphQLSchema , GraphQLID } = graphql;


const Books = [
    {
        id : 1 , 
        name : "operating system",
        author : "Reda Loukil"
    },
    {
        id : 2 , 
        name : "Ditribuated system",
        author : "Reda Loukil"
    },
    {
        id : 3 , 
        name : "Netwoking",
        author : "Reda Loukil"
    },

]
    
const Authors = [
    {
        id : 1 , 
        name : "Reda ",
    },
    {
        id : 2 , 
        name : "Mohamed",
    },
    {
        id : 3 , 
        name : "Loukil",
        
    },

]


//SPECIFING A SCHEMA FOR GRAPHQL 
const BookType = new GraphQLObjectType({
    name:'Book',
    fields:() => ({
        id : {type : GraphQLID},
        name : {type : GraphQLString},
        author : {type : GraphQLString}
    })
})

const AuthorType = new GraphQLObjectType({
    name:'Author',
    fields:() => ({
        id : {type : GraphQLID},
        name : {type : GraphQLString},
    })
})


const RootQuery = new GraphQLObjectType({
    name : 'RootQueryType',
    fields :{
        Book :{ 
            type : BookType, 
            args : {id : {type : GraphQLID }}, 
            resolve(parent , args){
                return _.find( Books , {id: args.id})
            }
        },
        Author : {
            type : AuthorType, 
            args : {id : {type : GraphQLString }}, 
            resolve(parent , args){
                 
                return _.find( Authors , {id: args.id})
            }
        }
    }
})


module.exports = new GraphQLSchema({
    query : RootQuery,
});