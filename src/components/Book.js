import React from 'react';
import BookContent from './BookContent';
import BookBtns from './BookBtns';

const Book = (props) => {
  const { title, author, pages, toggleRead, removeBook, book } = props;

  return (
    <div className="book">
      <BookContent title={title} author={author} pages={pages} />
      <BookBtns
        toggleRead={toggleRead}
        removeBook={removeBook}
        book={book}
        read={book.read}
      />
    </div>
  );
};

export default Book;
