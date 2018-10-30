import React from 'react';
import Book from './Book';

import { gql } from 'apollo-boost';
import {graphql} from 'react-apollo';
import Searchbar from './SearchBar';
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
            title:"Je suis Sophie",
            author : "Reda Loukil",
            description : "Sophie was very kind as a child living in algeria , she was pretty cool and awesome , everybody in the city and province love Sophie character even if she was very young",
        }
    }
    render(){
        {console.log(BooksGSLQuery)}
        return(

            <div className="content">
            <br/>
            <br/>
            <div className="search">
                <Searchbar/>
            </div>
            <br/>
            <br/>
            <div className="books">
                <Book book={this.state.book}/>
                <Book book={this.state.book}/>
                <Book book={this.state.book}/>
                <Book book={this.state.book}/>
                <Book book={this.state.book}/>
            </div>
            </div>
        )
    }
    
}

export default graphql(BooksGSLQuery)(BookList);