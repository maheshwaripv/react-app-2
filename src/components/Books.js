import React, { Component } from 'react';
import books from '../Data/books.json';
import { Link } from 'react-router-dom';
import './books.css';

class Books extends Component {
  constructor(props) {
    super(props);
    this.logoutButton = this.logoutButton.bind(this);
  }

  logoutButton() {
    this.props.history.push("/login");
  }

  render() {
    return (
      <React.Fragment>
        {books.map((book, index) => (
          <div className="book" key={index}>
            <h1 key={index}>
              <Link to={`/books/${index + 1}`}>{book.bookName}</Link>
            </h1><br /><br />
            <img src={require('../images/' + (index + 1) + '.jpg')} height="100px" width="100px" alt="Book" />
            <br />
            <p>{book.about}</p>
          </div>
        ))}
        <br />
        <br />
        <button type="button" onClick={this.logoutButton}>Logout</button>
      </React.Fragment>
    );
  }
}

export default Books;
