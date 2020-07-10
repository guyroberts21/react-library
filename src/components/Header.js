import React, { Component } from 'react';

export class Header extends Component {
  render() {
    return (
      <div>
        <header className="library-header">
          <div className="logo">
            <img src="logo32.png" alt="Page Logo" />
          </div>
          <h1 className="header-title">My Library</h1>
          <input
            className="search-books"
            type="text"
            placeholder="Search for book..."
            onChange={this.props.updateQuery}
          />
        </header>
      </div>
    );
  }
}

export default Header;
