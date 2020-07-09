import React, { Component } from 'react';
import BookContent from './BookContent';
import BookBtns from './BookBtns';

export class Book extends Component {
  render() {
    return (
      <div className="book">
        <BookContent title={this.props.title} />
        <BookBtns />
      </div>
    );
  }
}

export default Book;
