import React, { Component } from 'react';

class Login extends Component {
 handleLoginButton=()=>{
   
 }

  render() {
    return (
        <div>
          <h2>Inside Login</h2>
          <form>
            <fieldset>
            <legend>Login</legend>
            <table>
              <tr>
                <td>Email:</td>
                <td><input type="text" placeholder="Email" required/></td>  
              </tr>
              <tr>
                <td>Password:</td>
                <td><input type="password" placeholder="Password"required/></td>
              </tr>
            </table>
            <button type="submit" onClick="handleLoginButton()">Login</button> 
            </fieldset>
            
          </form>
        </div>
    );
  }
}

export default Login;