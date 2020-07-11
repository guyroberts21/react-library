import React, { Component } from 'react';

export class AddBook extends Component {
  state = {
    title: '',
    author: '',
    pages: '',
  };

  isDisabled = () => {
    const { title, author, pages } = this.state;
    if (title === '' || author === '' || pages === '') return true;
    else return false;
  };

  updateQuery = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const { title, author, pages } = this.state;
    this.props.addBook(title, author, pages);
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          name="title"
          type="text"
          placeholder="Title"
          onChange={this.updateQuery}
        />
        <input
          name="author"
          type="text"
          placeholder="Author"
          onChange={this.updateQuery}
        />
        <input
          name="pages"
          type="number"
          placeholder="No. of pages"
          onChange={this.updateQuery}
        />
        <button className="add-book" disabled={this.isDisabled()}>
          Add
        </button>
      </form>
    );
  }
}

export default AddBook;
