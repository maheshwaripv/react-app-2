import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Books from './components/Books';
import BookPage from './components/BookPage';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav id="navbar">
            <ul id="routes">
              <li><Link to={'/'} >Home</Link></li>
              <li id="rlink"><Link to={'/register'} >Register</Link></li>
              <li id="llink"><Link to={'/login'} > Login </Link></li>
              {/* <li id="blink"><Link to={'/books'} > Books </Link></li> */}
            </ul>
          </nav>
          <hr />
          <Switch>
            <Route path='/register' component={Register} />
            <Route path='/login' component={Login} />
            <Route exact path='/books' component={Books} />
            <Route exact path='/books/:bookID' component={BookPage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default Home;