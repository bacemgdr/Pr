import React from "react";
function Login() {
    return (
      <div className="box">
      <h1>Login</h1>
      <input type="text" placeHolder="Username"/>
      <input type="password" placeHolder="Password"/>
      <button>Login</button>
      <p>Not a member? <a href="/register">Sign Up</a></p>
    </div>
 
    )
  }
  
  export default Login;