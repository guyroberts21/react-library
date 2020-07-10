import React, { Component } from 'react';

export class BookBtns extends Component {
  render() {
    return (
      <div>
        <button className="book-read-btn" onClick={this.props.toggleRead}>
          Not Read
        </button>
        <button className="book-del-btn" onClick={this.props.deleteBook}>
          X
        </button>
      </div>
    );
  }
}

export default BookBtns;
