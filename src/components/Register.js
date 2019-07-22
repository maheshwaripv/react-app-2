import React, { Component } from 'react';
import "../Home.css";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      cnfpass: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: [target.value] })
  }

  handleSubmit(e) {
    if (localStorage.getItem(this.state.username) != null) {
      alert("User already exists...... Moving to login page");
      this.props.history.push('/login');
    }
    else {
      let cp = document.getElementById("cpas").value;
      let p = document.getElementById("pas").value;
      if (cp === p) {
        localStorage.setItem(this.state.username, this.state.password);
        this.props.history.push('/login');
      }

      else {
        this.setState({ cnfpass: "", password: "" });
        alert("Enter same password..!!");
      }
    }
  }

  // handleSubmit(e) {
  //   var username = document.getElementById("email").value;

  //   var pass = document.getElementById("pwd").value;

  //   var cnfpass = document.getElementById("cnfpwd").value;
  //   if (localStorage.getItem(username) != null) {
  //     alert("User already exists...... Moving to login page");
  //     this.props.history.push('./login');
  //   }
  //   else {
  //     if (cnfpass === pass) {
  //       localStorage.setItem(username, pass);
  //       this.props.history.push('./login');
  //     }

  //     else {
  //       document.getElementById("pwd").value = null;
  //       document.getElementById("cnfpwd").value = null;
  //       alert("Enter same password..!!");
  //     }
  //   }

  // }

  render() {
    return (
      <div>
        <form className="myForm">
          <fieldset>
            <legend>Register</legend>
            <table>
              <tbody>
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
                  <td><input type="text" name="username" value={this.state.username} onChange={this.handleChange} placeholder="Email" required /></td>
                </tr>
                <tr>
                  <td>Password:</td>
                  <td><input id="pas" type="password" name="password" value={this.state.password} onChange={this.handleChange} placeholder="Password" required /></td>
                </tr>
                <tr>
                  <td>Confirm Password:</td>
                  <td><input id="cpas" name="cnfpass" value={this.state.cnfpass} onChange={this.handleChange} type="password" placeholder="Confirm Password" required /></td>
                </tr>
              </tbody>
            </table>

            <button type="button" onClick={this.handleSubmit}>Submit</button>

          </fieldset>
        </form>
      </div>
    );
  }
}

export default Register;