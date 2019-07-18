import React, { Component } from 'react';

class Register extends Component {
  handleSubmitButton=()=>{
   
  }
  render() {
    return (
      <div>
        <h2>Inside Register</h2>
        <from>
          <fieldset>
            <legend>Register</legend>
            <table>
              <tr>
                <td>Full Name:</td>
                <td><input type='text' placeholder='Enter Your full name' required/></td>
              </tr>
              <tr>
                <td>Age:</td>
                <td><input type='number' placeholder='Enter your age' required/></td>
              </tr>
              <tr>
                <td>Email:</td>
                <td><input type="text" placeholder="Email" required/></td>
              </tr>
              <tr>
                <td>Password:</td>
                <td><input type="password" placeholder="Password" required/></td>
              </tr>
              <tr>
                <td>Confirm Password:</td>
                <td><input type="password" placeholder="Confirm Password" required/></td>
              </tr>
            </table>
            <button type="submit" onClick="handleSubmitButton()">Submit</button>
          </fieldset>
        </from>
      </div>
    );
  }
}

export default Register;