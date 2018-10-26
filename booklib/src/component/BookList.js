import React from 'react';
import Book from './Book';

import { gql } from 'apollo-boost';
import {graphql} from 'react-apollo';
import '../App.css';

const BooksGSLQuery = gql`
    {
        Books{
            name
        }
    }
`





class BookList extends React.Component {
    state = {
        book: {
            title : "Reda Loukil",
            description : "aya ha rouh l darkoum",
        }
    }
    render(){
        {console.log(BooksGSLQuery)}
        return(
            
                <div className="books">
                </div>
            
            
        )
    }
    
}

export default graphql(BooksGSLQuery)(BookList);