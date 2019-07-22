import React from 'react';
import Books from '../Data/books.json';
import './books.css';

const BookPage = ({ match, history }) => {
    const {
        params: { bookID }
    } = match;

    const backButton = () => {
        history.goBack();
    }

    var logoutButton = () => {
        history.push("/login");
    }

    return (
        <React.Fragment>
            <div className="bookDiv">
                <img src={require('../images/' + bookID + '.jpg')} height="100" width="100" alt="book" />
                <br />
                <strong>{Books[bookID - 1].bookName}</strong>
                <br />
                {Books[bookID - 1].Cost}
                <br />
                <p>{Books[bookID - 1].description}</p>
            </div>
            <br />

            <button type="submit" onClick={backButton}>Back</button>
            <button type="button" onClick={logoutButton}>Logout</button>
        </React.Fragment>

    );
}

export default BookPage;