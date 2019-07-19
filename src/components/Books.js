import React, { Component } from 'react';
import books from '../Data/books.json';
import { Link} from 'react-router-dom';
import './books.css';

class Books extends Component {
  render() {
    return (
      <React.Fragment>
        {books.map((book, index) => (
          <div className="book" key={index}>
            <h1 key={index}>
              <Link to={`/books/${index + 1}`}>{book.bookName}</Link>
            </h1><br/><br/>
            <img src={require('../images/'+(index+1)+'.jpg')} height="100px" width="100px" alt="Book"/>
            <br />
            <p>{book.about}</p>
          </div>
        ))}
      </React.Fragment>
    );
  }
}

export default Books;
