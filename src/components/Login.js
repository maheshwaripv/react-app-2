import React, { Component } from 'react';
import "../Home.css";

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleLoginButton = this.handleLoginButton.bind(this);
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: [target.value] })
  }

  handleLoginButton() {
    var passd = localStorage.getItem(this.state.username);
    var pass=document.getElementById("pass").value;
    if (pass === passd) {
      sessionStorage.setItem("uname", this.state.username);
      sessionStorage.setItem(this.state.username, this.state.pass);
      this.props.history.push('/books');
    }
    else {
      this.setState({username:"",password:""});
      alert("Incorrect id or password");
    }
  }

  render() {
    return (
      <div>
        <form className="loginForm">
          <fieldset>
            <legend>Login</legend>
            <table>
              <tbody>
                <tr>
                  <td>Email:</td>
                  <td><input type="text" name="username" value={this.state.username} onChange={this.handleChange} placeholder="Email" required /></td>
                </tr>
                <tr>
                  <td>Password:</td>
                  <td><input id="pass" type="password" name="password" value={this.state.password} onChange={this.handleChange} placeholder="Password" required /></td>
                </tr>
              </tbody>
            </table>

            <button type="submit" onClick={this.handleLoginButton} >Login</button>
          </fieldset>

        </form>
      </div>
    );
  }
}

export default Login;