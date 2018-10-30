import React from 'react';
import { Link } from 'react-router';


const Book = (props) => {
    return (
        <div className="third">
            <div className="book">
                <h1 className="title">{props.book.title}</h1>
                <p className="description">{props.book.description}</p>
                <h6 className="author">by {props.book.author}</h6>
                <a></a>
            </div>
        </div>
        
    )
}

export default Book;