import React, { Component } from 'react';

class Register extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  // registerButton=()=>{
  //   username=document.getElementById("email");
  //   pass=document.getElementById("pwd");
  //   localStorage.setItem(username,pass);
  // }

  handleSubmit(e) {
    var username = document.getElementById("email").value;
    console.log(username);
    var pass = document.getElementById("pwd").value;
    console.log(pass);
    var cnfpass = document.getElementById("cnfpwd").value;
    if (localStorage.getItem(username) != null) {
      alert("User already exists...... Moving to login page");
      this.props.history.push('./login');
    }
    else {
      if (cnfpass === pass) {
        localStorage.setItem(username, pass);
        this.props.history.push('./login');
      }

      else {
        document.getElementById("pwd").value = null;
        document.getElementById("cnfpwd").value = null;
        alert("Enter same password..!!");
      }
    }

  }

  render() {
    return (
      <div>
        <form>
          <fieldset>
            <legend>Register</legend>
            <table>
              <tr>
                <td>Full Name:</td>
                <td><input type='text' placeholder='Enter Your full name' required /></td>
              </tr>
              <tr>
                <td>Age:</td>
                <td><input type='number' placeholder='Enter your age' required /></td>
              </tr>
              <tr>
                <td>Email:</td>
                <td><input id="email" name="username" type="text" placeholder="Email" required /></td>
              </tr>
              <tr>
                <td>Password:</td>
                <td><input id="pwd" name="pass" type="password" placeholder="Password" required /></td>
              </tr>
              <tr>
                <td>Confirm Password:</td>
                <td><input id="cnfpwd" type="password" placeholder="Confirm Password" required /></td>
              </tr>
            </table>

            <button type="button" onClick={this.handleSubmit}>Submit</button>

          </fieldset>
        </form>
      </div>
    );
  }
}

export default Register;