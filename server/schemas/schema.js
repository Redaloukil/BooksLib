const graphql = require('graphql');
const _ = require('lodash');

const Book = require('../models/Book');
const Author = require('../models/Author');

//IMPORT GRAPH QL OBJECT FORM GRAPHQL PACKAGE
const {GraphQLObjectType , GraphQLString , GraphQLSchema , GraphQLID , GraphQLList } = graphql;


const Books = [
    {
        id : "1" , 
        name : "operating system",
        authorID : "1"
    },
    {
        id : "2" , 
        name : "Ditribuated system",
        authorID : "3"
    },
    {
        id : "3" , 
        name : "Netwoking",
        authorID : "2"
    },

]
    
const Authors = [
    {
        id : "1", 
        name : "Reda ",
    },
    {
        id : "2" , 
        name : "Mohamed",
    },
    {
        id : "3" , 
        name : "Loukil",
        
    },]

//SPECIFING A SCHEMA FOR GRAPHQL 
const BookType = new GraphQLObjectType({
    name:'Book',
    fields:() => ({
        id : {type : GraphQLID},
        name : {type : GraphQLString},
        Author : {
            type: AuthorType,
            resolve(parent , args){
                return _.find(Authors , {id : parent.authorID})
            }
        }
    })
})

const AuthorType = new GraphQLObjectType({
    name:'Author',
    fields:() => ({
        id : {type : GraphQLID},
        name : {type : GraphQLString},
        Books : {
            type : new GraphQLList(BookType),
            resolve(parent , args){
                return  _.filter(Books , {id:parent.id})
            }
        }
    
    })
})

const Mutations = new GraphQLObjectType({
    name : 'Mutation',
    fields : {
        addAuthor : {
            type : AuthorType , 
            args : {
                name : {type :GraphQLString} , 
            },
            resolve(parent , args){
                let author = new Author({
                    name : args.name,
                })
                return author.save();
            }
        },
        addBook:{
            type:BookType , 
            args : {
                name : { type : GraphQLString},
                authorID : { type : GraphQLID},
            },
            resolve(parent , args ){
                let book = new Book({
                    name : args.name , 
                    authorID : args.authorID,
                })
                return book.save()
            }
        }
    }
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
            args : {id : {type : GraphQLID }}, 
            resolve(parent , args){
                 return _.find( Authors , {id: args.id})
            }
        },
        Books : {
            type : new GraphQLList(BookType) , 
            resolve(parent , args ) {
                return Books
            }
        },
        Authors : {
            type : new GraphQLList(AuthorType) , 
            resolve(parent , args ) {
                return Authors
            }
        }
    }
})


module.exports = new GraphQLSchema({
    query : RootQuery,
    mutation : Mutations,
});