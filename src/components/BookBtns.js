import React, { Component } from 'react';

export class BookBtns extends Component {
  render() {
    return (
      <div>
        <button
          className="book-read-btn"
          onClick={() => this.props.toggleRead(this.props.book.id)}
        >
          {this.props.book.read ? 'Read' : 'Not Read'}
        </button>
        <button
          className="book-del-btn"
          onClick={() => this.props.removeBook(this.props.book.id)}
        >
          X
        </button>
      </div>
    );
  }
}

export default BookBtns;
