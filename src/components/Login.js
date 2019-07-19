import React, { Component } from 'react';

class Login extends Component {

  constructor(props) {
    super(props);
    this.handleLoginButton = this.handleLoginButton.bind(this);
  }
  handleLoginButton() {
    var username=document.getElementById("email").value;
    var pass=document.getElementById("pwd").value;
    var passd=localStorage.getItem(username);

    if(pass===passd){
      sessionStorage.setItem(username,pass);
      this.props.history.push('/books');
    }
    else{
      document.getElementById("email").value=null;
      document.getElementById("pwd").value=null;
      alert("Incorrect id or password");
    }  
  }

  render() {
    return (
      <div>
        <form>
          <fieldset>
            <legend>Login</legend>
            <table>
              <tr>
                <td>Email:</td>
                <td><input id="email" type="text" placeholder="Email" required /></td>
              </tr>
              <tr>
                <td>Password:</td>
                <td><input id="pwd" type="password" placeholder="Password" required /></td>
              </tr>
            </table>

            <button type="submit" onClick={this.handleLoginButton} >Login</button>
          </fieldset>

        </form>
      </div>
    );
  }
}

export default Login;