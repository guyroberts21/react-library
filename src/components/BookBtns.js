import React, { Component } from 'react';

export class BookBtns extends Component {
  render() {
    return (
      <div>
        <button className="book-read-btn">Not Read</button>
        <button className="book-del-btn">X</button>
      </div>
    );
  }
}

export default BookBtns;
