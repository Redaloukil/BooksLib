import React from 'react';

const Book = (props) => {
    return (
        <div className="third">
        <div className="book">
        <h1>{props.book.title}</h1>
        <p>{props.book.description}</p>
        </div>
        </div>
        
    )
}

export default Book;