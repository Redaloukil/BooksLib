const graphql = require('graphql');


//IMPORT GRAPH QL OBJECT FORM GRAPHQL PACKAGE
const {GraphQLObjectType , GraphQLID , GraphQLString , GraphQLSchema } = graphql;

//SPECIFING A SCHEMA FOR GRAPHQL 
const BookType = GraphQLObjectType({
    name : 'Book',
    fields : () => ({
        id : {
            type : GraphQLID
        },
        name : {
            type : GraphQLString 
        },
        author : {

        }


    })
})

const RootQuery = GraphQLObjectType({
    name : 'RootQueryType',
    fields :()=> ({
        book : {
            type : BookType,
            args :  {
                id : {
                    type : GraphQLString , 
                }
            }
        }
    })
})




export default new GraphQLSchema({
    RootQuery,
});