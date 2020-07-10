import React, { Component } from 'react';
import BookContent from './BookContent';
import BookBtns from './BookBtns';

export class Book extends Component {
  render() {
    return (
      <div className="book">
        <BookContent title={this.props.title} />
        <BookBtns
          toggleRead={this.props.toggleRead}
          removeBook={this.props.removeBook}
          book={this.props.book}
          read={this.props.book.read}
        />
      </div>
    );
  }
}

export default Book;
