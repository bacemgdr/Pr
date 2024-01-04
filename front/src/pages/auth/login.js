import React, { useState } from "react";

import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  // form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/user/login", {
        email,
        password,
      });
 
        toast.success(res.data && res.data.message);
        navigate("/");
        console.log('rrr',res.data);
   
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };
  return (
    
    <div className="box">
    <h1>Login</h1>
    <form action="#" onSubmit={handleSubmit}>
    <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter Your Email "
              required
            />
      <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Enter Your Password"
              required
            />
     <button type="submit" className="btn btn-primary">
            LOGIN
          </button>''
          </form>
    <p>Not a member? <a href="/register">Sign Up</a></p>
  </div>
  
  );
};

export default Login;