import React, { Component } from 'react';
import Book from './Book';

export class BookList extends Component {
  render() {
    return (
      <div>
        {this.props.books.map((book) => (
          <Book
            key={book.id}
            title={book.title}
            toggleRead={this.props.toggleRead}
            removeBook={this.props.removeBook}
            book={book}
          />
        ))}
      </div>
    );
  }
}

export default BookList;
