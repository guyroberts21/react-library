import React, { Component } from 'react';
import Header from './components/Header';
import AddBook from './components/AddBook';
import BookList from './components/BookList';
import { uuid } from 'uuidv4';
import './App.css';

// local storage
const storage = window.localStorage;

class App extends Component {
  state = {
    books: storage.getItem('books') ? JSON.parse(storage.getItem('books')) : [],
    query: '',
  };

  updateQuery = (e) => {
    this.setState({
      query: e.target.value,
    });
  };

  addBook = (title, author, pages) => {
    this.setState(
      (prevState) => ({
        books: [
          ...prevState.books,
          { id: uuid(), title, author, pages, read: false },
        ],
      }),
      () => storage.setItem('books', JSON.stringify(this.state.books))
    );
  };

  removeBook = (id) => {
    this.setState(
      (prevState) => ({
        books: prevState.books.filter((b) => b.id !== id),
      }),
      () => storage.setItem('books', JSON.stringify(this.state.books))
    );
  };

  // Changing the state of a property on an individual object was harder than I thought
  // => You need to first create a copy of the state you are changing, modify it, then replace in the current state
  toggleRead = (id) => {
    const booksCpy = this.state.books;
    const idx = booksCpy.findIndex((b) => b.id === id);
    booksCpy[idx].read = !booksCpy[idx].read;
    this.setState({
      books: booksCpy,
    });
  };

  render() {
    return (
      <div className="App">
        <Header updateQuery={this.updateQuery} />
        <AddBook addBook={this.addBook} />
        <BookList
          books={this.state.books}
          toggleRead={this.toggleRead}
          removeBook={this.removeBook}
          query={this.state.query}
        />
      </div>
    );
  }
}

export default App;
