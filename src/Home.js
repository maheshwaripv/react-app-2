import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Login from './components/Login';
import About from './components/About';
import Register from './components/Register';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav id="navbar">
            <ul id="routes">
              <li><Link to={'/'} >Home</Link></li>
              <li><Link to={'/register'} >Register</Link></li>
              <li><Link to={'/about'} >About</Link></li>
              <li><Link to={'/login'} > Login </Link></li>
            </ul>
          </nav>
          <hr />
          <Switch>
            <Route path='/register' component={Register} />
            <Route path='/about' component={About} />
            <Route path='/login' component={Login} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default Home;