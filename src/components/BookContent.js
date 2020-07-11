import React from 'react';

const BookContent = (props) => {
  return (
    <div className="book-content">
      <p className="book-title">{props.title}</p>
      <p className="book-author">- By {props.author}</p>
      <p className="book-pages">{props.pages}</p>
    </div>
  );
};

export default BookContent;
