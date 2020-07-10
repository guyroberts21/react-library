import React from 'react';

const BookBtns = (props) => {
  const { toggleRead, book, removeBook } = props;

  return (
    <div>
      <button className="book-read-btn" onClick={() => toggleRead(book.id)}>
        {book.read ? 'Read' : 'Not Read'}
      </button>
      <button className="book-del-btn" onClick={() => removeBook(book.id)}>
        X
      </button>
    </div>
  );
};

export default BookBtns;
