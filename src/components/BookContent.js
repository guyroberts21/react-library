import React, { Component } from 'react';

export class BookContent extends Component {
  render() {
    return (
      <div>
        <p>{this.props.title}</p>
      </div>
    );
  }
}

export default BookContent;
