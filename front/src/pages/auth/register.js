import React from "react";
function Register() {
  return (
    <div className="register">
      <div className="wrapper">
        <h2>Registration</h2>
        <form action="#">
          <div className="input-box">
            <input type="text" placeholder="Enter your name" required="" />
          </div>
          <div className="input-box">
            <input type="email" placeholder="Enter your email" required="" />
          </div>
          <div className="input-box">
            <input type="password" placeholder="Create password" required="" />
          </div>
          <div className="input-box">
            <input
              type="text"
              placeholder="Enter your phone number"
              required=""
            />
          </div>
          <div className="input-box">
            <input type="text" placeholder="Enter your Adresse" required="" />
          </div>
          <div className="input-box button">
            <input type="Submit" defaultValue="Register Now" />
          </div>
          <div className="text">
            <h3>
              Already have an account? <a href="/login">Login now</a>
            </h3>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
