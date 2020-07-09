import React, { Component } from 'react';

export class AddBook extends Component {
  render() {
    return (
      <form>
        <input name="title" type="text" placeholder="Title" />
        <input name="author" type="text" placeholder="Author" />
        <input name="numberofpages" type="number" placeholder="No. of pages" />
        <button disabled="true">Add</button>
      </form>
    );
  }
}

export default AddBook;
