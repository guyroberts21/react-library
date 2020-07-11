import React from 'react';

const BookBtns = (props) => {
  const { toggleRead, book, removeBook } = props;

  return (
    <div className="book-btns">
      <button
        className={book.read ? 'book-read-btn' : 'book-read-btn not-read'}
        onClick={() => toggleRead(book.id)}
      >
        {book.read ? 'Read' : 'Not Read'}
      </button>
      <button className="book-del-btn" onClick={() => removeBook(book.id)}>
        X
      </button>
    </div>
  );
};

export default BookBtns;
