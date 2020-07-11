import React from 'react';
import logo from '../logo32.png';

const Header = (props) => {
  return (
    <div>
      <header className="library-header">
        <div className="logo">
          <img className="page-logo" src={logo} alt="Page Logo" />
        </div>
        <h1 className="header-title">My Library</h1>
        <input
          className="search-books"
          type="text"
          placeholder="Search for book..."
          onChange={props.updateQuery}
        />
      </header>
    </div>
  );
};

export default Header;
