import React from 'react';
import Book from './Book';

const BookList = (props) => {
  const { query, books, toggleRead, removeBook } = props;

  const showingBooks =
    query === ''
      ? books
      : books.filter((b) =>
          b.title.toLowerCase().includes(query.toLowerCase())
        );

  return (
    <div className="books-list">
      {showingBooks.map((book) => (
        <Book
          key={book.id}
          title={book.title}
          author={book.author}
          pages={book.pages}
          toggleRead={toggleRead}
          removeBook={removeBook}
          book={book}
        />
      ))}
    </div>
  );
};

export default BookList;
