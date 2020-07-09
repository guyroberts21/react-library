import React, { Component } from 'react';
import Book from './Book';

export class BookList extends Component {
  render() {
    return (
      <div>
        {this.props.books.map((book) => (
          <Book title={book.title} />
        ))}
      </div>
    );
  }
}

export default BookList;
