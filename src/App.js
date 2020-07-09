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
      },
    ],
  };

  render() {
    return (
      <div className="App">
        <Header />
        <AddBook />
        <BookList books={this.state.books} />
      </div>
    );
  }
}

export default App;
