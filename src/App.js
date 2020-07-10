import React, { Component } from 'react';
import Header from './components/Header';
import AddBook from './components/AddBook';
import BookList from './components/BookList';
import './App.css';

class App extends Component {
  state = {
    books: [
      {
        title: 'Lord of the Rings',
        author: 'J.R.R Tolkien',
        pages: 597,
        read: false,
      },
    ],
    query: '',
  };

  updateQuery = (e) => {
    this.setState({
      query: e.target.value,
    });
  };

  addBook = (title, author, pages) => {
    this.setState((prevState) => ({
      books: [...prevState.books, { title, author, pages, read: false }],
    }));
  };

  render() {
    return (
      <div className="App">
        <Header updateQuery={this.updateQuery} />
        <AddBook addBook={this.addBook} />
        <BookList books={this.state.books} />
      </div>
    );
  }
}

export default App;
