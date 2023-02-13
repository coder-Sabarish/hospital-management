import React from "react";
import "./Login.css";
function Login() {
  return (
    <>
      <center>
        <div className="form">
          <form>
            <h1>Login</h1>
            <br />
            <br />
            <div>
              <label>Username</label>
              <input type="text" placeholder="Enter your username" />
            </div>
            <br />
            <br />
            <div>
              <label>password</label>
              <input type="password" placeholder="Type your password" />
            </div>
            <br />
            <p id="forgotPassword">forgot Password?</p>
          </form>
        </div>
      </center>
    </>
  );
}
export default Login;
